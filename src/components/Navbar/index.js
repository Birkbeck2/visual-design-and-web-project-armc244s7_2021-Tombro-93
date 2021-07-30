import React from 'react'
import {FaBars} from 'react-icons/fa'
import Logo1 from '../../images/sprint-logo-white-01.png'
import {
  Nav,
  NavbarContainer, 
  NavLogo, 
  NavLogoImg,
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
   <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <NavLogoImg alt="Sprint Logo" src={Logo1}/>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='/new'>New In</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/shop'>Shop</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/promotion'>Promotion</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
         <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar

