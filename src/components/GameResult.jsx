const GameResult = () => {
  const point = localStorage.getItem("point") | 0;

  return (
    <div className="bg-yellow-100 w-full grow flex flex-col justify-center items-center">
      <div className="text-2xl font-black">Up & Down</div>
      <div className="text-2xl">{point}</div>
    </div>
  );
};
export default GameResult;
