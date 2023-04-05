import { useContext } from "react";
import { AppContext } from "../App";

const GameResult = () => {
  const { point } = useContext(AppContext);
  const point1 = localStorage.getItem("point") | 0;

  return (
    <div className="bg-yellow-100 w-full grow flex flex-col justify-center items-center">
      <div className="text-2xl font-black">Up & Down</div>
      <div className="text-2xl">{parseInt(point) + point1}</div>
    </div>
  );
};
export default GameResult;
