import React, { useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ingredientsList } from "../../Actions/login";
import "./Listingredient.css"
import SearchIcon from '@mui/icons-material/Search';
import IosShareIcon from '@mui/icons-material/IosShare';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ListUnit = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ingredientsList())
    }, [dispatch])

    const { lists } = useSelector((state) => state.lists)
    console.log(lists, "dsaadc")

    return (
        <div className="unitpage">
            <div className="addunit">
                <Typography variant="h5">Unit</Typography>
                <div className="backgrd">
                <div className="backdrop">
                    <div className="entry">
                        Entries
                        <select name="entries" className="entries" >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        </div>
                        <div className="search">
                      
                        <input  placeholder="search here" style={{width:"145%"}} />
                        </div>
                        <div className="export">
                            
                        <Button style={{backgroundColor:"rgb(219, 219, 217)",color:"rgb(196, 196, 173)"}}><IosShareIcon/>Export<ArrowDropDownIcon/></Button>
                            
                        </div>
                        
                        
                    
                </div>
                <hr></hr>
                <div className="headings">
                <div className="sn">SN</div>
                   <div className="units">UNIT NAME</div>
                   <div className="des">DESCRIPTION</div>
                   <div className="action">ACTIONS </div>
                  
                   </div>
                   <hr></hr>
                   <div>
                    {lists && lists.map((list)=>{
                        return(
                            <div>
                            <div key={list._id}>
                                <div>sn</div>
                                <div>{list.name}</div>
                                <div>{list.description}</div>
                                <div>actions</div>
                            </div>
                            <hr></hr>
                            </div>
                        )
                    })}
                   </div>
                </div>
            </div>
        </div>
    )
}

export default ListUnit