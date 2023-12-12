import axios from "axios"


export const login = (email,password) =>async(dispatch)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const data = await axios.post("/api",{email,password},config)
        console.log(data)
    }catch(err){
        console.log(err)
    }
}