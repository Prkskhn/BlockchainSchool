import { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import { createContext } from "react";

export const AppContext = createContext();

function App() {
  const [allPoint, setAllPoint] = useState(localStorage.getItem("point") | 0);
  const startPoint = localStorage.getItem("point");
  if (!startPoint) {
    localStorage.setItem("point", 0);
  }

  return (
    <AppContext.Provider value={{ allPoint, setAllPoint }}>
      <div className="bg-red-100 min-w-full min-h-screen flex flex-col justify-center items-center ">
        <Result />
        <Input />
      </div>
    </AppContext.Provider>
  );
}

export default App;
