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
  FooterLogoImg,
  WebsiteLegal,
  SocialIcons,
  SocialIconLink,
  SocialMedia,
} from './FooterElements'
import Logo2 from '../../images/sprint-logo-white-01.png'


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
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>
                <FooterLink to='/signin'>Email</FooterLink>
                <FooterLink to='/signin'>Phone</FooterLink>
                <FooterLink to='/signin'>Write</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>My Orders</FooterLinkTitle>
                <FooterLink to='/signin'>Delivery</FooterLink>
                <FooterLink to='/signin'>Returns</FooterLink>
                <FooterLink to='/signin'>Track order</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Legal</FooterLinkTitle>
                <FooterLink to='/hold'>Terms</FooterLink>
                <FooterLink to='/hold'>Complaints</FooterLink>
                <FooterLink to='/hold'>Support</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to='/'>
              <FooterLogoImg src={Logo2}/>
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
