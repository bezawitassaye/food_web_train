import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Explore from '../../components/Explore/Explore'
const Home = () => {
  const [category,setcategory]=useState("All")
  return (
    <div>
      <Header/>
      <Explore category={category} setcategory={setcategory}/>
    </div>
  )
}

export default Home
