import { useState } from "react";

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  const onClickAdd = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };
  const onClickSubtract = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };
  const onClickMultiply = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };
  const onClickDivide = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };
  const onChangeNum1 = (e) => {
    setNum1(e.target.value);
  };
  const onChangeNum2 = (e) => {
    setNum2(e.target.value);
  };

  return (
    <div className="mainBox min-h-screen flex flex-col justify-center items-center">
      <div>계산기입니다</div>
      <div>{result}</div>
      <div>
        <input
          className="bg-green-100 focus:outline-none focus:border-purple-500"
          type="text"
          value={num1}
          onChange={onChangeNum1}
        />
        <input
          className="bg-red-100 border-3 border-green-800"
          type="text"
          value={num2}
          onChange={onChangeNum2}
        />
      </div>
      <div>
        <button className="text-[50px] px-4" onClick={onClickAdd}>
          +
        </button>
        <button className="text-[50px] px-4" onClick={onClickSubtract}>
          -
        </button>
        <button className="text-[50px] px-4" onClick={onClickMultiply}>
          *
        </button>
        <button className="text-[50px] px-4" onClick={onClickDivide}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
