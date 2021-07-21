import styled from 'styled-components'

export const ContentContainer = styled.div` 
color: #fff;
background: ${({lightBg}) => (lightBg ? '#fff' : '#1d1f4b')};

@media screen and (max-width: 768px){
  padding: 100px 0;

}
` 

export const ContentWrapper = styled.div`
display: grid;
margin-right: auto;
margin-left: auto;
width: 100%;
max-width: 1100px;
height: 700px;
z-index: 1;
justify-content: center; 
padding: 0 50px;

@media screen and (max-width: 768px){
  padding: 0 20px;
  height: 700px;
}

@media screen and (max-width: 468px){
  padding: 0 20px;
  height: 600px;
}


`

export const ContentRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
grid-template-areas: ${({imgStart}) =>
(imgStart ? `'col2 col1'` : `'col1 col2'`)};
align-items: center;

@media screen and (max-width: 768px){
  grid-template-areas: ${({imgStart}) =>
  (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}

`

export const Column1 = styled.div`
margin-bottom: 25px;
margin-top: 0px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding- bottom: 60px;
`

export const TopLine = styled.p`
color: #1d1f4b;
font-size: 16px;
line-height: 16px;
font-weight: 700;
text-transform: uppercase;
margin-bottom: 16px;

`

export const Heading = styled.h1`
margin-bottom: 23px;
margin- left: -23;
font-size: 49px;
line-height: 1.1;
font-weight: bold;
color: ${({lightText}) => (lightText ? '#f9f9f9' : '#1d1f4b')};

@media screen and (max-width: 480px){
  font-size: 32px;
}

`

export const Subtitle = styled.p`
margin-bottom: 34px;
font-size: 18px;
line-height: 23px;
color: ${({darkText}) => (darkText ? '#525252' : '#fff')};
`

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`

export const ImgWrap =styled.div`
max-width: 400px;
height: 100%;



`

export const Img =styled.img`
width:100%;
margin: 0 0 20px 0;
padding-right: 0;
border-radius: 10px;

}
`