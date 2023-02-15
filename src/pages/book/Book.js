import React from "react";
import { BookJson } from "./data/BookJson";
import BookList from "components/book/BookList";
import BookSearch from "components/book/BookSearch";
import BookCss from "./style/BookCss";

const Book = () => {
  return (
    <>
      <BookCss>
        <BookSearch />
        <BookList BookJson={BookJson} />
      </BookCss>
    </>
  );
};

export default Book;
