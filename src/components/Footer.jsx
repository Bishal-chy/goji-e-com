import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { FaDiscord } from "react-icons/fa6";
import { FaDiagnoses, FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { Data } from 'autoprefixer';




const Footer = () => {
  return (
    <Wrapper>
    <section className='contact-short-form'>
    <div className='grid grid-cols-2'>
    <div>
    <h3>
     Ready to get started
    </h3>
    <h3>
      Talk to us today
    </h3>
    </div>
    <div className='contact-short-btn'>
      <NavLink to ="/" >
       <Button>Get Started</Button>
      </NavLink>
    </div>

    </div>

    </section>

    {/* footer section*/}

    <footer >
      <div className='container grid grid-cols-4'>
      {/*first column*/}
      <div className='footer-about-section'>
      <h3>Goji Store</h3>
      <p>Welcome to Goji store where you can get anything you want related to Fashion, cosmetic, grocery etc. </p>
      </div>
    
      {/* 2nd column*/}
     
      <div className='footer-subscribe'>
      <h3>subscribe to get important updates</h3>
      <form action='#' method=''>
        <input type='email' required  autoComplete='off' placeholder='email'/>
        <input type='submit' value='Subscribe' className='sub-btn' />

      </form>
      </div>

      {/* 3rd column */}

      <div className='footer-social-link'>
      <h3>Follow Us</h3>
      <div className='footer-social-icons'>
      <div>
      <FaDiscord className='icons' />
      </div>
      <div>
      <FaInstagramSquare  className='icons'/>

      </div>
      <div>
      <a href='#'>
      <CiFacebook  className='icons'/>
      </a>

      </div>

      </div>
         
      </div>

      {/* fourth column*/}

      <div className='footer-contact'>
      <h3>Call Us</h3>
      <h3>+977-9811988921</h3>

      </div>


      </div>
      {/* copy right section*/}
      <div className='footer-copyright-section'>
      <hr/>
      <div className='container grid grid-cols-2'>
      <p>
        @{new Date().getFullYear()} Goji Store. All Rights Reserved
      </p>
      <div>
        <p>
          PRIVACY POLICY
        </p>
        <p>
          TERMS & CONDITIONS
        </p>
      </div>

      </div>

      </div>
    </footer>
    </Wrapper>
  )
};
const Wrapper = styled.section`

.contact-short-form{
  max-width:84vw;
  margin:auto;
  padding: 5rem 10rem;
  background-color: ${({theme})=> theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({theme})=> theme.colors.shadowSupport};
  transform: translateY(50%);
}


.contact-short-btn {
    justify-self:end;
    align-self:center;
  }


footer{
  padding: 14rem 0 9rem 0;
  background-color:${({theme})=> theme.colors.footer_bg};
  margin-bottom:0;

  h3{
    color: ${({theme})=> theme.colors.hr};
    margin-bottom:2.4rem;
  }

  p{
    color: ${({theme})=> theme.colors.white};
  }
  
  .footer-social-icons{
    display: flex;
    gap: 2rem;

  div{
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid ${({theme})=> theme.colors.white};

    .icons{
      color: ${({theme})=> theme.colors.white};
      font-size: 2.4rem;
      position:relative;
      cursor: pointer;
    }
  }

  }
  .footer-copyright-section{
    padding-top:9rem;

    hr{
      margin-bottom:2rem;
      color:${({theme})=> theme.colors.hr};
      height: 0.1px;

    }
  }
}


@media (max-width:${({theme})=>theme.media.mobile}) {
  .contact-short-form{
    max-width:95vw;
    padding: 2rem ;
    display: flex;
    justify-content: center;
    align-items: center;

    .contact-short-btn{
      text-align: center;
      justify-self:start;
      
    }
  }
   footer .footer-copyright-section {
    padding-top:3.2rem;
   }
  
  
    
}

`;


export default Footer;
