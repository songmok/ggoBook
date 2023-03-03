import { min } from "moment";
import styled from "styled-components";
import { bigsize, defaltsize, minsize } from "utils/FontSize";
export const UpdateModalCss = styled.form`
  padding: 20px;
  display: flex;
  position: relative;
  .header {
    width: 200px;
    height: 400px;
    h2 {
      width: 100%;
      font-size: ${minsize};
    }
    img {
      width: 100%;
    }
  }

  ul {
    padding-left: 30px;
    display: grid;
    .dateWrap {
      display: flex;
      width: 600px;
      justify-content: space-around;
      margin-bottom: 70px;
      .dates {
        span {
          font-size: ${defaltsize};
        }
        .dateHead {
          margin-right: 10px;
        }
        .str {
          margin-right: 20px;
        }
      }
    }
    .fixWrap {
      width: 600px;
      text-align: center;
      .dateUpdate {
        padding: 0px 7px;
        font-size: ${defaltsize};
      }
    }
  }
  .descWrap {
    width: 600px;
    label {
      font-size: ${defaltsize};
    }
    .desc {
      display: block;
      width: 600px;
      height: 185px;
      resize: none;
      padding: 10px;
    }
    > .submit {
      position: relative;
      left: 530px;
    }
  }
`;
