import React from "react";
import BookList from "components/book/BookList";
import BookSearch from "components/book/BookSearch";
import BookCss from "./style/BookCss";
import { useSearchParams } from "react-router-dom";

const Book = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  return (
    <>
      <BookCss>
        <BookSearch keyword={keyword} setSeratchParams={setSearchParams} />
        {keyword === null ? (
          <div className="noneKeyword">검색어를 입력해주세요</div>
        ) : (
          <BookList />
        )}
        <span className="fromAladin">출처 : 알라딘</span>
      </BookCss>
    </>
  );
};

export default Book;
