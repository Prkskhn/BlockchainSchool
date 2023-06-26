const WorldcupCard = ({ animal, onPick }) => {
  return (
    <div className="relative bg-red-300  h-[400px] flex flex-col justify-center items-center  ">
      <img
        className="w-[400px] h-[200px] object-contain  "
        src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`}
        alt=""
      />
      <div>{animal}</div>
      <button onClick={onPick(animal)} className="absolute bottom-0 ">
        선택
      </button>
    </div>
  );
};
export default WorldcupCard;
