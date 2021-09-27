import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #e7a699;
  margin-top: 30px;
  color: #f6f6f6;
`;

export const FooterContent = styled.div`
  width: 300px;
  h3 {
    border-bottom: solid 1px #f6f6f6;
  }
  ul {
    align-items: center;
    li {
      a {
        color: #f6f6f6;
        text-decoration: none;
        display: flex;
        align-items: center;
      }
    }
    h4 {
      font-size: 7px;
    }
  }
`;
