import styled from "styled-components";

export const Header = styled.header.withConfig()`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 50px;
  background-color: ${props => props.scrolled ? "#f1c4ba" : "transparent"};

  h1, a {
    color: ${props => props.scrolled ? "#f6f6f6" : "black"};
    text-decoration: none;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      list-style: none;
      margin-right: 10px;

      a {
        text-decoration: none;
        display: flex;
        align-items: center;

        button {
          color: ${props => props.scrolled ? "#f6f6f6" : "inherit"}
        }

        .icones {
          margin-right: 5px;
          color: ${props => props.scrolled ? "#f6f6f6" : "inherit"}
        }
      }
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0%;
`;
