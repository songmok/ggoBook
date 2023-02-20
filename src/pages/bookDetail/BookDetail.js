import axios from "axios";
import { TTBKey, TTBKey_DETAIL } from "OAuth";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookDetailCss from "./style/BookDetailCss";

const BookDetail = () => {
  const { ISBN } = useParams();

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
      },
    }).then((res) => console.log(res));
  };

  useEffect(() => {
    bookData();
  }, []);

  return (
    <>
      <BookDetailCss>
        <div className="bookInfoWrap">
          <div className="bookImg">
            <img src="" alt="" />
          </div>
          <span className="bookTitle">어스시의 마법사</span>
        </div>
        {/* <span>{params}</span> */}
        <article></article>
      </BookDetailCss>
    </>
  );
};

export default BookDetail;
