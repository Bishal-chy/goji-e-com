// create a contextAPI : (context is basically  a warehouse where all data are stored)
// provider :(provider get the data to provide the consumer)
//consumer:means a component /usecontext hook to overcome the APIcontext hook consumer.

import React, { useContext, useEffect } from "react";
import { useReducer } from "react";
import reducer from "./Reducer";
import axios from "axios";


 const AppContext = React.createContext();

const API = 'https://api.pujakaitem.com/api/products';
const intialState = {
    isloading:false,
    isError:false,
   // name:"",
    //image:"",
   //services: [],
    featureProducts:[],
    products:[],
    isSingleLoading: false,
    singleproduct : {},
};
 

const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer,intialState);

const updateHomePage = () =>{
    return dispatch({
            type: "HOME_UPADTE",
            payload: {
                name:"goji",
                image:"../public/images/heroimg new1.png",
            

            },
        }
    );
};

const updateAboutPage = () =>{
    return dispatch(
        {
            type: "ABOUT_UPADTE",
            payload: {
                name:"about us",
                image:"../public/images/heroimg new2.png",

        },
});
};
// to get the API data
// async error handling

const getServices = async (url) =>{
    dispatch({type: "SET_LOADING"});
 try{
    {/* using Fetch to call the API
    //const res = await fetch(url);
 //const data = await res.json();*/}
    const res = await axios.get(url);
    const data = await res.data;
    
    dispatch({type:"GET_SERVICES", payload:data});
    await new Promise((resolve)=>setTimeout(resolve,1000));
 }catch(error){
    //console.log(error);
    dispatch({type:"SERVICES_ERROR"});
 }
};

{/* my 2nd API call for Single product */}

const  getSingleProduct = async (url) =>{
    dispatch({type: "SET_SINGLE_LOADING"});
    try{
        const res = await axios.get(url);
        const singleproduct = await res.data;
        dispatch({type:"GET_SINGLE_PRODUCT", payload:singleproduct});

    }catch (error){
        dispatch({type:"SINGLE_ERROR"});

    }

}





// To call the API 
// useEffect use to call the function

useEffect(()=>{
    getServices(API);
},[]);
 
    return (<AppContext.Provider value={{...state,updateHomePage,updateAboutPage,getSingleProduct}}>
    {children}

    </AppContext.Provider>
);
    };

// global custom hook create

const useGlobalContext = () => {
    return useContext(AppContext);
};

export  { AppContext, AppProvider, useGlobalContext};




