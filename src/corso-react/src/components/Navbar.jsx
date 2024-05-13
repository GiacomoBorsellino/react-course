import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex flex-row justify-between items-center gap-2 w-full bg-purple-700 p-2 rounded-md mb-6">
          <li className="hover:bg-purple-500 p-2 rounded-md">
            <Link to={"/"}>Homepage</Link>
          </li>
          <li className="hover:bg-purple-500 p-2 rounded-md">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:bg-purple-500 p-2 rounded-md">
            <Link to={"/contacts"}>Contacts</Link>
          </li>
          <li className="hover:bg-purple-500 p-2 rounded-md">
            <Link to={"/cards"}>Cards</Link>
          </li>
          <li className="hover:bg-purple-500 p-2 rounded-md">
            <Link to={"/cardsChildren"}>Cards Children</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
