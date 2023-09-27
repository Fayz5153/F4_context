import React from 'react'
import { Link } from 'react-router-dom'
import twitter from "./twitter.png"
import facebook from "./facebook.png"
import linkedin from "./linkedin.png"
import lock from "./lock.png"
import mail from "./mail.png"
import user from "./user.png"

const Page1 = () => {
  return (
    <div className='home'>
      <div className="page">
        <div className="left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us plase login with your personal info</p>
            <Link to={"/login"}>SIGN IN</Link>
        </div>
        <div className="right">
            <h1>Create Account</h1>
            <div className='social'>
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <p>or use your email for registration</p>
            <div className="inp">
                <img src={user} alt="" />
                <input type="text" placeholder='Login'/>
            </div>
            <div className="inp">
                <img src={mail} alt="" />
                <input type="text" placeholder='Email'/>
            </div>
            <div className="inp">
                <img src={lock} alt="" />
                <input type="text" placeholder='Password'/>
            </div>
            <button>SIGN UP</button>
        </div>
      </div>
    </div>
  )
}

export default Page1
