import { useContext } from "react";
import { AppContext } from "../App";

const UltraSuperGrandChild = () => {
  const { gift, setGift } = useContext(AppContext);

  return (
    <div>
      <div className="w-40 h-40 bg-blue-300">UltraSuperGrandChild : {gift}</div>
      <button onClick={() => setGift(gift + 1)}>증가</button>
    </div>
  );
};

export default UltraSuperGrandChild;
