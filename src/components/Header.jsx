import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src='https://picsum.photos/id/20/50/50' alt='logo' className='logo' />
        </NavLink> 
        <Navbar />
   </MainHeader>
  );
};

const MainHeader = styled.header`

 padding:0 4.8rem;
 height: 10rem;
 background-color: ${({theme}) => theme.colors.bg};
 display: flex;
 justify-content: space-between;
 align-items: center;

 .logo{
  height:3rem;
  // responsive code 
  max-width: 100%;
   }
`;



export default Header;
