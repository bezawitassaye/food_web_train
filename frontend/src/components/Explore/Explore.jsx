import React from 'react'
import "./Explore.css"
import {menu_list} from "../../assets/assets"
const Explore = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore consequuntur hic accusamus labore corporis quo, eveniet, iure numquam facilis sunt natus pariatur suscipit quidem fugiat obcaecati nam alias dignissimos voluptatum!</p>
         <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div 
                    onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)}
                    className='explore-menu-list-item'>
                        <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                
                )
            })}

         </div>
         <hr/>
    </div>
  )
}

export default Explore
