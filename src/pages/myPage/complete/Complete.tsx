import { useEffect, useState } from "react";
import { BookJson } from "./list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "reducer/store";
import ListBook from "components/listBook/ListBook";
import ListBookCss from "components/listBook/style/ListBookCss";
import instance from "api/instance";
import request from "api/request";
import CompleteCss from "./style/CompleteCss";

interface IBookList {
  id: number;
  biSeq: number;
  biPage: number;
  biName: string;
  biAuthor: string;
  biPublisher: string;
}

const Complete = () => {
  const uiSeq = useSelector((state: RootState) => state.user.uiSeq);
  const [bookList, setBookList] = useState<IBookList[]>([]);

  const completeBooks = async () => {
    const params = {
      uiSeq: uiSeq,
    };
    await instance
      .get(request.listRead, { params: params })
      .then((res) => setBookList(res.data.mybookList));
  };

  useEffect(() => {
    completeBooks();
  }, []);

  return (
    <CompleteCss>
      <div>
        <ListBookCss>
          <div className="bookList">
            <ul className="bookGnb">
              {bookList.map((ele) => {
                return (
                  <li key={ele.id} className="bookInfo">
                    <div className="bookImg">
                      <img src="/" alt="" />
                    </div>
                    <div className="text">
                      <p>
                        <span className="title">{ele.biName}</span>
                        <span className="author">{ele.biAuthor}</span>
                        <span className="pub">{ele.biPublisher}</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </ListBookCss>
      </div>
      <div>
        <div className="독후감"></div>
      </div>
    </CompleteCss>
  );
};

export default Complete;
