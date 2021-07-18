import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
  108deg, 
  rgba (1, 147, 86, 1) 0%,
  rgbe (10, 201, 122, 1) 100%
);

`

export const FormWrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
  height: 80%;
}
`

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
  margin-left: 16px;
  margin-top: 16px;
}
`

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
 padding: 10px;
}
`

export const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto: 
width: 100%
z-index: 1;
display: grid;
margin: 0 auto;
padding 80px 32px;
border-radius: 4px;
box-shadow:

@media screen and (max-width: 400px){
  padding: 32px 32px;1px 1px 11px 0px #FFCBA4;

 }
`

export const FormH1= styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;

`

export const FormLabel= styled.label`
margin-bottom: 8px;
color: #fff;
font-size: 14px;
`

export const FormInput= styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 50%;
`

export const FormButton= styled.button`
background: #01bf71;
padding: 16px;
border: none;
border-radius: 50%;
color: #fff;
font-size: 20px;
cursor: pointer;
`

export const Text= styled.span`
text-align: center;
margin: top;
color: #fff;
font-size: 14px;
`
