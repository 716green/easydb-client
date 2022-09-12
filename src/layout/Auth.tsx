import React from "react";
import GithubIcon from "@/shared/GithubIcon";
import useAuth from "@/hooks/useAuth";

const Auth: React.FC = () => {
  const { signIn } = useAuth();

  return (
    <main className="h-full w-full bg-gray-900 flex absolute top-0 left-0">
      <button onClick={signIn} className="btn m-auto flex">
        <GithubIcon color="#f1f1f1" tailwindClasses="mr-2 my-auto" />
        <span className="my-auto">Login with GitHub</span>
      </button>
    </main>
  );
};

export default Auth;
