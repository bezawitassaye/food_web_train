import { createContext, useEffect, useState } from "react";
import {food_list} from "../assets/assets"
import axios from "axios";

export const storecontext = createContext(null)


const Storecontextprovider = (props)=>{
    const backendurl="http://localhost:4000";
    const [cartitems,setcartitems]=useState({})
    const [token,settoken]= useState("")
    const [food_list,setfoodlist] =useState([])

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
   
    const gettotalcartamount = ()=>{
        let toalamount =0
        for(const item in cartitems){
            if(cartitems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item)
                toalamount += itemInfo.price * cartitems[item]
            }
        }
        return toalamount
    }
   const fetchfoodlist = async()=>{
     const response = await axios.get(backendurl+"/api/food/list")
     setfoodlist(response.data.data)
   }
    useEffect(()=>{
       
        async function loaddata(){
            await fetchfoodlist()
            if(localStorage.getItem("token")){
                settoken(localStorage.getItem("token"))
            }
        } 
        loaddata()
    })
    const contextValue={
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart,
        gettotalcartamount,
        token,
        settoken
    }

    return(
        <storecontext.Provider value={contextValue}>
            {props.children}
        </storecontext.Provider>
    )
}

export default Storecontextprovider