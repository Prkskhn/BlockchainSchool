const AnimalCard = ({ animal, choice, onClickChoice }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="border-8 border-white shadow-lg shadow-white w-96"
        src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`}
        alt=""
      />
      <div className="text-2xl mt-4 font-bold">{animal}</div>
      <button
        onClick={onClickChoice(animal)}
        className={`text-2xl  mt-4 px-4 py-2 rounded-md ${
          choice % 2 === 0 ? "bg-green-400" : "bg-blue-300"
        }`}
      >
        선택
      </button>
    </div>
  );
};

export default AnimalCard;
