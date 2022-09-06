import { useContext } from "react";
import { GlobalContext } from "@/context";

const App = () => {
  const { user } = useContext(GlobalContext);
  let name = user?.displayName || "Guest";
  return <div className="text-2xl">Hello World {name}</div>;
};

export default App;
