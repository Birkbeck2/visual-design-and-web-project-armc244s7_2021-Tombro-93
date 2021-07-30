import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const ShopHeader = styled.div`
display: flex;
justify-content: flex-end;
background: #fff;
max-width: 1100px;
padding-top: 20px;

;
`

export const ViewCartBtn = styled(Link)`
border-radius: 50px;
background: #1d1f4b;
white-space: nowrap;
padding: 0.5rem 1.5rem;
margin: 20px;
color: #fff;
outline: none;
border: none;
transition: all 0.3s ease-in-out;
text-decoration: none;
box-shadow: 1px 1px 11px 0px #FFCBA4;

&:hover{
  background: #ffcba4;
  color: #1d1f4b;
}

`

export const ViewProductBtn = styled.button`
cursor: pointer;
white-space: nowrap;
padding: 0.5rem 1.5rem;
margin: 20px;
color: #1d1f4b;
background: #fff;
outline: none;
border: none;
transition: all 0.3s ease-in-out;
text-decoration: underline;
font-size: 16px;
`

export const ShopH1 = styled.h1`
text-align: center;
padding: 40px;
color: #1d1f4b;
`


export const ProductContainer = styled.div`
max-width: 1100px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
text-align: center;
justify-content: centre;
align-items: center;
margin: auto;
margin-bottom: 50px;
color: #1d1f4b;
margin-bottom: 0;

@media screen and (max-width: 1024px){
  max-width: 900px;
}

@media screen and (max-width: 800px){
max-width: 700px;

`

export const ProductWrapper = styled.div`
background: #fff;
border-radius: 10px;
display: flex;
flex-direction: column;
margin-top: 20px;
margin-bottom: 20px;
box-shadow: 1px 1px 25px 0px #525252;
`

export const CartProductWrapper = styled.div`
background: #fff;
border-radius: 10px;
display: flex;
flex-direction: row;
margin-top: 20px;
margin-bottom: 20px;
box-shadow: 1px 1px 25px 0px #525252;
width: 1100px;
`

export const QuantityInput = styled.input`
max-width: 40px;
border: none;
padding: 5px;
margin-left: 10px;
border-radius: 30px;
background: #d3d3d3;
font-size: 16px;
`

export const ProductNameH3 = styled.h3`
text-align: center;
padding: 15px;
font-size: 19px;
font-weight: 200;
`

export const CartProductNameH3 = styled.h3`
text-align: center;
padding: 15px;
font-size: 19px;
font-weight: 200;

@media screen and (max-width: 526px){
  display: none;
}
`

export const ProductPrice = styled.h3`
text-align: center;
font-size: 24px;
`

export const ProductImage = styled.img`
max-width: 250px;
padding: 5px;

@media screen and (max-width: 1024px){
  max-width: 200px;
}

@media screen and (max-width: 800px){
  max-width: 300px;
}

@media screen and (max-width: 648px){
  max-width: 250px;
}

@media screen and (max-width: 526px){
  max-width: 200px;
}

@media screen and (max-width: 526px){
  max-width: 175px;
}

`

export const CartProductImage = styled.img`
max-width: 250px;
max-height: 100px;

`

export const AddToCartBtn = styled.button`
border-radius: 50px;
background: #1d1f4b;
white-space: nowrap;
padding: 0.5rem 1.5rem;
margin: 20px;
color: #fff;
outline: none;
border: none;
transition: all 0.3s ease-in-out;
text-decoration: none;
box-shadow: 1px 1px 11px 0px #FFCBA4;

&:hover{
  background: #ffcba4;
  color: #1d1f4b;
}
`

export const RemoveCartBtn = styled.button`
background: #fff;
white-space: nowrap;
padding: 0.5rem 1.5rem;
margin: 20px;
color: #ff7676;
font-weight: bold;
font-size: 24px;
outline: none;
border: none;
transition: all 0.3s ease-in-out;
text-decoration: none;
cursor: pointer;
`

export const CartHeader = styled.div`
display: flex;
max-width: 1100px;
justify-content: flex-start;
`

export const ClearCartBtn = styled.button`
display: flex;
justify-content: flex-start;
border-radius: 50px;
background: #ff7676;
white-space: nowrap;
padding: 0.5rem 1.5rem;
margin: 20px;
color: #fff;
outline: none;
border: none;
transition: all 0.3s ease-in-out;
text-decoration: none;
`

export const CartTotal = styled.div`
padding: 20px;
font-size: 24px;
font-weight: bold;
`

export const PaymentContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 25px;
`

export const PaymentBtn = styled(Link)`
cursor: pointer;
font-size: 24px;
font-weight: bold;
border-radius: 50px;
background: #1d1f4b;
white-space: nowrap;
padding: 0.5rem 1.5rem;
margin: 20px;
color: #fff;
outline: none;
border: none;
transition: all 0.3s ease-in-out;
text-decoration: none;
box-shadow: 1px 1px 11px 0px #FFCBA4;

&:hover{
  background: #ffcba4;
  color: #1d1f4b;
}
`