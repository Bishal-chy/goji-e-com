import React from 'react'
import styled from 'styled-components';
import Products from './Products';

const GridView = (products) => {
  return (
    
    <Wrapper className='section'>
    <div className='container  grid grid-cols-3'>
    {
        products.map((currElem)=>{
            return <Products key={currElem.id} {...currElem} />

        })
    }

    </div>

    </Wrapper>
  )
};

const Wrapper = styled.section`
`;


export default GridView
