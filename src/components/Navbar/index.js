import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer, 
  NavLogo, MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
   <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          SPRINT.
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='/signin'>New In</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='login'>Men</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="women">Women</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="brands">Brands</NavLinks>
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

