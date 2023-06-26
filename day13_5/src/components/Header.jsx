import { Link } from "react-router-dom";
import Main from "../pages/main";
import A from "../pages/a";
import B from "../pages/b";

function Header() {
  return (
    <div className="h-20 min-w-full bg-green-300 flex justify-center items-center ">
      <Link to="/">
        <button className="px-8">main</button>
      </Link>
      <Link to="/a">
        <button className="px-8">a</button>
      </Link>
      <Link to="/b">
        <button className="px-8">b</button>
      </Link>
    </div>
  );
}

export default Header;
