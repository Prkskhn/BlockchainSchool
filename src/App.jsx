import ClassComp2 from "./components/ClassComp2";
import ClassComp from "./components/ClassComponent";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="bg-red-300 min-w-full min-h-screen">
      <ClassComp />
      {/* <ClassComp2 /> */}
      <Counter />
    </div>
  );
}

export default App;
