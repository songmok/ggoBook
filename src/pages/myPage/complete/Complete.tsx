import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer/store";
import ListBookCss from "components/myCalendar/listBook/style/ListBookCss";
import instance from "api/instance";
import request from "api/request";
import CompleteCss from "./style/CompleteCss";
import axios from "axios";
import EditRating from "./edit/EditRating";
import EditReview from "./edit/EditReview";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "utils/repeatCss";

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
  ocSeq: number;
  aiSeq: number;
}

interface IForArticle {
  biIsbn: number;
  biSeq: number;
  biName: string;
}

const Complete = () => {
  const uiSeq = useSelector((state: RootState) => state.user.uiSeq);
  const [bookList, setBookList] = useState<IBookList[]>([]);
  const [biSeq, setBiSeq] = useState<number | null>(null);
  const [article, setArticle] = useState<IArticle | null>(null);
  const [biName, setBiName] = useState<string>("");
  const [forArticle, setForArticle] = useState<IForArticle | null>();

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

  const myArticle = async (biIsbn: number, biSeq: number, biName: string) => {
    if (biIsbn === undefined) return;
    setForArticle({
      biIsbn: biIsbn,
      biSeq: biSeq,
      biName: biName,
    });
    setBiName(biName);
    const params = {
      uiSeq: uiSeq,
      isbn: biIsbn,
    };
    await instance.get(request.article, { params: params }).then((res) => {
      setArticle(res.data);
      setBiSeq(biSeq);
      setValue(0);
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
    if (comment === "") return alert("???????????? ??????????????????");
    const data = {
      uiSeq: uiSeq,
      biSeq: biSeq,
      content: comment,
      score: value,
    };
    instance
      .post(request.addComment, data)
      .then((res) => console.log(res.data));
    alert("???????????? ?????????????????????.");
    alarm();
  };

  const addArticle = () => {
    if (contentTitle === "") return alert("????????? ????????? ??????????????????.");
    if (content === "") return alert("????????? ????????? ??????????????????.");
    if (content.length < 200) return alert("???????????? 200??? ?????? ??????????????????.");
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
    alert("???????????? ?????????????????????.");
    alarm();
  };

  //?????? ??????
  const [canEditRa, setCanEditRa] = useState<boolean>(false);
  const [canEditRe, setCanEditRe] = useState<boolean>(false);
  const editBookRa = () => {
    setCanEditRa(true);
  };

  const editBookRe = () => {
    setCanEditRe(true);
  };

  // ?????? ??????
  const [value, setValue] = useState<number | null>(0);

  const [change, setChange] = useState<boolean>(true);
  const alarm = () => {
    setChange(!change);
  };

  useEffect(() => {
    forArticle &&
      myArticle(forArticle?.biIsbn, forArticle?.biSeq, forArticle?.biName);
  }, [change]);

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
          <span>?????? ????????? / ?????????</span>
        ) : (
          <span>"{biName}"</span>
        )}
        {article === null ? (
          <p className="bookChoose">????????? ??????????????????</p>
        ) : (
          <div className="bookForm">
            <span className="formName">?????? ?????????</span>
            {article.comment ? (
              canEditRa ? (
                <EditRating
                  setCanEditRa={setCanEditRa}
                  comment={article.comment}
                  uiSeq={uiSeq}
                  ocSeq={article.ocSeq}
                  myArticle={myArticle}
                  value={article.score}
                  alarm={alarm}
                />
              ) : (
                <>
                  <div className="bookRating">
                    <div className="heart">
                      <Rating
                        name="read-only"
                        value={article.score}
                        readOnly
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                      />
                    </div>
                    <div className="ratingBox">
                      <p>{article.comment}</p>
                    </div>
                  </div>
                  <Button className="button">
                    <button onClick={editBookRa}>??????</button>
                  </Button>
                </>
              )
            ) : (
              <div className="bookRating">
                <form>
                  <div className="heart">
                    <Rating
                      name="simple-controlled"
                      value={value}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                  <textarea
                    cols={80}
                    placeholder="???????????? ???????????????. ??? ?????? ?????? ?????? ??? ??????????????? ?????? ?????? ??????????????? ?????? ?????????????????????."
                    rows={4}
                    onChange={commentText}
                  />
                </form>
                <Button className="button">
                  <button type="button" onClick={addComment}>
                    ??????
                  </button>
                </Button>
              </div>
            )}
            <span className="formName">?????? ?????????</span>
            {article.content ? (
              canEditRe ? (
                <EditReview
                  setCanEditRe={setCanEditRe}
                  title={article.title}
                  content={article.content}
                  aiSeq={article.aiSeq}
                  alarm={alarm}
                />
              ) : (
                <>
                  <div className="bookReview">
                    <div className="reviewBox">
                      <p className="reviewTitle">- {article.title} -</p>
                      <p className="reviewContent">{article.content}</p>
                    </div>
                    <Button className="button">
                      <button onClick={editBookRe}>??????</button>
                    </Button>
                  </div>
                </>
              )
            ) : (
              <div className="bookReview">
                <form>
                  <textarea
                    cols={80}
                    rows={1}
                    placeholder="???????????? ????????? ???????????????."
                    onChange={articleTitle}
                  />
                  <textarea
                    cols={80}
                    rows={10}
                    placeholder="???????????? ???????????????. ??? ?????? ?????? ?????? ??? ??????????????? ?????? ?????? ??????????????? ?????? ?????????????????????."
                    onChange={articleText}
                  />
                </form>
                <Button className="button">
                  <button type="button" onClick={addArticle}>
                    ??????
                  </button>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </CompleteCss>
  );
};

export default Complete;
