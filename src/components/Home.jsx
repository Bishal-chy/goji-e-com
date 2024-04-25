
import { useEffect } from 'react';
import {useGlobalContext}  from '../Context';
import HeroSection from './HeroSection';
import Contact from './Contact';
import styled from 'styled-components';
import Trusted from './Trusted';
import Services from './Services';
import Product from './Product';
import FeatureProducts from './FeatureProducts';




const home = () => {
  /*const data = {
    name:"goji", 
    image:"./images/heroimg.jpeg",
  }*/

  const {updateHomePage} = useGlobalContext();

  useEffect(()=> updateHomePage(),[]);
  return (
   <Wrapper>
   
   <HeroSection  />
   <FeatureProducts />
   <Services />
   <Trusted />
   </Wrapper>
  );
};

 const Wrapper = styled.section`
 
 //background-color:${({theme})=> theme.colors.bg};
 
 
 `;

export default home;
