import React from "react";
import './styles.css'
import Pieces from "./Pieces";
import Informations from "./Informations";




export default function Table({ onInfoSelect }){

    // Delecration fo concepts 
    const Variable = new Informations("Variable","linktoimage","The variable is a piece of code that holds the data")
    const Function = new Informations("Function","linkToImage","Function is a piece of code that you can save and run later")
    const Constant = new Informations("Constant","Link to image","Constant is like a variable but it dosen't change")
    
    
    return (
        <div>
            <p>Table</p>
            {/* Instance of a Button which changes the selected info to the choosen concept*/ }
            <Pieces Title={Variable.Title} Fun={() => onInfoSelect(Variable)}/>
            <Pieces Title={Function.Title} Fun={() => onInfoSelect(Function)}/>
            <Pieces Title={Constant.Title} Fun={()=> onInfoSelect(Constant)}/>
        </div>

    )

}
