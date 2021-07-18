import styled from 'styled-components'
import{MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const TopContainer = styled.div`
display: flex;
padding-left: 0 30px;
height: 800px;
position: relative;
z-index: 1;
align-items: center;

:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
}
`

export const TopBg = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
overflow: hidden;
right:0;
bottom:0;
background: #ffcba4;
`

export const VideoBg = styled.video`
opacity: 55%;
width: 100%;
height:100%;
-o-object-fit: cover;
object-fit: cover;
`

export const TopContent = styled.div`
z-index: 3;
max-width: 1700px;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items:center;

`

export const TopH1 = styled.h1`
color: #1d1f4b;
font-weight: 900;
font-size: 70px;
text-align: center;

@media screen and (max-width: 768px){
  font-size: 60px;
}

@media screen and (max-width: 480px){
  font-size: 40px;
}
`


export const TopBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items; center;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 7px;
font-size:19px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 7px;
font-size:19px;
`