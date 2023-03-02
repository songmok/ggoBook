import React, { useEffect, useState } from "react";

const RankUser = ({ users }) => {
  return (
    <>
      {users.map((ele, idx) => {
        return (
          <li key={idx}>
            <span>{ele.rank}</span>
            <span>{ele.userName}</span>
            <span>{ele.totalPage}</span>
            <span>{ele.totalPoint}</span>
          </li>
        );
      })}
    </>
  );
};

export default RankUser;
