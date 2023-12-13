import React, { useEffect, useState } from "react";
import {Typography,Button} from "@mui/material"
import { login } from "../../Actions/login";
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import "./loginPage.css"

const LoginPage = () =>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (e) =>{
       e.preventDefault()
      dispatch(login(email,password))
      
    }
    const {user} = useSelector((state)=>state.user)
    const {usererror}= useSelector((state)=>state.user)
    
    
    useEffect(()=>{
       if(user){
        navigate("/home")
       }else{
        if(usererror){
            alert("credentials doesn't match")
        }
       }
    },[user,usererror])
    
    return(
        <div className="loginPage">
            <img src="https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png" alt="image"></img>
            <Typography variant="h3" style={{textAlign:"center"}}>
                           LOGIN
            </Typography>
                <form className="loginForm" onSubmit={handleLogin}>
                    
                    <input type="email" placeholder="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="password" required value={password} onChange={(e)=>setPassword(e.target.value)}  />
                   <Button type="submit" style={{backgroundColor:"red"}}>Login</Button>
                   <Button style={{backgroundColor:"black"}}>Forgot Password</Button>
                </form>
            
        </div>
    )
}

export default LoginPage