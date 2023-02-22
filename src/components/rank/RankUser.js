import React from "react";

const RankUser = ({ rankuser }) => {
  return (
    <>
      {rankuser.map((v, i) => {
        return (
          <li key={i}>
            <span>{v.name}</span>
            <span>{v.dd}</span>
            <span>{v.pag}</span>
            <span>{v.pit}</span>
          </li>
        );
      })}
    </>
  );
};

export default RankUser;
