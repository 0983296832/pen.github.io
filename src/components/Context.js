import React,{useState, useContext,useReducer,useEffect} from 'react'
import { data } from './data'
import reducer from './reducer'

const AppContext = React.createContext();

const initialState = {
    loading : false,
    total : 0,
    amount : 0,
    cartItem : [],
    productDefault: data.dataProduct
}

 const AppProvider = ({children}) =>{
    const [ showMenu, setShowMenu ] = useState(false);
    const[ clickValue, setclickValue ] = useState(0);
    const [ state, dispatch ] = useReducer( reducer , initialState)
    const [product,setProduct] = useState(  data.dataProduct )

    const handleClick = (index) =>{
        setclickValue(index)
    }

    const addToCart = (prod) =>{
        dispatch({type: "ADD_TO_CART", payload: prod})
    }

    const removeItem = (id) =>{
        dispatch({type: "REMOVE_ITEM", payload: id})
    }

    const increase = (id) =>{
        dispatch({type: "INCREASE", payload: id})
    }

    const decrease = (id) =>{
        dispatch({type: "DECREASE", payload: id})
    }

    useEffect(() => {
    dispatch({ type: "GET_TOTALS" })
  }, [state.cartItem])

    return (
        <AppContext.Provider value={{showMenu, setShowMenu,handleClick,...state,addToCart,product,removeItem,increase,decrease}}>
        {children}
        </AppContext.Provider>
    )
}

export const useGlobleContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }