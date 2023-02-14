import React from "react";

import { rankhead } from "pages/rank/data/rankjson";

const RankHead = () => {
  return (
    <>
      {rankhead.map((v, i) => {
        return (
          <li key={i}>
            <span>{v.name}</span>
          </li>
        );
      })}
    </>
  );
};

export default RankHead;
