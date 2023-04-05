import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";

function App() {
  return (
    <div className="bg-red-200 flex flex-col justify-center items-center min-h-screen">
      <GameResult />
      <GameBoard />
    </div>
  );
}

export default App;
