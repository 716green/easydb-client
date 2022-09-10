import React, { useContext } from "react";
import { GlobalContext } from "@/context";
import { Props } from "./types/general";

const App: React.FC<Props> = ({ children }) => {
  const { user } = useContext(GlobalContext);
  let name = user?.displayName || "Guest";
  return (
    <div className="text-2xl h-full w-full p-8">
      {/* Hello World {name} */}
      {children}
    </div>
  );
};

export default App;
