import { createContext, useState } from "react";
import {food_list} from "../assets/assets"

export const storecontext = createContext(null)


const Storecontextprovider = (props)=>{
    const [cartitems,setcartitems]=useState({})

    const addtocart = (itemId)=>{
        if(!cartitems[itemId]){
            setcartitems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removefromcart = (itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue={
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart
    }

    return(
        <storecontext.Provider value={contextValue}>
            {props.children}
        </storecontext.Provider>
    )
}

export default Storecontextprovider