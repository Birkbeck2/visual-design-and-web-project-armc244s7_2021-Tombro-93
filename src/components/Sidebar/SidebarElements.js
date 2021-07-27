import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const SidebarContainer =styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #1d1f4b;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.2s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
top: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};

`

export const CloseIcon =styled(FaTimes)`
color: #fff;
`

export const Icon = styled.div`
position: absolute;
right: 1rem;
background: transparent;
font-size: 1.5rem;
top: 1rem;
outline: none;
cursor: pointer;
`

export const SidebarWrap = styled.div`
color: #fff;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat (6,80px);
text-align: center;

@media screen and (max-width: 480px){
  grid-template-rows: repeate (6, 60px);
}
`

export const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
margin: 1rem;
font-size: 1.5rem;
list-style: none;
color: #fff;
text-decoration: none;
transition: 0.3s ease-in-out;

&:hover{
  color: #1d1f4b
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
`
export const SideBtnWrapper = styled.div`
display: flex;
justify-content: center;
`
export const SidebarRoute = styled(Link)`
color: #1d1f4b;
white-space: nowrap;
border: none;
font-size: 1.5rem;
margin: 3rem;
padding: 0.5rem 1.5rem;
border-radius: 50px;
background: #fff;
transition: all 0.3s ease-in-out;
outline: none;
box-shadow: 1px 1px 11px 0px #FFCBA4;
text-decoration: none;

&:hover{
  transition: all 0.3s ease-in-out;
  box-shadow: none
  background: #ffcbA4
}
`