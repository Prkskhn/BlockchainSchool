import { useContext, useState } from "react";
import { AppContext } from "../App";

const Input = () => {
  const [point, setPoint] = useState(5);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [inputNum, setInputNum] = useState();
  const [hint, setHint] = useState("1~99사이 숫자를 입력하세요");

  const { allPoint, setAllPoint } = useContext(AppContext);

  const onChangeValue = (e) => {
    setInputNum(e.target.value);
  };
  const onClickAdd = () => {
    let intInputNum = parseInt(inputNum);
    if (isNaN(intInputNum)) {
      setHint("숫자입력하거라");
      return;
    }
    if (intInputNum < 0 || intInputNum >= 100) {
      setHint("1~99로 입력하거라");
      return;
    }
    if (intInputNum === randomNum) {
      setHint("정답이구나 또하자");

      if (point > 0) {
        localStorage.setItem("point", parseInt(allPoint) + point);
        setAllPoint(localStorage.getItem("point"));
      }
      setPoint(5);
      setRandomNum(Math.floor(Math.random() * 100));
    } else if (intInputNum < randomNum) {
      setHint("더 커야한다");
      setPoint(point - 1);
    } else if (intInputNum > randomNum) {
      setHint("더 작아야한다");
      setPoint(point - 1);
    }
  };

  return (
    <div className="bg-green-100 min-w-full grow flex flex-col justify-center items-center">
      <div className="m-4">{hint}</div>
      <div>
        <input onChange={onChangeValue} type="text" value={inputNum} />
        <button onClick={onClickAdd} className="m-4">
          확인
        </button>
        <div>{inputNum}</div>
        <div>{randomNum}</div>
      </div>
    </div>
  );
};

export default Input;
