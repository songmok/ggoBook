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
        @media ${(props) => props.theme.mob} {
          font-size: ${midllesize};
          font-weight: bold;
        }
      }
    }
  }
  .rankUser {
    margin-bottom: 30px;
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
  .pagination {
    display: flex;
    justify-content: center;
    li {
      a {
        font-size: 20px;
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color 0.3s;
      }
    }
  }
`;

export default RankCss;
