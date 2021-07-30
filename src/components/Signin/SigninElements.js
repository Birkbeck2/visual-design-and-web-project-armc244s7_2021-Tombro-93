import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
min-height: 580px;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
  108deg, 
  rgba (1, 147, 86, 1) 0%,
  rgba (10, 201, 122, 1) 100%
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
background: #FFCBA4;
padding: 30px;
max-width: 800px;
height: auto: 
width: 100%
z-index: 1;
display: grid;
margin: 0 auto;
border-radius: 10px;
box-shadow: 0px 0px 40px 0px #808080;


@media screen and (max-width: 400px){
  padding: 32px 32px;1px 1px 11px 0px #FFCBA4;
 }
`

export const FormH1= styled.h1`
margin-bottom: 40px;
color: #1d1f4b;
font-size: 24px;
font-weight: bold;
text-align: center;

`

export const FormLabel= styled.label`
margin-bottom: 8px;
color: #1d1f4b;
font-size: 16px;
text-align: start;
`

export const FormInput= styled.input`
padding: 10px 10px;
margin-bottom: 32px;
border: none;
border-radius: 50px;
width: 100%;
box-shadow: 0px 0px 11px 0px #808080;
`

export const FormButton= styled.button`
background: #1d1f4b;
padding: 10px 20px;
border: none;
border-radius: 50px;
color: #fff;
font-size: 16px;
cursor: pointer;
margin-bottom: 10px;
box-shadow: 0px 0px 40px 0px #808080;

`

export const Text= styled.a`
text-align: center;
margin: top;
color: #1d1f4b;
font-size: 14px;
cursor: pointer;
`
