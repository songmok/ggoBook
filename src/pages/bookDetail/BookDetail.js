import instance from "api/axios";
import request from "api/request";
import axios from "axios";
import { TTBKey_DETAIL } from "OAuth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookRating from "./bookRating/BookRating";
import BookReview from "./bookReview/BookReview";
import BookDetailCss from "./style/BookDetailCss";

const BookDetail = () => {
  const { ISBN } = useParams();
  const [bookAbout, setBookAbout] = useState([]);
  const [subInfo, setSubInfo] = useState([]);
  const [selectOne, setSelectOne] = useState("평점");
  const uiSeq = useSelector((state) => state.user.uiSeq);
  console.log(uiSeq);

  const bookData = async () => {
    await axios({
      method: "get",
      baseURL: "http://localhost:3000/",
      url: "aladin/ttb/api/ItemLookUp.aspx",
      params: {
        TTBKey: TTBKey_DETAIL,
        ItemId: ISBN,
        ItemIdType: "ISBN13",
        Output: "JS",
        Version: "20131101",
        Cover: "Big",
      },
    }).then((res) => {
      setBookAbout(res.data.item[0]);
      setSubInfo(res.data.item[0].subInfo);
    });
  };

  useEffect(() => {
    bookData();
  }, []);

  console.log(bookAbout);

  const addMybook = () => {
    const body = {
      biName: bookAbout.title,
      biAuthor: bookAbout.author,
      biPublisher: bookAbout.publisher,
      biPage: subInfo.itemPage,
      biIsbn: bookAbout.isbn13,
      bimgUri: bookAbout.cover,
    };
    const params = {
      uiSeq: uiSeq,
    };
    console.log(body);
    instance
      .post(request.addPlan, body, { params: params })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const gotoBuy = () => {
    window.open(`${bookAbout.link}`, "_blank");
  };

  return (
    <>
      <BookDetailCss>
        <div className="bookLeft">
          <div className="bookInfo">
            <span className="title">{bookAbout.title}</span>
            <img src={bookAbout.cover} />
            <span className="author">{bookAbout.author}</span>
            <span className="publisher">
              {bookAbout.publisher} | {bookAbout.pubDate}
            </span>
            <span className="page">{subInfo.itemPage}페이지</span>
          </div>
          <div className="bookBts">
            <button onClick={addMybook}>한수담기</button>
            <button onClick={gotoBuy}>구매하기</button>
          </div>
        </div>
        <div className="bookRight">
          <div>
            <button
              onClick={() => {
                setSelectOne("평점");
              }}
            >
              평점
            </button>
            <button
              onClick={() => {
                setSelectOne("독후감");
              }}
            >
              독후감
            </button>
          </div>
          {selectOne === "평점" && <BookRating />}
          {selectOne === "독후감" && <BookReview />}
        </div>
      </BookDetailCss>
    </>
  );
};

export default BookDetail;
