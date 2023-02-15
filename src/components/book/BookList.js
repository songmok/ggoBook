import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ BookJson }) => {
  return (
    <>
      <div className="bookWrap">
        <ul className="bookGnb">
          {BookJson.map((v, i) => {
            return (
              <li key={i} className="bookList">
                <Link to="/bookdetail">
                  <div className="bookImg">
                    <img src="/" alt="" />
                  </div>
                  <div className="text">
                    <p>
                      <span className="title">{v.biName}</span>
                      <span className="author">{v.biAuthor}</span>
                      <span className="pub">{v.biPublisher}</span>
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
