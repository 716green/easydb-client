import React from "react";
import { Props } from "./types/general";

const App: React.FC<Props> = ({ children }) => {
  return <div className="text-2xl h-full w-full p-8">{children}</div>;
};

export default App;
