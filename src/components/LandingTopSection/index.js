import React, {useState} from 'react';
import {Button} from '../ButtonElement';
import Video from '../../video/video.mp4';
import { 
  TopContainer, 
  TopBg, VideoBg, 
  TopContent, 
  TopH1, 
  TopBtnWrapper, 
  ArrowForward, 
  ArrowRight
} from './TopElements';


const TopSection = () => {
   const [hover, setHover]= useState(false)

   const onHover = () => {
     setHover(!hover)
   }

  return (
    <TopContainer>
      <TopBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </TopBg>
      <TopContent>
        <TopH1>Summer is here</TopH1>
        <TopBtnWrapper>
          <Button to='/shop' onMouseEnter={onHover}
           onMouseLeave={onHover} 
           primary='true'
           dark='false'
           >
            Browse the collection {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </TopBtnWrapper>
      </TopContent>
    </TopContainer>
  )
}

export default TopSection
