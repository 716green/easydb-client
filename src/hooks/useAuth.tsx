import React, { useContext } from "react";
import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, ghProvider } from "@/config/firebase";
import { GlobalContext } from "@/context";

const useAuth = () => {
  const { setUser, setCredential, clearState } = useContext(GlobalContext);

  const signIn = async () => {
    await signInWithPopup(auth, ghProvider)
      .then((res) => {
        const credential = GithubAuthProvider.credentialFromResult(res);
        setUser(res?.user);
        setCredential(credential);
      })
      .finally(() => {
        window.location.href = "/";
      })
      .catch(({ code, message }) => {
        console.error(code, message);
      });
  };

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        clearState();
        console.log("signout success");
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return { signIn, logout };
};

export default useAuth;
