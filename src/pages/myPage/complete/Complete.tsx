import { useState } from "react";
import { BookJson } from "./list";
import CompleteCss from "./style/CompleteCss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Complete = (props: Props) => {
  const [openList, setOpenList] = useState<boolean>(true);

  const clickOn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenList(true);
  };

  const clickOff = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenList(false);
  };

  return (
    <CompleteCss>
      <div>
        <div className="bookList">
          <ul className="bookGnb">
            {BookJson.map((v, i) => {
              return (
                <li key={i} className="bookInfo">
                  <div className="bookImg">
                    <img src="/" alt="" />
                  </div>
                  <div className="text">
                    <p>
                      <span className="title">{v.biName}</span>
                      <span className="author">{v.biAuthor}</span>
                      <span className="pub">{v.biPublisher}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          {openList === true ? (
            <button className="openBt" onClick={clickOff}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          ) : (
            <button className="openBt" onClick={clickOn}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>
      </div>
      <div>
        <div className="독후감"></div>
      </div>
    </CompleteCss>
  );
};

export default Complete;
