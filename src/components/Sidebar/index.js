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
          <SidebarLink to='/shop' onClick={toggle}>
           New In
          </SidebarLink>
          <SidebarLink to='/shop' onClick={toggle}>
           Shop
          </SidebarLink>
          <SidebarLink to='/promotion' onClick={toggle}>
           Promotion
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
