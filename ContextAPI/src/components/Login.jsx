import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = ()=>{
        let userObj = {
            "email": email,
            "password": password
        };

        setUser(userObj);
    };

    return (
        <div>
            <h2>Login</h2>

            <input 
                type="email" 
                value={email}
                placeholder="Enter Your Email" 
                onChange={(e)=> setEmail(e.target.value) }/>

            <input 
                type="password" 
                value={password}
                placeholder="Enter Your Password" 
                onChange={(e)=> setPassword(e.target.value) }/>

            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login
