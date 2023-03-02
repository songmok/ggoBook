import styled from "styled-components";

const BookRatingCss = styled.section`
  .ratingBox {
    height: calc(100% - 200px);
    overflow-y: scroll;
    background-color: #eaf9ff;
    padding: 0 20px;
    .noneRating {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      text-align: center;
    }
    .rating {
      height: auto;
      width: 100%;
      margin: 20px 0;
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
  }
  /* 아래의 모든 코드는 영역::코드로 사용 */
  .ratingBox::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }

  .ratingBox::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #217af4; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  .ratingBox::-webkit-scrollbar-track {
    background: #eaf9ff; /*스크롤바 뒷 배경 색상*/
  }
`;

export default BookRatingCss;
