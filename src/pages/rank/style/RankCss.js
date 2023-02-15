import styled from "styled-components";
import { headertitle, midllesize } from "utils/FontSize";
import { rankgrid, sectionwrap } from "utils/Layout";
import { bfaf } from "utils/repeatCss";
const RankCss = styled.section`
  ${sectionwrap}
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
  .rankUser {
    > li {
      ${rankgrid}
      padding-top: 45px;
      &:first-child {
        padding-top: 30px;
      }
      > span {
        display: block;
        font-size: ${midllesize};
      }
    }
  }
`;

export default RankCss;
