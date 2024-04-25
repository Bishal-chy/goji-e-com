import React   from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import {useGlobalContext} from "../Context";


const HeroSection = () => {
    const {name,image } = useGlobalContext();
  return (
     <Wrapper>
     <div className='container grid grid-two-column '>
     <div className='section-hero-data'>
     <p className='hero-top-text'>Wellcome to</p>
     <h1 className='hero-heading'>{name}</h1>
     <p className='hero-paragraph'>Google Fonts {name} makes it easy to bring personality and performance to 
     your websites and products. Our robust catalog of open-source fonts and icons makes it easy 
     to integrate expressive type and icons seamlessly — no matter where you are in
      the world.</p>
      <Button className= "btn hireme-btn">
     <NavLink to ="/contact">Explore</NavLink>

     </Button>

     </div>
    
     {/* for hero image */}
     <div className='section-hero-image'>
      <picture>
        <img src={image} alt='hero img' className='hero-img'/>
      </picture>
     
     </div>

     </div>
     </Wrapper>
  )
};

export default HeroSection;

const Wrapper = styled.section`

padding: 9rem 0;

.section-hero-data{
 display: flex;
 flex-direction:column;
 justify-content:center;
}

.btn{
    max-width: 16rem;
}

.hero-top-text{
    text-transform: uppercase;
    font-weight:500;
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.helper};
}

.hero-heading{
    text-transform:uppercase;
    font-size:6.4rem;
}

.hero-paragraph{
    margin-top:1.5rem;
    margin-bottom: 3.4rem;
    max-width:60rem;
    font-weight:300;
    font-size: 1.4rem;
}

.section-hero-image{
    display: flex;
    justify-content: center;
    align-items:  center;
}

picture{
    text-align:center;
}

.hero-img{
    max-width:80%;
}
  

@media (max-width:${({theme})=>theme.media.mobile}) {
    .grid{
        gap: 7.2rem;
    }

}


`;


