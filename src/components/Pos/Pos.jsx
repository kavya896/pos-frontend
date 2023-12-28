import React from "react";
import "./Pos.css"
import { Typography } from "@mui/material";
const Pos = () =>{
    return(
        <div className="pos">
            <div>
                <div className="headers">
                <div>
                    <div>8</div>
                    <div>9</div>
                </div>
                </div>
                <div className="tables">
                   
                        <div className="running-orders">
                            <div>
                                <Typography variant="h5">Running Orders</Typography>
                            </div>
                        </div>
                        <div className="takeout">2</div>
                        <div className="categories">3</div>
                   
                </div>
            </div>
        </div>
    )
}

export default Pos