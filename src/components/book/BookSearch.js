import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookSearch = ({ setSearchResult, keyword, setSearchParams }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const enterKey = (e) => {
    if (search === "" && e.key === "Enter") {
      alert("검색어를 입력해주세요.");
    } else if (search !== "" && e.key === "Enter") {
      navigate(`?keyword=${search}`);
    }
  };

  const clickBtn = async () => {
    if (search !== "") {
      navigate(`?keyword=${search}`);
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
