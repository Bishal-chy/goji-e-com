import React, { useState } from 'react'
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa6";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';

const AddToCart = ({product}) => {
    const {id,colors,stock} = product;
    const [color,setcolor] = useState(colors[0]);

    const [amount,setamount] = useState(1);

    const setDecrease = () =>{
        amount >1 ? setamount(amount-1):setamount(1);
    }
    const setIncrease = () =>{
        amount<stock ? setamount(amount + 1): setamount(stock);
    }
  return (
    <Wrapper>
        <div className='colors'>
        <p>
            color:{
                colors.map((curColor,index)=>{

                    return(
                        <button key={index} style={{backgroundColor: curColor}}
                        className={ color === curColor ? "btnStyle active" : "btnStyle"}
                        onClick={()=> setcolor(curColor)}>
                            {color === curColor ? <FaCheck  className='checkStyle'/>:null}
                        </button>
                    );


                })
            }
        </p>

        </div>
        {/* Add to cart*/}
        <CartAmountToggle 
            amount={amount}
            setDecrease ={setDecrease}
            setIncrease ={setIncrease}
        />
        <NavLink to = "/cart" >
        <Button className='btn'>Add To Cart</Button>

        </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`

.colors p{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.btnStyle{
    width: 2rem;
    height: 2rem;
    background-color:#000;
    border-radius:50%;
    margin-left:1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }

}
.active{
    opacity:1 ;
}

.checkStyle{
    font-size: 1rem;
    color: #fff;
    margin-left:0.5rem;
}

/* add to card section*/
.amount-toggle{
    margin-top:3rem;
    margin-bottom:1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

}

.amount-style{
    font-size: 2.4rem;
    color: ${({theme})=> theme.colors.btn};
}


`;


export default AddToCart
