import CardA from "./components/CardA";
import CardB from "./components/CardB";
import CardC from "./components/CardC";
import CardD from "./components/CardD";
import CardE from "./components/CardE";
import CardF from "./components/CardF";

function App() {
  return (
    <div className="min-h-screen p-12  grid grid-cols-3">
      <CardA />
      <CardB />
      <CardC />
      <CardD />
      <CardE />
      <CardF />
    </div>
  );
}

export default App;
