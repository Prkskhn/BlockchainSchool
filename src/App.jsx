import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import A from "./pages/a";
import B from "./pages/b";

function App() {
  return (
    <BrowserRouter>
      <div className="min-w-full min-h-screen bg-yellow-300 flex flex-col justify-center items-center">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
