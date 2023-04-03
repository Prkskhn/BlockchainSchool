import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import A from "./pages/a";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/a" element={<A />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
