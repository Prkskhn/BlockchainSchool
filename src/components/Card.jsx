import { useState } from "react";
import { fakeUseState } from "../fakeHooks";

function Card(props) {
  const [count, setCount] = useState();
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();

  const { value, setValue } = fakeUseState();
  const { value: num3, setValue: setNum3 } = fakeUseState();
  const { value: num4, setValue: setNum4 } = fakeUseState();

  return <div className={`${props.color} w-40 h-60`}>{props.cardName}</div>;
}

export default Card;
