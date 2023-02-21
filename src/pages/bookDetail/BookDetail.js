import axios from "axios";
import { TTBKey_DETAIL } from "OAuth";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookRating from "./bookRating/BookRating";
import BookReview from "./bookReview/BookReview";
import BookDetailCss from "./style/BookDetailCss";

const BookDetail = () => {
  const { ISBN } = useParams();
  const [bookAbout, setBookAbout] = useState([]);
  const [subInfo, setSubInfo] = useState([]);
  const [selectOne, setSelectOne] = useState("평점");

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

  console.log(bookAbout.subInfo);
  console.log(subInfo);

  return (
    <>
      <BookDetailCss>
        <div className="bookInfo">
          <span>{bookAbout.title}</span>
          <img src={bookAbout.cover} />
          <span>{bookAbout.author}</span>
          <span>{subInfo.itemPage}쪽</span>
        </div>
        <div className="bookReviwes">
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
