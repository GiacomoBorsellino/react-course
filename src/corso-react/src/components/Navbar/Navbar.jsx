import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className="flex flex-row justify-center items-center gap-2 m-2">
        <li className="text-white bg-blue-600 rounded-md p-2">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-white bg-blue-600 rounded-md p-2">
          <Link to={"/cards"}>Cards</Link>
        </li>
        <li className="text-white bg-blue-600 rounded-md p-2">
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
