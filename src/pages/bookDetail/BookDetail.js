import React, { useState } from "react";
import BookDetailCss from "./style/BookDetailCss";

const BookDetail = () => {
  const [tab, setTab] = useState();
  return (
    <>
      <BookDetailCss>
        <div className="bookInfoWrap">
          <div className="bookImg">
            <img src="" alt="" />
          </div>
          <span className="bookTitle">어스시의 마법사</span>
        </div>
        <article></article>
      </BookDetailCss>
    </>
  );
};

export default BookDetail;
