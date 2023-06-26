import { useState, createContext } from "react";
import Child from "./components/Child";
import ChildFriend from "./components/ChildFriend";

export const AppContext = createContext();

function App() {
  const [gift, setGift] = useState(10000);

  return (
    <AppContext.Provider value={{ gift, setGift }}>
      {" "}
      <div className="bg-red-100">
        <Child />
        <ChildFriend />
      </div>
    </AppContext.Provider>
  );
}

export default App;
