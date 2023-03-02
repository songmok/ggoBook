import styled from "styled-components";
import {
  bigsize,
  defaltsize,
  headertitle,
  midllesize,
  minsize,
} from "utils/FontSize";

const FooterCss = styled.footer`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  justify-content: center;
  button {
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    h1 {
      padding-top: 10px;
      font-size: ${minsize};
      display: block;
      height: 0;
      padding-bottom: 10px;
      b {
        font-size: ${bigsize};
      }
    }
  }
  .member {
    padding: 40px;
    div {
      position: relative;
      width: 100%;
      text-align: center;
      h2 {
        color: #333;
        padding-bottom: 5px;
      }
      ul {
        display: flex;
        justify-content: center;
        li {
          padding: 0 30px;
          span {
            font-size: ${defaltsize};
          }
          a {
            padding-left: 5px;
            font-size: ${defaltsize};
            i {
            }
          }
        }
      }
    }
  }

  @media ${(props) => props.theme.mob} {
    display: none;
  }
`;

export default FooterCss;
