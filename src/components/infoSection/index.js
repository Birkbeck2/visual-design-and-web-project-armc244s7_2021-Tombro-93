import React from 'react'
import {Button} from '../ButtonElement'
import { 
  ContentContainer,
  ContentWrapper, 
  ContentRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './infoElements'

const InfoSection = ({
  lightBg,
  id, 
  imgStart, 
  topLine, 
  lightText, 
  headLine, 
  darkText, 
  description, 
  buttonLabel, 
  img, 
  alt,
  primary, 
  dark,
  dark2
}) => {
  return (
    <>
    <ContentContainer lightBg={lightBg} id={id}>
      <ContentWrapper>
        <ContentRow imgStart={imgStart}>
          <Column1>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headLine}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
            <BtnWrap>
              <Button to='/promotion'
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              dark= {dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}

              >{buttonLabel}</Button>
            </BtnWrap>
          </TextWrapper>
          </Column1>
          <Column2>
          <ImgWrap>
          <Img src={img} alt={alt}/>
          </ImgWrap>
          </Column2>
        </ContentRow>
      </ContentWrapper>
    </ContentContainer>
  </>
  )
}

export default InfoSection

