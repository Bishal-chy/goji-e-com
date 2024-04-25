import React from 'react'
import Home from "../src/components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';// BrowserRouter: for connecting with url, Routes:for declearing the routes, Route:define the route.
import About from './components/About';
import Contact from './components/Contact';
import Single from './components/Singleproducts';
import Cart from './components/Cart';
import Errorpage from './components/Errorpage';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Services from './components/Product';
import GoToTop from './components/GoToTop';
import Product from './components/Product';
import Productsitem from './components/Productsitem';



const theme ={
  //predefined colors
  colors:{
    heading:"rgb(24 24 29)",
    text:"rgb(24 24 29)",
    white:"#fff",
    bg: "rgb(249,249, 255)",
    black: "#212529",
    helper: "#8490ff",
    footer_bg: "rgb(17, 17, 60);",
    btn:" rgb(98, 84, 243)",
    hr: "#ffffff",
    gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252)",
    shadow: "rgba(0,0,0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    shadowSupport: "rgba(0,0,0, 0.16) 0px 1px 4px",
  },
  media:{ mobile: "768px", tab: "998px"  },

};


function App() {
  return (
   <ThemeProvider theme={theme}>
   <GlobalStyle />
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/about' element ={<About />} />
      <Route path='/service' element ={<Services />} />
      <Route path='/contact' element ={<Contact />} />
      <Route path='/singleproducts/:id' element ={<Single product />} />
      <Route path='/cart' element ={<Cart/>} />
      <Route path='/product' element ={<Product/>}/>
      <Route path='*' element ={<Errorpage />} />
      <Route path='/productitems' element={<Productsitem />}/>
      
    </Routes>
    <GoToTop />
    <Footer />
   </BrowserRouter>
   </ThemeProvider>
  )
}

export default App;

