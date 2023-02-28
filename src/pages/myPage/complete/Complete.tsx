import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer/store";
import ListBookCss from "components/myCalendar/listBook/style/ListBookCss";
import instance from "api/instance";
import request from "api/request";
import CompleteCss from "./style/CompleteCss";
import axios from "axios";

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
  title: string;
  content: string;
  comment: string;
  score: number;
}

const Complete = () => {
  const uiSeq = useSelector((state: RootState) => state.user.uiSeq);
  const [bookList, setBookList] = useState<IBookList[]>([]);
  const [biSeq, setBiSeq] = useState<number | null>(null);
  const [article, setArticle] = useState<IArticle | null>(null);
  const [biName, setBiName] = useState<string>("");

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

  const myArticle = (biIsbn: number, biSeq: number, biName: string) => {
    setBiName(biName);
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
  const [contentTitle, setContentTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const commentText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const articleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentTitle(e.target.value);
  };

  const articleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const addComment = () => {
    if (comment === "") return alert("감상평을 입력해주세요");
    const data = {
      uiSeq: uiSeq,
      biSeq: biSeq,
      content: comment,
      score: 3,
    };
    instance
      .post(request.addComment, data)
      .then((res) => console.log(res.data));
    alert("감상평을 등록하였습니다.");
  };

  const addArticle = () => {
    if (contentTitle === "") return alert("독후감 제목을 입력해주세요.");
    if (content === "") return alert("독후감 내용을 입력해주세요.");
    if (content.length < 200) return alert("독후감은 200자 이상 작성해주세요.");
    const formData = {
      aiTitle: contentTitle,
      content: content,
      aiPublic: 1,
      uiSeq: uiSeq,
      biSeq: biSeq,
    };
    axios({
      method: "post",
      url: "http://192.168.0.160:8520/api/article",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => console.log(res));
    alert("독후감을 등록하였습니다.");
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
                  onClick={() => myArticle(ele.biIsbn, ele.biSeq, ele.biName)}
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
        {biName === "" ? (
          <span>나의 감상평 / 독후감</span>
        ) : (
          <span>"{biName}"</span>
        )}
        {article === null ? (
          <p className="bookChoose">도서를 선택해주세요</p>
        ) : (
          <div className="bookForm">
            <span className="formName">나의 감상평</span>
            {article.comment ? (
              <>
                <div className="bookRating">
                  <div className="ratingBox">
                    <p>{article.comment}</p>
                  </div>
                </div>
                <div className="button">
                  <button>수정</button>
                </div>
              </>
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
                <div className="button">
                  <button type="button" onClick={addComment}>
                    작성
                  </button>
                </div>
              </div>
            )}
            <span className="formName">나의 독후감</span>
            {article.content ? (
              <>
                <div className="bookReview">
                  <div className="reviewBox">
                    <p className="reviewTitle">- {article.title} -</p>
                    <p className="reviewContent">{article.content}</p>
                  </div>
                  <div className="button">
                    <button>수정</button>
                  </div>
                </div>
              </>
            ) : (
              <div className="bookReview">
                <form>
                  <textarea
                    cols={80}
                    rows={1}
                    placeholder="독후감의 제목을 적어주세요."
                    onChange={articleTitle}
                  />
                  <textarea
                    cols={80}
                    rows={10}
                    placeholder="독후감을 남겨주세요. 이 책에 대한 욕설 및 인신공격성 글은 평점 페이지에서 노출 제외처리됩니다."
                    onChange={articleText}
                  />
                </form>
                <div className="button">
                  <button type="button" onClick={addArticle}>
                    작성
                  </button>
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
