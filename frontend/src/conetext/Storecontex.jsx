import { createContext } from "react";
import {food_list} from "../assets/assets"

export const storecontext = createContext(null)


const Storecontextprovider = (props)=>{

    const contextValue={
        food_list
    }

    return(
        <storecontext.Provider value={contextValue}>
            {props.children}
        </storecontext.Provider>
    )
}

export default Storecontextprovider