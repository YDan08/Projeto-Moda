import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #e7a699;
  color: #f6f6f6;
	padding: 17px;

	@media(max-width:999px){
		flex-direction: column;
		justify-content: space-between;
	}
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
	@media (max-width:999px){
		width: 80%;
		margin: 0 auto 20px;
		ul{
			li{
				list-style: none;
			}
		}
	}
`;
