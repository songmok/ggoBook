import { Link, NavLink } from "react-router-dom";
import HeaderCss from "./style/HeaderCss";
import { navheader } from "./data/headjson";
import { useEffect } from "react";
const Header = () => {
  if (window.location.pathname === "/login" && "/signup") return null;
  return (
    <HeaderCss>
      <div>
        <Link to="/login">Project SB</Link>
      </div>
      <div>
        <ul>
          {navheader.map((v, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={v.to}
                  className={({ isActive }) => (isActive ? "selected" : "not")}
                >
                  {v.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </HeaderCss>
  );
};
export default Header;
