import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const Filtro = styled.div`
  width: 60%;
  margin: 60px auto;
`

export const RoupasContainer = styled.div`
  width: 90%;
  margin: 10vh auto 40px;
`

export const RoupasContent = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
	
	@media (max-width:999px){
		grid-template-columns: 1fr;
	}

	@media (max-width:1500px){
		grid-template-columns: 1fr 1fr;
	}
`

export const CompraButton = styled(Button)`
  display: flex;
  padding: 10px;
  border: #e7a699 1px solid;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #e7a699;
    color: #333;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  width: 450px;
  &:hover {
    border: solid 1px #e7a699;
    border-radius: 20px;
  }
  img {
    width: 300px;
    border-radius: 20px;
  }
  h3 {
    color: #555;
    font-size: 16px;
    text-align: center;
    margin: 14px 0;
    padding: 15px 15px 0px;
    border-top: solid 1px #e7a699;
  }
  p {
    color: #e7a699;
    margin-bottom: 14px;
  }

	@media (max-width: 999px){
		width: 350px;
		margin: 20px auto; 
	}
`