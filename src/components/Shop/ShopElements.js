import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const ShopHeader = styled.div`
background: #fff;
max-width: 1100px;
padding-top: 20px;
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
`

export const ViewProductBtn = styled.button`
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
`

export const ShopH1 = styled.h1`
text-align: center;
padding: 40px;
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

export const ProductNameH3 = styled.h3`
text-align: center;
`

export const ProductPrice = styled.h3`
text-align: center;
`

export const ProductImage = styled.img`
max-width: 250px;

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
`

export const RemoveCartBtn = styled.button`
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
`

export const ClearCartBtn = styled.button`
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
`

export const CartTotal = styled.div`
padding: 1px;
`