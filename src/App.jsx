import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Main from "./pages/main";
import { useState } from "react";
import Detail from "./pages/detail";

export default function App() {
  const [account, setAccount] = useState();

  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen  ">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
