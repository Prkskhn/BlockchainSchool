import { useEffect, useState } from "react";
import animalData from "../animalData.json";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();

  console.log(animalData);
  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return -1;
    });

    console.log(shuffleAnimalData);
  }, []);
  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col justify-center items-center">
      Worldcup
    </div>
  );
};
export default Worldcup;
