import React from "react";
import RankCss from "./style/RankCss";

import RankHead from "components/rank/RankHead";
import RankUser from "components/rank/RankUser";

const Rank = () => {
  return (
    <>
      <RankCss>
        <ul className="rankHead">
          <RankHead />
        </ul>
        <ul className="rankUser">
          <RankUser />
        </ul>
      </RankCss>
    </>
  );
};

export default Rank;
