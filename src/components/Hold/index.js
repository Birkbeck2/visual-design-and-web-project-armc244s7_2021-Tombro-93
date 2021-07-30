import React from 'react'
import {
  HoldContainer,
  HoldH1,
  HoldP,
  HoldImg,
} from './HoldElements'
import Train from '../../images/reebok.png'

const Hold = () => {
  return (
    <>
     <HoldContainer>
       <HoldH1>Thank you!</HoldH1>
       <HoldP>Our website is still undergoing maintenance during this time. We hope to be up and fully running soon. Please check back here for regular updates.</HoldP>
       <HoldImg src={Train}/>
     </HoldContainer>
    
    </>
  )
}

export default Hold