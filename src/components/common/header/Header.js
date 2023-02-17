import { Link, NavLink } from "react-router-dom";
import HeaderCss from "./style/HeaderCss";
import { navheader } from "./data/headjson";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBook,
  faPersonRunning,
  faCalendarDay,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  library.add(faUser, faBook, faPersonRunning, faCalendarDay, faBookOpen);
  // <FontAwesomeIcon icon="fa-solid fa-person-running" />;
  if (window.location.pathname === "/login") return null;
  if (window.location.pathname === "/signup") return null;
  return (
    <HeaderCss>
      <div>
        <Link to="/login">Project SB</Link>
      </div>
      <div className="headerWrap">
        <ul>
          {navheader.map((v, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={v.to}
                  className={({ isActive }) => (isActive ? "selected" : "not")}
                >
                  <i>
                    <FontAwesomeIcon icon={v.icon} />
                  </i>
                  <em>{v.name}</em>
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
