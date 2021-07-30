import React from 'react'
import {
  PromoContainer,
  PromoImgWrap,
  SectionLeft,
  PromoSmallImg,
  SectionCenter,
  PromoMainImg,
  PromoInfoWrap,
  PromoH2,
  PromoH1,
  Price,
  ColorContainer,
  Color1,
  Color2,
  Color3,
  Color4,
  PromoOffer,
  SizeContainer,
  Size

} from './PromoElements'
import {Button} from '../ButtonElement'
import nb1 from '../../images/new2.png'
import nb2 from '../../images/new6.png'
import nb3 from '../../images/new5.png'
import nb4 from '../../images/new4.png'
import nb5 from '../../images/new1.png'

const Promo = () => {
  return (
    <div>

      
     <PromoContainer>
      <PromoImgWrap>
       <SectionLeft>
       <PromoSmallImg src={nb1}/>
       <PromoSmallImg src={nb2}/>
       <PromoSmallImg src={nb3}/>
       <PromoSmallImg src={nb4}/>
       </SectionLeft>
       <SectionCenter>
       <PromoMainImg src={nb5}/>
       <PromoOffer>Hey, you’re new here!
Get 15% off site-wide when you spend £20
With code: SPRINTNEWOFFER</PromoOffer>
       </SectionCenter>
      </PromoImgWrap>
      <PromoInfoWrap>
        <PromoH2>New Balance</PromoH2>
        <PromoH1>327 Trainers</PromoH1>
        <Price>£79.99</Price>
        <ColorContainer>
        <Color1></Color1>
        <Color2></Color2>
        <Color3></Color3>
        <Color4></Color4>
        </ColorContainer>
        <SizeContainer>
          <Size>07</Size>
          <Size>08</Size>
          <Size>09</Size>
          <Size>10</Size>
        </SizeContainer>
        <Button to='/shop'>Add to Cart</Button>
      </PromoInfoWrap>
     </PromoContainer>
    </div>
  )
}

export default Promo
