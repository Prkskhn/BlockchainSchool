import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProjectView from "./pages/ProjectView";

function App() {
  return (
    <BrowserRouter>
      <div className="  bg-red-100 min-w-screen min-h-screen flex flex-col justify-center items-center   ">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio/:projectId" element={<ProjectView />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
