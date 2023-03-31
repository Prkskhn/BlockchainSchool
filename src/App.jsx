import { useState } from "react";

function App() {
  const [count, setCount] = useState(11);
  const onClickAdd = () => {
    setCount(count);
  };

  return (
    <>
      <div className="App bg-red-300">{count}</div>
      <button className="bg-emerald-300" onClick={onClickAdd}>
        +
      </button>
    </>
  );
}

export default App;
