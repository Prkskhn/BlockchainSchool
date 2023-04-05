import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  return (
    <div className="bg-red-100 min-w-full min-h-screen flex flex-col justify-center items-center ">
      <Result />
      <Input />
    </div>
  );
}

export default App;
