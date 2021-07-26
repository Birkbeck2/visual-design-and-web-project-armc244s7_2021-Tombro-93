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
          <NavLogoImg src={Logo1}/>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='/store'>New In</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/store'>Men</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/store'>Women</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/store'>Brands</NavLinks>
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

