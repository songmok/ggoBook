import styled from "styled-components";

const BookRatingCss = styled.section`
  .ratingTop {
    margin-bottom: 20px;
    textarea {
      resize: none;
      border-radius: 5px;
    }
  }
  .ratingBottom {
    height: calc(100% - 200px);
    overflow-y: scroll;
    .rating {
      height: 100px;
      width: 600px;
      background: white;
      text-align: center;
      margin: 20px 0;
      border-bottom: 1px solid;
    }
  }
`;

export default BookRatingCss;
