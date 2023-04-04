import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Footer from "./components/Footer";
import Main from "./pages/main";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio/:projectId" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
