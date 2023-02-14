import styled from "styled-components";
import { headertitle, midllesize } from "utils/FontSize";
import { rankgrid } from "utils/Layout";
import { bfaf } from "utils/repeatCss";
const RankCss = styled.section`
  margin: 0 100px;
  padding-top: 50px;
  .rankHead {
    ${rankgrid}
    padding-bottom: 30px;
    position: relative;
    &::after {
      ${bfaf}
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
    }
    > li {
      > span {
        font-size: ${headertitle};
      }
    }
  }
  .fl {
    > li {
      ${rankgrid}
      > span {
        display: block;
        font-size: ${midllesize};
      }
    }
  }
`;

export default RankCss;
