import React from "react";

import { rankuser } from "pages/rank/data/rankjson";

const RankUser = () => {
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
