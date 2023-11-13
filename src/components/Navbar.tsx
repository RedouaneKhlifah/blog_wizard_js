import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div>
      <nav className="pt-4">
        <div className=" flex justify-around">
          <ul className="list-none flex gap-6 pl-80">
            <li className="">
              <NavLink
                className={
                  location.pathname === "/"
                    ? "text-blue-700 underline  "
                    : "text-red-700"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  location.pathname === "/About"
                    ? "text-blue-700 underline"
                    : "text-red-700"
                }
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li className=" text-white ">
              <NavLink
                className={
                  location.pathname === "/Categories"
                    ? "text-blue-700 underline"
                    : "text-red-700"
                }
                to="/Categories"
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  location.pathname === "/register"
                    ? "text-blue-700 underline"
                    : "text-red-700"
                }
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
