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

  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Type your message here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        onKeyDown={enterKey}
      />
    </>
  );
};

export default BookSearch;
