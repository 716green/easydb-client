import React, { useContext } from "react";
import { GlobalContext } from "@/context";

const GlobalStateView: React.FC = () => {
  const state = useContext(GlobalContext);

  return (
    <code className="h-screen w-screen absolute top-0 left-0 bg-black text-white flex overflow-auto">
      <pre className="h-full w-full">{JSON.stringify(state, null, 2)}</pre>
    </code>
  );
};

export default GlobalStateView;
