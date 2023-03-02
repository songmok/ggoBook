import styled from "styled-components";
import { bigsize, defaltsize, midllesize, minsize } from "utils/FontSize";
import { addButton, myScheduleBtn } from "utils/repeatCss";

const ListSelectCss = styled.form`
  padding: 20px;
  display: flex;
  .myBook {
    width: 200px;
    height: 400px;
    /* background-color: #000; */
    overflow-y: scroll;
    .myBookIn {
      width: 200px;
      input {
        position: absolute;
        left: 999999999px;
      }
      label {
        display: block;
        background-color: rgba(255, 255, 255, 1);
        width: 90%;
        &:hover {
          background-color: #f5eba9;
          box-shadow: 0 0 1px 1px #a76161 inset;
        }
        .bookWrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-bottom: 10px;
          .bookName {
            color: #000;
            font-size: 1.3rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            padding-bottom: 7px;
            padding: 15px;
          }
          img {
            width: 60%;
            height: 170px;
            border: 4px solid #faad;
            border-radius: 30px;
          }
        }
      }
    }
  }
  .planList {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(1fr);
    justify-content: center;
    height: 0;
    .header {
      width: 100%;
      padding-bottom: 50px;
      text-align: center;
      h2 {
        font-size: ${bigsize};
      }
    }
    ul {
      .dateWrap {
        display: flex;
        width: 600px;
        justify-content: space-around;
        .dates {
          span {
            font-size: ${minsize};
          }
          .dateHead {
            margin-right: 10px;
          }
          .str {
          }
        }
      }
    }
    .descWrap {
      label {
      }
      .desc {
        display: block;
        width: 600px;
        height: 185px;
        resize: none;
        padding: 10px;
      }
    }
  }
`;

export default ListSelectCss;
