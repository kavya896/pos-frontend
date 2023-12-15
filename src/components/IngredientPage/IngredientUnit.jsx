import React from "react";
import "./IngredientUnit.css"
import { Typography, Button } from "@mui/material";
const UnitPage = () => {
    return (
        <div className="unitpage">
            <div className="addunit">
                <Typography variant="h5">Add Unit</Typography>
                <div className="description">
                    <div className="unitname">
                        <label>Unit Name</label>
                         <br></br>
                         <input type="text" placeholder="Unit Name" required />
                    </div>
                    <div className="unitdescription">
                        <label>Description</label>
                        <br></br>
                        <input type="text" placeholder="Description" required />
                    </div>
                    <div className="buttonstyling">
                    <Button style={{backgroundColor: "rgb(115, 79, 223)",color:"white",width:"200px",marginRight:"20px"}}>Submit</Button>
                    <Button style={{backgroundColor: "rgb(115, 79, 223)",color:"white",width:"200px"}}>Back</Button>
                </div>
                    </div>
                
            </div>
        </div>
    )
}

export default UnitPage