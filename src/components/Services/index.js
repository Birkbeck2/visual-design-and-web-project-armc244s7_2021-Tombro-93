import React from 'react'
import Icon1 from '../../images/air-force-01.jpg'
import Icon2 from '../../images/shoe-navy-01.jpg'
import Icon3 from '../../images/converse-01.jpg'
import 
{ServicesContainer,
  ServicesWrapper,

  ServicesImage,

} from './ServiceElements'

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesWrapper>
            <ServicesImage src={Icon1}/>
            <ServicesImage src={Icon2}/>
            <ServicesImage src={Icon3}/>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
