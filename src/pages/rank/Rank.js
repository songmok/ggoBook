import React from "react";
import RankCss from "./style/RankCss";

const Rank = () => {
  const rank = [
    { name: "1", dd: "Ssd", pag: "1345", pit: "123" },
    { name: "2", dd: "G", pag: "1345", pit: "123" },
    { name: "3", dd: "A", pag: "1345", pit: "123" },
    { name: "4", dd: "S", pag: "1345", pit: "123" },
    { name: "5", dd: "D", pag: "1345", pit: "123" },
  ];
  const ul = [
    { id: "1", name: "등수" },
    { id: "2", name: "독서가" },
    { id: "3", name: "페이지 수" },
    { id: "4", name: "포인트" },
  ];
  return (
    <>
      <RankCss>
        <ul className="rankHead">
          {ul.map((v, i) => {
            return (
              <li key={i}>
                <span>{v.name}</span>
              </li>
            );
          })}
        </ul>
        <ul className="fl">
          {rank.map((v, i) => {
            return (
              <li key={i}>
                <span>{v.name}</span>
                <span>{v.dd}</span>
                <span>{v.pag}</span>
                <span>{v.pit}</span>
              </li>
            );
          })}
        </ul>
      </RankCss>
    </>
  );
};

export default Rank;
