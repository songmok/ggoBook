import { Link, NavLink } from "react-router-dom";
import HeaderCss from "./style/HeaderCss";

const Header = () => {
  if (window.location.pathname === "/login" || "/signup") return null;
  return (
    <HeaderCss>
      <div>
        <Link to="/">Project SB</Link>
      </div>
      <div>
        <ul>
          <li>
            <NavLink
              to="/shelf"
              className={({ isActive }) => (isActive ? "selected" : "not")}
            >
              나의 책장
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rank"
              className={({ isActive }) => (isActive ? "selected" : "not")}
            >
              마라톤
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book"
              className={({ isActive }) => (isActive ? "selected" : "not")}
            >
              도서
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/event"
              className={({ isActive }) => (isActive ? "selected" : "not")}
            >
              이벤트
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myPage"
              className={({ isActive }) => (isActive ? "selected" : "not")}
            >
              마이페이지
            </NavLink>
          </li>
        </ul>
      </div>
    </HeaderCss>
  );
};

export default Header;
