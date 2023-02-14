import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderCss from "./style/HeaderCss";

const Header = () => {
  useEffect(() => {}, []);
  if (window.location.pathname === "/login") return null;

  const nav = [
    { id: "1", to: "/mycalendar", name: "나의 책장" },
    { id: "2", to: "/rank", name: "마라톤" },
    { id: "3", to: "/book", name: "도서" },
    { id: "4", to: "/event", name: "이벤트" },
    { id: "5", to: "/mypage", name: "마이 페이지" },
  ];

  return (
    <HeaderCss>
      <div>
        <Link to="/login">Project SB</Link>
      </div>
      <div>
        <ul>
          {nav.map((v, i) => {
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
