import styled from "styled-components";

const HeaderCss = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.7708vw;
  border-bottom: 1px solid #bbb;
  padding: 0px 30px;
  ul {
    display: flex;
    li {
      margin-right: 30px;
    }
  }
  .selected {
    font-size: 4rem;
    font-weight: 600;
    color: black;
    text-decoration: none;
  }
  .not {
    font-size: 4rem;
    color: gray;
    text-decoration: none;
  }
`;

export default HeaderCss;
