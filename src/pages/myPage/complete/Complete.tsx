import { useState } from "react";
import { BookJson } from "./list";
import CompleteCss from "./style/CompleteCss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ListBook from "components/listBook/ListBook";

type Props = {};

const Complete = (props: Props) => {
  const [openList, setOpenList] = useState<boolean>(true);

  const clickOn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenList(true);
  };

  const clickOff = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenList(false);
  };

  const plan = [
    {
      null: null,
    },
  ];

  return (
    <CompleteCss>
      <div>
        <ListBook plan={plan} />
      </div>
      <div>
        <div className="독후감"></div>
      </div>
    </CompleteCss>
  );
};

export default Complete;
