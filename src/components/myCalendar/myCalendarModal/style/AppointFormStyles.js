import styled from "styled-components";

export const FormModalCss = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin: 0 auto;
  }
  form {
  }
  ul {
    padding: 0;
    width: 100%;
    li {
      display: flex;
      flex-direction: column;
      padding: 30px;
      input {
        padding: 30px;
        border: 1px #c0c0c0 solid;
      }
      label {
        padding-bottom: 20px;
      }
      /* datapicker{} */
      button {
        display: none;
      }
    }
  }
`;
