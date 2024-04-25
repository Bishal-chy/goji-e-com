import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from '../Context'

const About = () => {
  /*const data ={
    name:"about us",
    image:"./images/heroimg1.jpeg",

  }*/

  const {updateAboutPage} = useGlobalContext();
  useEffect(() => updateAboutPage(),[]);

  return (
  <HeroSection />
  )
}

export default About
