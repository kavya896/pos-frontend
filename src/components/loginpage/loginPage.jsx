import React, { useEffect, useState } from "react";
import {Typography,Button} from "@mui/material"
import { login } from "../../Actions/login";
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
const LoginPage = () =>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (e) =>{
       e.preventDefault()
      const loggedIn = dispatch(login(email,password))
       if(loggedIn){
        navigate("/home")
        }
    }
    
    return(
        <div>
            <img src="https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png" alt="image"></img>
            <div>
                <form onSubmit={handleLogin}>
                    <Typography variant="h3">
                           LOGIN
                    </Typography>
                    <input type="email" placeholder="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="password" required value={password} onChange={(e)=>setPassword(e.target.value)}  />
                   <Button type="submit">Login</Button>
                   <Button>Forgot Password</Button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage