import axios from "axios"


export const login = (email,password) =>async(dispatch)=>{
    try{
        console.log("entered")
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const data = await axios.post("/api",{email,password},config)
        dispatch({type:"LoginSuccess",payload:data})
        console.log(data)
    }catch(err){
        
        dispatch({type:"LoginFail",payload:err})
        console.log("error",err)
    }
}