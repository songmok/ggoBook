import styled from "styled-components";

const CompleteCss = styled.section`
  display: flex;
  .bookDetail {
    width: calc(100% - 25vw);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
      font-size: 30px;
      font-weight: 600;
      margin: 20px 0;
    }
    .bookChoose {
      font-size: 25px;
      font-weight: 500;
      margin: 10px 0;
    }
    .bookForm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .formName {
        font-size: 25px;
        font-weight: 500;
        margin: 10px 0;
      }
      .bookRating {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        .heart {
          span {
            margin: 5px 0;
          }
          & .MuiRating-iconFilled {
            color: #bb6569;
          }
        }
        .ratingBox {
          width: 708px;
          padding: 5px;
          border: 1px solid;
          border-radius: 5px;
          font-size: 14px;
        }
        textarea {
          resize: none;
          border-radius: 5px;
          padding: 5px;
          font-size: 14px;
          ::placeholder {
            opacity: 0.6;
            text-align: center;
          }
        }
      }
      .bookReview {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        .reviewBox {
          width: 708px;
          padding: 5px;
          border: 1px solid;
          border-radius: 5px;
          .reviewTitle {
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            margin: 5px 0;
          }
          .reviewContent {
            font-size: 14px;
          }
        }
        form {
          display: flex;
          flex-direction: column;
        }
        textarea {
          resize: none;
          border-radius: 5px;
          padding: 5px;
          margin: 2px 0;
          font-size: 14px;
          ::placeholder {
            opacity: 0.6;
            text-align: center;
          }
        }
      }
      .button {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin: 5px 0;
      }
    }
  }
`;

export default CompleteCss;
