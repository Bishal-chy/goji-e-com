 const reducer = (state, action) =>{

   if (action.type === "SET_LOADING"){
        return{
            ...state,
            isloading:true,

        };
    }

    if (action.type==="GET_SERVICES"){
    const featureData = action.payload.filter((cuurElem) =>{
        return cuurElem.featured === true;
    });

    return {
        ...state,
        isloading:false,
        services: action.payload,
        featureProducts:featureData,
    }



    }

    if (action.type === "SERVICES_ERROR"){
        return{
            ...state,
            isloading:false,
            isError:true,

        };
    }

    

    

    if(action.type === "HOME_UPADTE")
    {
        return {
            ...state,
            name:action.payload.name,
            image:action.payload.image,

        };
    }

    if(action.type === "ABOUT_UPADTE")
    {
        return {
            ...state,
            name:action.payload.name,
            image:action.payload.image,

        };
    }
    if (action.type === "GET_SERVICES"){
        return {
        ...state,
        services : action.payload,
    };
}

   if (action.type === "SET_SINGLE_LOADING"){
    return{
        ...state,
        isSingleLoading: true,
    };
   }

   if (action.type === "GET_SINGLE_PRODUCT"){
    return{
        ...state,
        isSingleLoading: false,
        singleproduct :action.payload,
       
    }
   }

   if (action.typ === "SINGLE_ERROR" ){
    return{
        ...state,
        isSingleLoading: false,
        isError:true,
    }
   }

/*switch(action.type){
    case "SET_LOADING":

    return{
        ...state,
        isloading:true,

    };

    case "GET_SERVICES":
        const featureData = action.payload.filter((currElem) => {
         
            return currElem.featured === true;


        });

        return {
            ...state,
            isloading: false,
           // services: [],
            products:action.payload,
            featureProducts:featureData,
            
        };


    case  "SERVICES_ERROR":

    return{
        ...state,
        isloading:false,
        isError:true,

    };

   



    default:
        return state;

}*/

return state;



   
};
export default reducer;