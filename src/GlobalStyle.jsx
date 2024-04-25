import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin :0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}
html {
    font-size: 62.5%;
     /* scrool-behavior smooth;*/
    /* 1rem = 10px */
    overflow:auto;
    overflow-x:hidden;
}
::-webkit-scrollbar{
    width: 1.5rem;
}
::-webkit-scrollbar-track{
    background-color:rgb(24 24 29);
}

::-webkit-scrollbar-thumb{
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip:content-box;
}

h1{
    color: ${({theme}) =>  theme.colors.heading};
    font-size: 6rem;
    font-weight:900;
}

h2{
    color: ${({theme}) => theme.colors.heading};
    font-size: 4.4rem;
    font-weight:300;
    white-space: normal;
    text-align: center;
}

h3{
    color: ${({theme}) => theme.colors.text};
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight:400;
}

a{
    text-decoration: none;

}

li{
    list-style: none;
}

.container{
    max-width: 120rem;
    margin: 0 auto;

}

.grid{
    display: grid;
    gap: 9rem;
    
}

.grid-two-column{
    grid-template-columns: repeat(2,1fr);

}

.grid-third-column{
    grid-template-columns: repeat(3,1fr);

}

.grid-fourth-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

.common-heading{
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;

}

input,textarea{
    max-width: 50rem;
    color: ${({theme})=> theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({theme})=> theme.colors.border};
    text-transform: uppercase;
    box-shadow:${({theme})=> theme.colors.shadowSupport};
}

input[type = "submit"]{
    max-width: 16rem;
    margin-top:2rem;
    background-color: ${({theme})=> theme.colors.btn};
    color: ${({theme})=> theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style:solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    border:${({theme})=> theme.colors.btn} ;

    &:hover{
        color:${({theme})=> theme.colors. btn};
        background-color:${({theme})=> theme.colors.white};
        transition: all 0.3s ;
        transform: scale(0.96);
    }
}

//998px

@media (max-width:${({theme})=>theme.media.tab}) {
    .container{
        padding:0 3.2rem;
    }


.grid-cols-3{
    grid-template-columns: 1fr 1fr;

    
}
}
@media (max-width:${({theme})=>theme.media.mobile}) {


  html{
    font-size: 50%;
    
  }
   

.grid{
    gap: 3.2rem;

    
}

.grid-cols-2, .grid-cols-3, .grid-cols-4, .grid-two-column{
    grid-template-columns:1fr;
}
}



`;