import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const ServicesContainer = styled.div` 
display: flex;
flex-direction: column;
padding-top: 75px;
justify-content: center;
align-items: center;
background: #fff;

@media screen and (max-width: 768px){
  max-width: 100%;
}

@media screen and (max-width: 480px){
  padding-top: 50px;
}

` 

export const ServicesWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 35px;
padding: 0 50px;

@media screen and (max-width: 768px){
  grid-template-columns: 1fr 1fr;

}

@media screen and (max-width: 468px){
  grid-gap: 20px;
  padding: 0 20px;

}

` 

export const ServiceLink1 = styled(Link)`
text-decoration: none;
`

export const ServiceLink2 = styled(Link)`
text-decoration: none;
`

export const ServicesImage = styled.img`
width: 100%;
border-radius: 10px;
box-shadow: 1px 1px 30px 0px #000;
transition: all 0.3s ease-in-out;


&:hover{
  transform: scale(1.02);
  transition: all 0.3s ease-in-out;
}
`
