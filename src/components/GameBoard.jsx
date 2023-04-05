import { useEffect, useState } from "react";

const GameBoard = () => {
  const [point, setPoint] = useState(5);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [choiceNum, setChoiceNum] = useState("");
  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  };

  const onClickCheck = (e) => {
    e.preventDefault();

    let checkNum = parseInt(choiceNum);

    if (isNaN(checkNum)) {
      setHint("숫자를 입력해주세요!");
      return;
    }

    if (0 > checkNum || checkNum >= 100) {
      setHint("숫자를 잘못 입력하셨습니다!");
      return;
    }

    if (randomNum === checkNum) {
      setHint("정답입니다! 랜덤 값을 초기화 합니다.");
      setRandomNum(Math.floor(Math.random() * 100));
      setChoiceNum("");

      if (point > 0) {
        let savedPoint = localStorage.getItem("point");

        localStorage.setItem("point", parseInt(savedPoint) + point);
      }
      setPoint(5);
    } else if (randomNum > checkNum) {
      setHint(`정답은 ${checkNum}보다 높은 숫자입니다.`);
      setPoint(point - 1);
    } else if (randomNum < checkNum) {
      setHint("정답은" + checkNum + "보다 낮은 숫자입니다.");
      setPoint(point - 1);
    }
    setChoiceNum("");
  };

  useEffect(() => console.log(`랜덤 숫자는 ${randomNum}입니다.`), [randomNum]);
  useEffect(
    () => console.log(`유저가 선택한 숫자는 ${choiceNum}입니다.`),
    [choiceNum]
  );
  useEffect(() => console.log(`나의 점수는 ${point}입니다.`), [point]);

  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <form onSubmit={onClickCheck}>
          <input
            className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
            type="text"
            value={choiceNum}
            onChange={onChangeChoice}
          />
          {/* <button
          onClick={onClickCheck}
          className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
          >
          확인
        </button> */}
          <input
            className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
            type="submit"
            value="확인"
          />
        </form>
      </div>
    </div>
  );
};

export default GameBoard;

// import { useEffect } from "react";
// import { useState } from "react";

// const GameBoard = () => {
//   const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
//   const [choiceNum, setChoiceNum] = useState("");
//   const [hint, setHint] = useState("0~100 사이의 숫자를 맞춰보세요");

//   const onChangeChoice = (e) => {
//     setChoiceNum(e.target.value);
//     let choiceNum2 = e.target.value;
//     if (choiceNum2 === "") {
//       setHint("0~100 사이의 숫자를 맞춰보세요");
//     }
//     if (choiceNum2 > 0 && choiceNum2 < 100) {
//       setHint("0~100 사이의 숫자를 맞춰보세요");
//     }
//     if (isNaN(choiceNum2)) {
//       setHint("숫자를 입력하시오");
//       return;
//     }
//     if (choiceNum2 < 0 || choiceNum2 >= 100) {
//       setHint("숫자를 잘못 ㅇ비력하셨ㅅ브니다");
//       return;
//     }
//   };
//   const onClickCheck = (e) => {
//     // 1.문자입력
//     // 2. 0~100 이외의 숫자
//     e.preventDefault();

//     let checkNum = parseInt(choiceNum);

//     if (randomNum === checkNum) {
//       setHint("정답입니다!랜덤값을 초기화합니다");
//       setRandomNum(Math.floor(Math.random() * 100));
//     } else if (randomNum > checkNum) {
//       setHint(`정답은 ${checkNum}보다 높습니다.`);
//     } else if (randomNum < checkNum) {
//       setHint(`정답은 ${checkNum}보다 낮습니다.`);
//     }
//   };

//   useEffect(() => console.log(`랜덤 숫자는 ${randomNum}`), [randomNum]);
//   useEffect(() => console.log(`선택 숫자는 ${choiceNum}`), [choiceNum]);

//   return (
//     <div className="bg-blue-100 w-full grow flex flex-col justify-center items-center">
//       <div className=" mb-4 text-xl font-bold">{hint}</div>
//       <div>
//         <form onSubmit={onClickCheck}>
//           <input
//             className="border-2 rounded-md px-4 py-2 focus:outline-pink-300 shadow-lg"
//             type="text"
//             value={choiceNum}
//             onChange={onChangeChoice}
//           />
//           <button
//             onClick={onClickCheck}
//             className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
//           >
//             확인
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default GameBoard;
