import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import FooterCss from "./style/FooterCss";
import { useState } from "react";

type Props = {};

const Footer = (props: Props) => {
  const frontMember = [
    {
      id: 0,
      part: "팀장",
      name: "오한수",
      link: "https://github.com/songmok",
    },
    {
      id: 0,
      part: "팀원",
      name: "반재원",
      link: "https://github.com/Banjae",
    },
  ];
  const backMember = [
    {
      id: 0,
      part: "팀장",
      name: "오한수",
      link: "https://github.com/songmok",
    },
    {
      id: 0,
      part: "팀원",
      name: "반재원",
      link: "https://github.com/Banjae",
    },
    {
      id: 0,
      part: "팀원",
      name: "반재원",
      link: "https://github.com/Banjae",
    },
    {
      id: 0,
      part: "팀원",
      name: "반재원",
      link: "https://github.com/Banjae",
    },
  ];
  const [count, setCount] = useState<boolean>(false);
  return (
    <FooterCss>
      {count === true ? (
        <>
          <div className="member">
            <button
              onClick={() => {
                setCount(false);
              }}
            >
              X
            </button>
            <div className="frontWrap">
              <h2>프론트엔드</h2>
              <ul>
                {frontMember.map((v, i) => {
                  return (
                    <>
                      <li key={i}>
                        <span>
                          {v.part} : {v.name}
                        </span>
                        <Link to={v.link} target="_blank">
                          <FontAwesomeIcon icon={faGithub} />
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="backWrap">
              <h2>백엔드</h2>
              <ul>
                {backMember.map((v, i) => {
                  return (
                    <>
                      <li key={i}>
                        <span>
                          {v.part} : {v.name}
                        </span>
                        <Link to={v.link} target="_blank">
                          <FontAwesomeIcon icon={faGithub} />
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            setCount(true);
          }}
        >
          <h2>
            <b style={{ color: "#93c3c9" }}>꼬북꼬북</b> 독서 일정관리 프로젝트
          </h2>
        </button>
      )}
    </FooterCss>
  );
};

export default Footer;
