import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ searchResult }) => {
  console.log(searchResult);
  return (
    <>
      <div className="bookWrap">
        <ul className="bookGnb">
          {searchResult.map((v, i) => {
            return (
              <li key={i} className="bookList">
                <Link to={`/bookdetail/${v.isbn13}`}>
                  <div className="bookImg">
                    <img src={v.cover} alt="cover" />
                  </div>
                  <div className="text">
                    <p>
                      <span className="title">{v.title}</span>
                      <span className="author">{v.author}</span>
                      <span className="pub">{v.publisher}</span>
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BookList;
