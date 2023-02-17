import styled from "styled-components";

const FooterCss = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border-top: 1px solid #bbb;
  @media ${(props) => props.theme.mob} {
    display: none;
  }
`;

export default FooterCss;
