import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { TTBKey } from "OAuth";
import React, { useState } from "react";

const BookSearch = ({ setSearchResult }) => {
  const [search, setSearch] = useState("");

  const enterKey = (e) => {
    e.key === "Enter" &&
      axios({
        method: "get",
        url: "aladin/ttb/api/ItemSearch.aspx",
        params: {
          TTBKey: TTBKey,
          Query: search,
          MaxResults: 30,
          Output: "JS",
          Version: "20131101",
        },
      })
        .then((res) => setSearchResult(res.data.item))
        .catch((err) => console.log(err));
  };
  const clickBtn = (e) => {
    axios({
      method: "get",
      url: "aladin/ttb/api/ItemSearch.aspx",
      params: {
        TTBKey: TTBKey,
        Query: search,
        MaxResults: 30,
        Output: "JS",
        Version: "20131101",
      },
    })
      .then((res) => setSearchResult(res.data.item))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="searchWrap">
        <input
          type="text"
          className="search"
          placeholder="도서"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          onKeyDown={enterKey}
        />
        <button type="submit" className="searchButton" onClick={clickBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
};

export default BookSearch;
