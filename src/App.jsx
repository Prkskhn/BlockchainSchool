import { BrowserRouter, Routes, Route } from "react-router-dom";
import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";
import Main from "./pages/main";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
          <Route path="/c" element={<C />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
