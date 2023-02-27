import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer/store";
import ListBookCss from "components/listBook/style/ListBookCss";
import instance from "api/instance";
import request from "api/request";
import CompleteCss from "./style/CompleteCss";

interface IBookList {
  id: number;
  biIsbn: number;
  biPage: number;
  biName: string;
  biAuthor: string;
  biPublisher: string;
  bimgUri: string;
  biSeq: number;
}

interface IArticle {
  contant: string;
  comment: string;
  score: number;
}

const Complete = () => {
  const uiSeq = useSelector((state: RootState) => state.user.uiSeq);
  const [bookList, setBookList] = useState<IBookList[]>([]);
  const [biSeq, setBiSeq] = useState<number | null>(null);
  const [article, setArticle] = useState<IArticle | null>(null);

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

  const myArticle = (biIsbn: number, biSeq: number) => {
    const params = {
      uiSeq: uiSeq,
      isbn: biIsbn,
    };
    instance.get(request.article, { params: params }).then((res) => {
      setArticle(res.data);
      setBiSeq(biSeq);
    });
  };

  const [content, setContent] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const commentText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    const data = {
      uiSeq: uiSeq,
      biSeq: biSeq,
      content: comment,
      score: 3,
    };
    instance
      .post(request.addComment, data)
      .then((res) => console.log(res.data));
  };

  return (
    <CompleteCss>
      <ListBookCss>
        <div className="bookList">
          <ul className="bookGnb">
            {bookList.map((ele) => {
              return (
                <li
                  key={ele.id}
                  className="bookInfo"
                  onClick={() => myArticle(ele.biIsbn, ele.biSeq)}
                >
                  <div className="bookImg">
                    <img src={ele.bimgUri} alt="" />
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
      <div className="bookDetail">
        <span> 나의 평점 / 독후감 </span>
        {article === null ? (
          <p className="bookChoose">"도서를 선택해주세요"</p>
        ) : (
          <div className="bookForm">
            {article.comment ? (
              <div className="bookRating">
                <p>{article.comment}</p>
                <button>수정하기</button>
              </div>
            ) : (
              <div className="bookRating">
                <form>
                  <textarea
                    cols={80}
                    placeholder="감상평을 남겨주세요. 이 책에 대한 욕설 및 인신공격성 글은 평점 페이지에서 노출 제외처리됩니다."
                    rows={4}
                    onChange={commentText}
                  />
                </form>
                <div>
                  <button type="button" onClick={addComment}>
                    작성
                  </button>
                </div>
              </div>
            )}
            {article.contant ? (
              <div className="bookReview">
                <p>{article.contant}</p>
                <button>수정하기</button>
              </div>
            ) : (
              <div className="bookReview">
                <form>
                  <textarea
                    cols={80}
                    placeholder="독후감을 남겨주세요. 이 책에 대한 욕설 및 인신공격성 글은 평점 페이지에서 노출 제외처리됩니다."
                    rows={10}
                  ></textarea>
                </form>
                <div>
                  <button type="button">작성</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </CompleteCss>
  );
};

export default Complete;
