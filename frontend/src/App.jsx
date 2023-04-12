import axios from "axios";
import TodoCard from "./components/TodoCard";
import { useEffect } from "react";

function App() {
  const getToDoList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo`
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-start  items-center pt-16">
      <h1 className="text-4xl font-bold">AWESOME TO DO LIST 😎</h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          If you would cure anger, do not feed it. Say to yourself: 'I used to
          be angry every day; then every other day; now only every third or
          fourth day.' When you reach thirty days offer a sacrifice of
          thanksgiving to the gods.
        </div>
        <div className="text-xs">
          화를 다스리려면 화를 키우지 말라. 스스로에게 말하라. '나는 매일 화를
          내곤 했다. 그러다가 이틀에 한 번, 이제는 겨우 사흘 또는 나흘에 한 번
          화를 낸다.' 그렇게 30일이 지나면 신들에게 감사의 제물을 바쳐라.
        </div>
        <form className="flex mt-2">
          <input
            className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
            type="text"
          />
          <input
            className="ml-4 px-2 py-1 bg-pink-200 hover:bg-pink-400 rounded-lg text-gray-100"
            type="submit"
            value="새 투두 생성"
          />
        </form>
        <ul className="mt-16 felx flex-col w-1/2">
          <TodoCard title="빨래하기" />
          <TodoCard title="청소하기" />
          <TodoCard title="기타연습" />
          <TodoCard title="피아노연습" />
        </ul>
      </div>
    </div>
  );
}

export default App;
