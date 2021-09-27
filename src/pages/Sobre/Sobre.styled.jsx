import styled from "styled-components";

export const SobreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
	height: 64vh;
	margin: 10vh 0;

  .integrantes {
    display: flex;
  }
`;

export const IntegrantesContent = styled.div`
  display: flex;
	@media (max-width: 999px){
		flex-direction: column;
	}
`;
