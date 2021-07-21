import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import TopSection from '../components/LandingTopSection'
import Services from '../components/Services'
import InfoSection from '../components/infoSection'
import { mainObjOne, mainObjTwo } from '../components/infoSection/Data';
import Footer from '../components/Footer'



const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <TopSection />
      <Services />
      <InfoSection {...mainObjOne}/>
      <InfoSection {...mainObjTwo}/>
      <Footer/>
    </>
  )
};

export default Home

