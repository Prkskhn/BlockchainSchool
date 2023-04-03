import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen p-12  grid grid-cols-3">
      <Card color="bg-red-100" cardName="a" />
      <Card color="bg-green-100" cardName="b" />
      <Card color="bg-blue-100" cardName="c" />
      <Card color="bg-purple-100" cardName="d" />
      <Card color="bg-yellow-100" cardName="e" />
      <Card color="bg-pink-100" cardName="f" />
    </div>
  );
}

export default App;
