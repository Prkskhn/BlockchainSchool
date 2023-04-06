import { BrowserRouter, Route, Routes } from "react-router-dom";
import Worldcup from "./pages/worldcup";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/worldcup" element={<Worldcup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
