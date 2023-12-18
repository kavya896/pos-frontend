import React from "react";
import "../IngredientPage/IngredientUnit.css"
import { Typography, Button } from "@mui/material";

const IngredientCategory = ()=>{
    return(
        <div className="unitpage">
            <div className="addunit">
                <Typography variant="h5">Add Ingredient Category</Typography>
                <div className="description">
                    <div className="unitname">
                        <label>Category Name</label>
                         <br></br>
                         <input type="text" placeholder="Category Name" required />
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

export default IngredientCategory