import styled from "styled-components";

const BookReviewCss = styled.section`
  height: calc(100% - 300px);
  overflow-y: scroll;
  .review {
    height: 100%;
    width: 600px;
    background: white;
    margin: 20px 0;
    border-bottom: 1px solid;
    .reviewTitle {
      font-size: 18px;
      margin: 5px 0;
    }
    .reviewContent {
      font-size: 14px;
      margin: 5px 0;
      height: auto;
      .showMore {
        font-size: 12px;
        border: none;
        background: none;
        color: #666;
        margin: 0 5px;
      }
    }
    .reviewND {
      font-size: 12px;
      color: #888888;
      span {
        margin-right: 10px;
      }
    }
  }
`;

export default BookReviewCss;
