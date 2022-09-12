import { useContext } from "react";
import axios from "axios";
import { GlobalContext } from "@/context";

const useApi = () => {
  const {
    user: { email },
  } = useContext(GlobalContext);
  const api = () => {
    return axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
        "Content-Type": "application/json",
        userEmail: email,
      },
    });
  };

  return { api: api() };
};

export default useApi;
