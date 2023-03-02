import axios from "axios";
import { TTBKey } from "OAuth";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const BookList = ({}) => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const aladin = async () => {
    await axios({
      method: "get",
      url: "aladin/ttb/api/ItemSearch.aspx",
      params: {
        TTBKey: TTBKey,
        Query: keyword,
        MaxResults: 20,
        Output: "JS",
        Version: "20131101",
        Cover: "Big",
      },
    }).then((res) => setSearchResult(res.data.item));
  };

  useEffect(() => {
    aladin();
  }, [keyword]);

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
