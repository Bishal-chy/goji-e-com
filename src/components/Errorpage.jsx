import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
  return (
    <Wrapper>
    <img src='../../public/images/errorimg1.jpeg' alt=''/>
    <NavLink to="/">
    <Button className='btn'>
    Go Back

    </Button>
    </NavLink>

    </Wrapper>
  )
}
const Wrapper = styled.section`

padding: 9rem 0;
display: flex;
justify-content: center;
flex-direction:column;
align-items:center;

.btn{
  margin-top:3rem;
  font-size:1.8rem;
}

`;


export default Errorpage
