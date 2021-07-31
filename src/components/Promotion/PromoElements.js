import styled from 'styled-components'

export const PromoContainer = styled.div` 
 color: #1d1f4b;
 max-width: 1100px;
 display: flex;
 margin-top: 50px;
 margin-bottom: 50px;

 @media screen and (max-width: 960px){
  flex-direction: column;
}
`

export const PromoImgWrap = styled.section` 
 display: flex;
 flex-direction: row;
`

export const SectionLeft = styled.aside` 
display: flex;
flex-direction: column;
max-width: 80px;

@media screen and (max-width: 960px){
  display: none;
}
` 

export const PromoSmallImg = styled.img` 
max-width: 100px;
`

export const SectionCenter = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 90px;
padding-bottom: 90px;
max-width: 500px;

@media screen and (max-width: 960px){
  padding-left: 0px;
  padding-bottom: 20px;
}
` 

export const PromoMainImg = styled.img` 
max-width: 500px;

@media screen and (max-width: 500px){
  max-width: 300px;
}
`

export const PromoOffer = styled.p` 
max-width: 340px;
background: #FFCBA4;
padding: 30px;
max-width: 500px;
border-radius: 10px;
margin-left: 30px;

@media screen and (max-width: 960px){
  display: none;

}
`

export const PromoInfoWrap = styled.div` 
 display: flex;
 flex-direction: column;
 max-width: 340px;
`

export const PromoH2 = styled.h2` 
 text-align: center;
 font-weight: 200;
`

export const PromoH1 = styled.h1` 
 text-align: center;
 font-size: 40px;
 font-style: italic;
`

export const Price = styled.p` 
 text-align: center;
 font-weight: bold;
 font-size: 30px;
 padding: 10px;
`

export const ColorContainer = styled.div` 
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
`

export const Color1 = styled.div` 
max-width: 10px;
max-height: 10px;
background: #79D67C;
margin: 10px;
padding: 15px;
border-radius: 7px;
`

export const Color2 = styled.div` 
max-width: 10px;
max-height: 10px;
background: #FF7676;
margin: 10px;
padding: 15px;
border-radius: 7px;
`

export const Color3 = styled.div` 
max-width: 10px;
max-height: 10px;
background: #E0A4FF;
margin: 10px;
padding: 15px;
border-radius: 7px;
`

export const Color4 = styled.div` 
max-width: 10px;
max-height: 10px;
background: #A4B2FF;
margin: 10px;
padding: 15px;
border-radius: 7px;
`

export const SizeContainer = styled.div` 
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
`

export const Size = styled.div` 
max-width: 10px;
max-height: 10px;
margin: 22px;
margin-bottom: 40px;
`




