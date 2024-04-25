import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color:transparent;
      cursor: pointer;
      border:none;

      //.close-outline {
       // display: none;
      //}
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

  .close-outline{
    display: none;
  }


    .cart-trolly--link {
      position: relative;

      .cart-troll{
        position: relative;
        font-size:3.2rem;

      }
      .cart-total-item{
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color:#000;
        color: #000;
        border-radius:50%;
        display: grid;
        place-items:center;
        top: -68%;
        left: 58%;
        font-size:1.2rem;
        background-color:${({theme})=> theme.colors.helper};
      }

    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      /* hide the original nav menu  */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 100px;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        //align-content: center;
        flex-direction: column;
        //text-align: center;
        align-items:center;

        transform: translateX(100%);

        visibility: hidden;
        opacity: 0;
        transform: all 3s linear;

        li {
          .navbar-link {
            //&:link,
            //&:visited 
            //{
              font-size: 4.2rem;
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
    //}

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 5%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin:right;
        transition: all 3s linear;
      }
    }
    
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/productitems">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link cart-trolly--link" 
              onClick={() => setOpenMenu(false)}
              to="/cart">
              <IoCartOutline className="cart-trolly" />
              <span className="cart-total-item">
              10
                 
              </span>
          </NavLink>
        </li>
        </ul>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;