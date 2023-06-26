import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <button className="bg-red-100 p-2 m-2">Main</button>
      </Link>
      <Link to="/a">
        <button className="bg-red-100 p-2 m-2">A</button>
      </Link>
    </div>
  );
}

export default Header;
