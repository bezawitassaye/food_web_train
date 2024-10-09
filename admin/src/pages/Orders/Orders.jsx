import React from 'react'
import "./Orders.css"
import { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
import { useEffect } from 'react'
const Orders = () => {
  const backendurl="http://localhost:4000"
  const [orders,setorders]=useState([])
  const fetchallorders= async()=>{
    const response = await axios.post(backendurl+"/api/order/listoredrs")
    console.log(response)
    if(response.data.success){
      setorders(response.data.data)
    }else{
      toast.error("Error")
    }
  }
  useEffect(()=>{
    fetchallorders()
  },[])
  return (
    <div>
      Orders
      
    </div>
  )
}

export default Orders
