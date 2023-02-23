import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { TTBKey } from "OAuth";
import React, { useState } from "react";

const BookSearch = ({ setSearchResult }) => {
  const [search, setSearch] = useState("");

  const enterKey = (e) => {
    if (search === "" && e.key === "Enter") {
      alert("검색어를 입력해주세요.");
    } else if (search !== "" && e.key === "Enter") {
      axios({
        method: "get",
        url: "aladin/ttb/api/ItemSearch.aspx",
        params: {
          TTBKey: TTBKey,
          Query: search,
          MaxResults: 30,
          Output: "JS",
          Version: "20131101",
          Cover: "Big",
        },
      }).then((res) => setSearchResult(res.data.item));
    }
  };

  const clickBtn = (e) => {
    if (search !== "") {
      axios({
        method: "get",
        url: "aladin/ttb/api/ItemSearch.aspx",
        params: {
          TTBKey: TTBKey,
          Query: search,
          MaxResults: 30,
          Output: "JS",
          Version: "20131101",
          Cover: "Big",
        },
      }).then((res) => setSearchResult(res.data.item));
    } else {
      alert("검색어를 입력해주세요.");
    }
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
