import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [toggle, setToggle] = useState(false);
  const onClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {toggle && <Counter />}
      <button
        onClick={onClickToggle}
        className="border-2 border-red-300 px-3 py-1 m-4 text-red-500 font-bold bg-white rounded-md "
      >
        버튼
      </button>
    </div>
  );
}

export default App;
