import React from 'react'
import Icon1 from '../../images/air-force-01.jpg'
import Icon2 from '../../images/shoe-navy-01.jpg'
import Icon3 from '../../images/converse-01.jpg'
import 
{ServicesContainer,
  ServicesWrapper,
ServicesImage,
ServiceLink1,
ServiceLink2
} from './ServiceElements'

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesWrapper>
          <ServiceLink1 to='/shop'>
          <ServicesImage alt="casual trainer" src={Icon1}/>
          </ServiceLink1>
          <ServiceLink1 alt="running shoe" to='/shop'>
            <ServicesImage src={Icon2}/>
          </ServiceLink1>
          <ServiceLink2 alt="converse sale image" to='/promotion'>
            <ServicesImage src={Icon3}/>
            </ServiceLink2>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
