import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-green-100 min-h-screen  ">
        <Header />
        <Routes>
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
