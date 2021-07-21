import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav` 
 background: #1d1f4b;
 height; 80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index:10;

 @media screen and (max-width: 960px){
   transition: 0.8s all ease;
 }
`

export const NavbarContainer = styled.div` 
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1500px;

` 

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 2.5rem;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;
`

export const NavLogoImg = styled.img`
max-width: 125px;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
  display:block;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  transform: translate (-100%, 60%);
  font-size: 1.8rem;
  color: #fff;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -23px;

@media screen and (max-width: 769px){
  display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(Link)`
color:#fff;
display:flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;

&:hover{
  border-bottom:2px solid #fff;
}
`

export const NavBtn = styled.nav`
display:flex;
align-items: center;

@media screen and (max-width: 768px) {
  display:none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 50px;
background: #fff;
white-space: nowrap;
padding: 0.5rem 1.5rem;
color: #1d1f4b;
outline: none;
border: none;
transition: all 0.3s ease-in-out;
text-decoration: none;
box-shadow: 1px 1px 11px 0px #FFCBA4;

&:hover{
  transition: all 0.3s ease-in-out;
  background: #ffcba4;
  box-shadow: none;
}
`

