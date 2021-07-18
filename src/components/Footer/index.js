import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink, 
  SocialMediaWrapper,
  SocialLogo,
  WebsiteLegal,
  SocialIcons,
  SocialIconLink,
  SocialMedia
} from './FooterElements'

const Footer = () => {
  return (
    <>
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to='/signin'>Sizing</FooterLink>
                <FooterLink to='/signin'>Help</FooterLink>
                <FooterLink to='/signin'>Works for us</FooterLink>
                <FooterLink to='/signin'>My orders</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to='/signin'>Sizing</FooterLink>
                <FooterLink to='/signin'>Help</FooterLink>
                <FooterLink to='/signin'>Works for us</FooterLink>
                <FooterLink to='/signin'>My orders</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to='/signin'>Sizing</FooterLink>
                <FooterLink to='/signin'>Help</FooterLink>
                <FooterLink to='/signin'>Works for us</FooterLink>
                <FooterLink to='/signin'>My orders</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to='/signin'>Sizing</FooterLink>
                <FooterLink to='/signin'>Help</FooterLink>
                <FooterLink to='/signin'>Works for us</FooterLink>
                <FooterLink to='/signin'>My orders</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to='/'>
              SPRINT.
            </SocialLogo>
            <WebsiteLegal>Sprint. Copyright {new Date().getFullYear()}</WebsiteLegal>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
      
    </>
  )
}

export default Footer
