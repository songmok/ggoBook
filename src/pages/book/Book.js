import React, { useState } from "react";
import BookList from "components/book/BookList";
import BookSearch from "components/book/BookSearch";
import BookCss from "./style/BookCss";

const Book = () => {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <>
      <BookCss>
        <BookSearch setSearchResult={setSearchResult} />
        <BookList searchResult={searchResult} />
      </BookCss>
    </>
  );
};

export default Book;
