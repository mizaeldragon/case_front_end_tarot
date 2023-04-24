import styled from "styled-components"

export const CardContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);
  row-gap: 20px;
  background-color: #0000CD	;
  text-align: center;
`
export const Header = styled.div`
  background-color: #A9A9A9;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Titulo = styled.h1`
display: flex;
justify-content: center;
`
export const Button = styled.button`
background-color: white ;
height: 40px;
margin-top: 155px;
:hover{
  background-color: #A9A9A9;
  transform: scale3d(1.1, 1.1, 1);
}
`
export const CardContainer1 = styled.div`
background-color: #A9A9A9;
width: 120px;
margin-top: 10px;
:hover{
  transform: scale3d(1.1, 1.1, 1);
}
`
export const Imagem = styled.img`
width: 100px;
height: 80%;
`
export const CardName = styled.h6`
color: white;
margin: 0 auto;
`
export const TituloDetalhes = styled.h1`
  text-align: center;

`
export const ImagemDetalhes = styled.img`
  display: block;
  margin: 0px auto;
  height: 275px;
`
export const ContainerDetalhes = styled.div`
  background-color: #0000CD;  
  display: grid;
  text-align: center; 

`
export const Texto = styled.p`
  color: white;
`

export const SubTitulo = styled.h4`
display: flex;
justify-content: center;
`