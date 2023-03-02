import styled from "styled-components";

const BookRatingCss = styled.section`
  height: calc(100% - 200px);
  overflow-y: scroll;
  .rating {
    height: 100%;
    width: 600px;
    background: white;
    margin: 20px 0;
    border-bottom: 1px solid;
    & .MuiRating-iconFilled {
      color: #bb6569;
    }
    .ratingContent {
      font-size: 14px;
      margin: 5px 0;
    }
    .ratingND {
      font-size: 12px;
      color: #888888;
      span {
        margin-right: 10px;
      }
    }
  }
`;

export default BookRatingCss;
