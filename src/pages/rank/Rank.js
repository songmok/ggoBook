import React, { useState } from "react";
import RankCss from "./style/RankCss";

import RankHead from "components/rank/RankHead";
import RankUser from "components/rank/RankUser";
import Pagination from "react-js-pagination";
import { rankuser } from "pages/rank/data/rankjson";
const Rank = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(10);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <RankCss>
        <ul className="rankHead">
          <RankHead />
        </ul>
        <ul className="rankUser">
          <RankUser rankuser={rankuser} />
        </ul>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={rankuser.length - 1}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
        ></Pagination>
      </RankCss>
    </>
  );
};

export default Rank;
