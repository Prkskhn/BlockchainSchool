import { useEffect, useState } from "react";
import WorldcupCard from "../components/worldcupCard";
import animalData from "../animalData.json";
import WinCard from "../components/winCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState(0);
  const [choiceNum, setChoiceNum] = useState(0);
  const [nextRound, setNextRound] = useState([]);
  const [end, setEnd] = useState(16);
  const onPick = (v) => () => {
    setChoiceNum(choiceNum + 2);
    setNextRound([...nextRound, v]);
  };

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });
    setShuffleAnimal(shuffleAnimalData);
  }, []);

  useEffect(() => console.log(nextRound), [nextRound]);

  useEffect(() => {
    if (choiceNum === end) {
      console.log("한라우든종료");
      setShuffleAnimal(nextRound);
      setEnd(end / 2);
      setNextRound([]);
      setChoiceNum(0);
    }
  }, [choiceNum]);

  return (
    <div className="bg-green-300 min-w-screen min-h-screen flex flex-col justify-center items-center">
      {shuffleAnimal &&
        (end === 1 ? (
          <WinCard animal={shuffleAnimal[choiceNum]} />
        ) : (
          <>
            <div>{`${end === 2 ? "결승" : end + "강"}`}</div>
            <div className="flex justify-center items-center ">
              <WorldcupCard onPick={onPick} animal={shuffleAnimal[choiceNum]} />
              <WorldcupCard
                onPick={onPick}
                animal={shuffleAnimal[choiceNum + 1]}
              />
            </div>
          </>
        ))}
    </div>
  );
};
export default Worldcup;
