import React from 'react';
import {
  SidebarContainer,
  Icon, 
  CloseIcon,
  SidebarWrap,
  SidebarMenu,
  SidebarLink,
  SideBtnWrapper,
  SidebarRoute,
} from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrap>
        <SidebarMenu>
          <SidebarLink to='/' onClick={toggle}>
           New In
          </SidebarLink>
          <SidebarLink to='men' onClick={toggle}>
           Men
          </SidebarLink>
          <SidebarLink to='women' onClick={toggle}>
           Women
          </SidebarLink>
          <SidebarLink to='brands' onClick={toggle}>
           Brands
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrapper>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrapper>
      </SidebarWrap>
    </SidebarContainer>
  )
}

export default Sidebar
