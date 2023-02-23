import styled from "styled-components";

const BookReviewCss = styled.section`
  .reviewTop {
    margin-bottom: 20px;
    textarea {
      resize: none;
      border-radius: 5px;
    }
  }
  .reviewBottom {
    height: calc(100% - 300px);
    overflow-y: scroll;
    .review {
      height: 280px;
      width: 600px;
      background: white;
      text-align: center;
      margin: 20px 0;
      border-bottom: 1px solid;
    }
  }
`;

export default BookReviewCss;
