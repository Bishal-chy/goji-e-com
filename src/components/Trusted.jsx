import React from 'react'
import styled from 'styled-components';

const Trusted = () => {
  return (
   <Wrapper className='company-section'>
   <div className='container'>
   <h3>
    Trusted By 100+ Companies
   </h3>
   <div className='company-section-slider'>
   {/* 1st img*/}
   <div className='slide'>
   <img src='/public/images/new1.png' alt='trusted-brands' />
    </div>
    <div className='slide'>
   <img src='/public/images/new2.png' alt='trusted-brands' />
    </div>
    <div className='slide'>
   <img src='/public/images/new3.png' alt='trusted-brands' />
    </div>
    <div className='slide'>
   <img src='/public/images/new4.png' alt='trusted-brands' />
    </div>
    <div className='slide'>
   <img src='/public/images/new5.png' alt='trusted-brands' />
    </div>
   </div>

   </div>

   </Wrapper>
  )
};

const Wrapper = styled.section`

padding: 9rem 0;
background-color:${({theme})=> theme.colors.bg};

.company-section{
    padding: 12rem 0 0 0;
}

h3{
    text-align: center;
    text-transform:capitalize;
    color:${({theme})=>theme.colors.text};
    font-size: 2rem;
    font-weight:bold;
}

img{
    min-width:10rem;
    height: 10rem;
}

.company-section-slider{
    margin-top:3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction:row;
}




`;



export default Trusted;
