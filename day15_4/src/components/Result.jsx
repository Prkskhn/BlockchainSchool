import { useContext } from "react";
import { AppContext } from "../App";

const Result = () => {
  const { allPoint } = useContext(AppContext);
  return (
    <div className="bg-purple-100 min-w-full grow flex flex-col justify-center items-center">
      <div className="m-4">Result</div>
      <div>{allPoint}</div>
    </div>
  );
};

export default Result;
