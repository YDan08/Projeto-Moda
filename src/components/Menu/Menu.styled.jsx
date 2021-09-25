import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 50px;

  h1 {
    a {
      color: black;
      text-decoration: none;
    }
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
        .icones {
          margin-right: 5px;
        }
      }
    }
  }
`;

export const MenuContent = styled.div`
  background-color: #f1c4ba;
  h1 {
    a {
      color: #f6f6f6;
    }
  }

  ul {
    li {
      a {
        button {
          color: #f6f6f6;
        }
        .icones {
          color: #f6f6f6;
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
