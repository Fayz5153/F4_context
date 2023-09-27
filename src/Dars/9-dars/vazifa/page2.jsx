import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import twitter from "./twitter.png"
import facebook from "./facebook.png"
import linkedin from "./linkedin.png"
import lock from "./lock.png"
import mail from "./mail.png"

const Page2 = () => {
    let navigate = useNavigate()
    let info1 = ["admin", "12345"]
    let info2 = ["user", "11111"]

    const [login, setLogin] = useState("")
    const [parol, setParol] = useState("")

    const handleLogin = () => {
        if (login === info1[0] && parol === info1[1]) {
            navigate("/admin")
        } else if(login === info2[0] && parol === info2[1]){
            navigate("/user")
        } else{
            alert("Login yoki Parol Xato")
        }
    }
  return (
    <div className='home'>
      <div className="page page2">
        <div className="right">
            <h1>Sign In to Your Account</h1>
            <div className='social'>
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <p>oe use your email account</p>
            <div className="inp">
                <img src={mail} alt="" />
                <input type="text" placeholder='Email' onChange={(e)=>setLogin(e.target.value)}/>
            </div>
            <div className="inp">
                <img src={lock} alt="" />
                <input type="text" placeholder='Password' onChange={(e)=>setParol(e.target.value)}/>
            </div>
            <a href="#">forgot password?</a>
            <button onClick={handleLogin}>SIGN IN</button>
        </div>
        <div className="left">
            <h1>Hello Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <Link to={"/"}>SIGN UP</Link>
        </div>
      </div>
    </div>
  )
}

export default Page2
