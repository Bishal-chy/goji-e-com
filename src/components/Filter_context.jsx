import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "../Context";
import reducer from "./FilterReducer";

/*const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
};
export const FilterContextProvider = ({children}) =>{

    const { products } = useGlobalContext();
    console.log(products);

    const [state, dispatch] = useReducer(reducer,initialState);

    /* to set grid view*/
    /*const setGridView =()=>{
        return dispatch({type:"SET_GRID_VIEW"});
    };

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products});
    },[products]);

    return (<FilterContext.Provider value={{...state,setGridView}}>
        {children}
    </FilterContext.Provider>
    );

};

 export const useFilterContext = () =>{
    return useContext(FilterContext);

};*/

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  //sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useGlobalContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView,  }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
