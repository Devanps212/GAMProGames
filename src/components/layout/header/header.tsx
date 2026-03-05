import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../../constant/layout";
import { FaBell, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-evenly p-1 bg-gray-900">
      <NavLink to={"#"}>
        <img src="/layout/logo/logo.png" alt="logo" className="w-24 h-24" />
      </NavLink>
      <nav className="flex items-center gap-10 text-lg">
        {NAV_ITEMS.map((nav) => (
          <NavLink
            key={nav.id}
            to={nav.link}
            className=" 
            text-white bg-linear-to-r from-blue-400 to-blue-300 bg-[length:0%_100%]
            bg-left bg-no-repeat bg-clip-text hover:bg-[length:100%_100%] hover:text-transparent transition-all duration-500 ease-in"
          >
            {nav.title}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center rounded-full w-14 h-14 border-2 border-gray-600 bg-gray-800">
          <FaBell className="text-gray-300 text-xl" />
        </button>
        <button className="flex items-center justify-center rounded-full w-14 h-14 border-2 border-gray-600 bg-gray-800">
          <FaUser className="text-gray-300 text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
