import styled from "styled-components";
import { sectionwrap } from "utils/Layout";

const BookDetailCss = styled.section`
  ${sectionwrap}
  display: flex;
  justify-content: center;
  gap: 50px;
  background: yellow;
  .bookInfo {
    width: 400px;
    padding: 2px;
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 300px;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
  }
  .bookReviews {
    background: white;
  }
`;

export default BookDetailCss;
