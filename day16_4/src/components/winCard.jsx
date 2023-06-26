const WinCard = ({ animal }) => {
  return (
    <div className="relative bg-red-300  h-[400px] flex flex-col justify-center items-center  ">
      <div>우승입니다</div>
      <img
        className="w-[400px] h-[200px] object-contain  "
        src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`}
        alt=""
      />
      <div>{animal}</div>
    </div>
  );
};
export default WinCard;
