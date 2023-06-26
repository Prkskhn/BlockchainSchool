import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-yellow-300 min-w-full min-h-screen flex flex-col justify-center items-center">
      main
      <Link to="/worldcup">
        <button className="bg-blue-300 px-4 py-2 rounded-lg font-bold m-4 shadow-lg border-2 border-white  ">
          이상형 월드컵 하기
        </button>
      </Link>
    </div>
  );
};
export default Main;
