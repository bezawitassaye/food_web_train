import React, { useState } from 'react'
import "./Loginpage.css"
import { assets } from '../../assets/assets'
const Loginpage = ({setchowLogin}) => {
    const [curstate,setcurstate] = useState("Login")
  return (
    <div className='login-popup'>
        <form action="" className='login-popup-center'>
            <div className="login-popup-title">
                <h2>{curstate}</h2>
                <img onClick={()=>setchowLogin(false)} src={assets.cross_icon} alt=''/>
            </div>

            <div className='login-popup-inputs'>
                {curstate==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Your password' required />
            </div>
            <button>{curstate==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox"  required/>
                <p>By continuing i agree to the terms of use & privacy</p>
            </div>
            {
                curstate === "Login"?
                <p>Create new account <span onClick={()=>setcurstate("Sign Up")}>Click here</span></p>:
                <p>Already have an account <span onClick={()=>setcurstate("Login")}>Login here</span></p>
            }
        </form>
      
    </div>
  )
}

export default Loginpage
