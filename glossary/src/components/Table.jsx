import React from "react";
import './styles.css'
import Pieces from "./Pieces";
import Informations from "./Informations";
import Glossary from "./Glossary";
import { useState } from "react";



export default function Table({ onInfoSelect }){

    const [selectedInfo, setSelectedInfo] = useState(null);
    const Variable = new Informations("Variable","linktoimage","The variable is a piece of code that holds the data")
    const Function = new Informations("Function","linkToImage","Function is a piece of code that you can save and run later")
    
    
    
    return (
        <div>
            <p>Table</p>
            <Pieces Title={Variable.Title} Fun={() => onInfoSelect(Variable)}/>
            <Pieces Title={Function.Title} Fun={() => onInfoSelect(Function)}/>
        </div>

    )

}
