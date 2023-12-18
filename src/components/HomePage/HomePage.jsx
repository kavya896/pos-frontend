import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AdjustIcon from '@mui/icons-material/Adjust';
import "./HomePage.css"
import {useSelector} from "react-redux"
import { Button, Link, Typography, colors } from "@mui/material";



const HomePage = () =>{

    const user =JSON.parse(localStorage.getItem("userInfo"))
   

    return(
        <div className="main">
            <div className="bar">
            <div className="sidebar">
                <div>IR</div>
                <div><HomeOutlinedIcon/></div>
                <div> <SettingsOutlinedIcon/></div>
                <div><DescriptionOutlinedIcon/></div>
                <div> <PrintOutlinedIcon/></div>
                <div><DescriptionOutlinedIcon/></div>
                <div> <GridViewOutlinedIcon/></div>
                <div><LocalShippingOutlinedIcon/></div>
                <div> <LocalShippingOutlinedIcon/></div>
                <div><ShoppingCartOutlinedIcon/></div>
                <div> <Inventory2OutlinedIcon/></div>
                <div><DeleteOutlineOutlinedIcon/></div>
                <div><AttachMoneyOutlinedIcon/></div>
                <div><AttachMoneyOutlinedIcon/></div>
                <div><AttachMoneyOutlinedIcon/></div>
                 {/* when hover on side bar */}

            <div className="hoveronsidebar" >
               <div className="sidebarcontent">
                    <img src="https://ioready.io/info.ioready.io/images/64eddd725a4dd556617841db3fb97ca1.png" alt="image"></img>
                    
            <div className="alignDetials iconstyling"  >
                <p><HomeOutlinedIcon/></p>
                <p>Home</p>
            </div>
            <div className="alignDetials iconstyling"  >
                <p> <SettingsOutlinedIcon/></p>
                <p>Settings  </p>
            </div>
            <div className="alignDetials iconstyling "  >
                <p> <DescriptionOutlinedIcon/></p>
                <p> Item</p>
                
                
            </div>
            <div className="alignDetials iconstyling index"  >
                <div  >
                <a href="/unit">
                    
                    <p>Add Ingredient unit</p>
                </a>
                <a href="/listunit">
                    <p>List Ingredient unit</p>
                </a>
                <a href="/category">
                    <p>Add Ingredient Category</p>
                </a>
                <Link to="/home">
                    <p>List Ingredient Category</p>
                </Link>
                <Link to="/home">
                    <p>Add Ingredient</p>
                </Link>
                <Link to="/home">
                    <p>List Ingredient</p>
                </Link>
                </div>
               
            
            </div>
            <div className="alignDetials iconstyling"  >
                <p><PrintOutlinedIcon/></p>
                <p>Outlet Settings</p>
            </div>
            
            </div>

            </div>
            </div>
           
            <div className="mainbar">
            <div className="loginDetails">
            <div className="alignDetials" style={{color:"rgb(123, 130, 130)"}} >
                <a href="/pos" className="other">
                <FreeBreakfastOutlinedIcon/>
                 
                </a>
                <a href="/pos" className="other">
               POS
                 
                </a>
            </div>
            <div className="alignDetials" style={{color:"rgb(123, 130, 130)"}} >
                <p> <LocalShippingOutlinedIcon/></p>
                <p>Add Purchase</p>
            </div>
            <div className="alignDetials" style={{color:"rgb(123, 130, 130)"}}>
                <p> <LocalShippingOutlinedIcon/></p>
                <p>Today's Summary</p>
            </div>
            <div className="alignDetials"  style={{color:"rgb(123, 130, 130)"}}>
                <p> <CancelOutlinedIcon/></p>
                <p>Register Details</p>
            </div>
            <div className="alignDetials"  style={{color:"rgb(123, 130, 130)"}}>
                <p> <AccessTimeOutlinedIcon/></p>
                <p>Check-in/Check-out</p>
            </div>
            <div className="dynamic" style={{color:"rgb(188, 182, 182)"}}>
                
                <p >{ user[0].name}<br/>{user[0].role}</p>
                
                <div className="dynamicIcon">
                <PersonPinIcon/>
                </div>
            </div>
         
            </div>
            <div className="screens">
               <Button>Dashboard</Button>
           
            <Button>POS Screen</Button>
            <Button>Waiter Screen</Button>
            <Button>Kitchen Panel</Button>
            </div>
            </div>
            <div className="centerbar" id="center">
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
        <div className="footerbar">
        POS GENIUS POWERED BY IOREADY SDN- BHD
           </div>
        </div>
        
    )
}

export default HomePage