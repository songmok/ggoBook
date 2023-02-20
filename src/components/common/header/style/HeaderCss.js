import styled from "styled-components";
import { bigsize, headerIcon, headertitle, midllesize } from "utils/FontSize";

const HeaderCss = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.7708vw;
  border-bottom: 1px solid #bbb;
  padding: 0px 30px;
  background-color: #942e44;
  position: relative;
  z-index: 9999;

  .headerWrap {
    @media ${(props) => props.theme.mob} {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100px;
      background-color: pink;
    }
    ul {
      display: flex;
      @media ${(props) => props.theme.mob} {
        justify-content: space-between;
        align-items: flex-end;
        height: 100px;
        width: 100%;
        position: relative;
      }
      li {
        margin-right: 30px;
        @media ${(props) => props.theme.mob} {
          display: flex;
          width: calc(100% / 4);
          margin: 0;
          /* last child */
          :last-child {
            position: absolute;
            left: 50%;
            top: -50px;
            transform: translateX(-27%);
            justify-self: center;
            > a {
              display: block;
              width: 100px;
              height: 100px;
              border-radius: 100%;
              background-color: skyblue;
              display: flex;
              justify-content: center;
              align-items: center;
              > i {
                font-size: ${headerIcon} !important;
              }
              > em {
                font-size: 0 !important;
                display: none;
              }
            }
          }
        }
        a {
          font-size: ${headertitle};
          @media ${(props) => props.theme.tablet} {
            font-size: ${midllesize} !important;
          }
          @media ${(props) => props.theme.mob} {
            font-weight: normal !important;
            width: 100%;
            height: 100px;
            text-align: center;
            color: #000 !important;
            display: block;
          }
          i {
            display: none;
            @media ${(props) => props.theme.mob} {
              display: block;
              font-size: ${headerIcon};
            }
          }
        }
      }
    }

    .selected {
      font-weight: bold;
      color: #afa9fd;
      @media ${(props) => props.theme.mob} {
        background-color: #999 !important;
      }
    }
    .not {
      color: #fff !important;
    }
  }
`;

export default HeaderCss;
