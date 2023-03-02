import React, { useEffect, useState } from "react";
import RankCss from "./style/RankCss";
import instance from "api/instance";
import request from "api/request";

import RankHead from "components/rank/RankHead";
import RankUser from "components/rank/RankUser";
// import Pagination from "react-js-pagination";
import { rankuser } from "pages/rank/data/rankjson";
import { Link, useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const Rank = () => {
  const { RANK } = useParams();
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState();
  console.log(RANK);
  const page = parseInt(RANK);
  const rank = async () => {
    const params = {
      page: RANK - 1,
    };
    await instance.get(request.rank, { params: params }).then((res) => {
      setUsers(res.data.content);
      setPages(res.data.totalPages);
    });
  };

  useEffect(() => {
    rank();
  }, [RANK]);

  // const [items, setItems] = useState(10);

  return (
    <>
      <RankCss>
        <ul className="rankHead">
          <RankHead />
        </ul>
        <ul className="rankUser">
          <RankUser users={users} />
        </ul>

        <div className="pagination">
          <Pagination
            count={pages}
            page={page}
            color="primary"
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/rank/${item.page}`}
                {...item}
              />
            )}
          />
        </div>
      </RankCss>
    </>
  );
};

export default Rank;
