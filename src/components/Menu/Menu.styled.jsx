import styled from "styled-components";

export const Header = styled.header.withConfig()`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 8vh;
  transition: background-color .1s ease-in-out;
  background-color: ${props => props.scrolled ? "#f1c4ba" : "transparent"};

  h1, a {
    color: ${props => props.scrolled ? "#f6f6f6" : "black"};
    text-decoration: none;
		margin-left: 8px;
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

	@media (max-width: 999px){
		justify-content: space-between;
		body{
			overflow-x: hidden;
		}
		ul{
			position: absolute;
			top: 8vh;
			right: 0;
			width: 100vw;
			height: 92vh;
			background-color: ${props => props.scrolled ? "#f1c4ba" : "white"};
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			transform: translateX(100%);
		}
		ul.active{
			transform: translateX(0);
		}
	}
`;

export const MenuContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1051;
`;

export const MenuResp = styled.div.withConfig()`
	cursor: pointer;
	display: none;
	margin-right: 30px;
	.barra{
		color: ${props => props.scrolled ? "white" : "black"};
	}

	@media (max-width: 999px){
		display: block;
	}
`
