function Card({ symbol, score }) {
  return (
    <div
      className={`relative border-2  w-24 h-36 flex justify-center items-center ${
        symbol === "♠︎" || symbol === "♣︎" ? "border-black" : "border-red-500"
      }`}
    >
      <div
        className={`absolute m-1 top-0 left-0 ${
          symbol === "♠︎" || symbol === "♣︎" ? "text-black" : "text-red-500"
        }`}
      >
        {symbol}
      </div>
      <div
        className={`${
          symbol === "♠︎" || symbol === "♣︎" ? "text-black" : "text-red-500"
        }`}
      >
        {score}
      </div>
      <div
        className={`absolute m-1 bottom-0 right-0 ${
          symbol === "♠︎" || symbol === "♣︎" ? "text-black" : "text-red-500"
        }`}
      >
        {symbol}
      </div>
    </div>
  );
}

export default Card;
