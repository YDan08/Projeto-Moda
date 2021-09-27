import styled from "styled-components";

export const CarroselContent = styled.div`
  width: 90%;
  margin: 10vh auto 0;
  padding: 30px 0px;
  .item {
    position: unset;
    img {
      margin: 0 auto;
      width: 1100px;
    }
  }

	@media (max-width:1500px){
		.item{
				img{
					width: 600px;
				}
		}
	}

	@media (max-width:999px){
		display: none;
	}
`;
