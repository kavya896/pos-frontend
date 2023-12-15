import React from "react";
import "../HomePage/HomePage.css"
import { Button } from "@mui/material";
import "./ContactPage"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const ContactPage = ()=>{
    return(
        <div className="unitpage">
            <div className="centerbar">
           <div className="screens">
            <Button>Dashboard</Button>
           
            <Button>POS Screen</Button>
            <Button>Waiter Screen</Button>
            <Button>Kitchen Panel</Button>
            </div>
            <div className="center" id="center">
            
            <img src="https://ioready.io/info.ioready.io/images/chef.png" alt="image"></img>
            <div className="details">
                <p className="name" >Tikka Lounge</p>
                <div className="alignDetials">
                <p><PersonOutlinedIcon/></p>
                <p>Super Admin</p>
                </div>
                <div className="alignDetials">
                <p><PhoneInTalkOutlinedIcon/></p>
                <p>9347109030</p>
                </div>
                <div className="alignDetials" >
                <p><EmailOutlinedIcon/></p>
                <p>TikkaLounge@email.com</p>
                </div>
                </div>
                <div>

                </div>
            </div>

           </div>
        </div>
    )
}

export default ContactPage