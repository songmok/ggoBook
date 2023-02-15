import React from "react";

const BookSearch = () => {
  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Type your message here"
        //   value={word}
        onChange={(e) => {
          // setWord(e.target.value);
        }}
        //   onKeyPress={(e) => searchResult(e)}
      />
    </>
  );
};

export default BookSearch;
