import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import "./HomePage.css"
const HomePage = () =>{
    return(
        <div>
            <div className="bar">
            <div className="sidebar">
            <HomeOutlinedIcon/>
            </div>
            <div className="mainbar">
            2
            </div>
            <div className="centerbar">
            3
            </div>
          
           
        </div>
        <div className="footerbar">
            4
           </div>
        </div>
        
    )
}

export default HomePage