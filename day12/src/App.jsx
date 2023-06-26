import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="bg-red-100">{count}</div>
      <button className="bg-green-300" onClick={onClickAdd}>
        +
      </button>
    </>
  );
}

export default App;
