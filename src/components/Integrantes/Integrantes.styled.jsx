import styled from "styled-components";

export const CardContent = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    border-radius: 20%;
    border: 2px solid #f1c4ba;
  }

	@media (max-width: 1500px){
		margin: 20px 0 ;
	}
`;
