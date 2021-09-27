import styled from "styled-components";

export const SobreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
	margin: 10vh 0;
	padding: 123px;
	h1{
		margin-bottom: 60px;
	}
	
  .integrantes {
    display: flex;
  }
`;

export const IntegrantesContent = styled.div`
  display: flex;
	@media (max-width: 1500px){
		flex-direction: column;
	}
`;
