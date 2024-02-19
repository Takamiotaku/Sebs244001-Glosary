import React from "react";
import './styles.css'
import Pieces from "./Pieces";
import Informations from "./Informations";
import VarImage from '../assets/Variable.png'
import FunImage from '../assets/Function.png'
import ConImage from '../assets/Const.png'


export default function Table({ onInfoSelect }){

    // Delecration fo concepts 
    const Variable = new Informations("Variable",VarImage,"The variable is a piece of code that holds the data","What is name of first variable","number","")
    const Function = new Informations("Function",FunImage,"Function is a piece of code that you can save and run later","","")
    const Constant = new Informations("Constant",ConImage,"Constant is like a variable but it dosen't change","","")
    
    
    return (
        <div>
            <p>Table</p>
            {/* Instance of a Button which changes the selected info to the choosen concept*/ }
            <Pieces Title={Variable.Title} Fun={() => onInfoSelect(Variable)}/>
            <Pieces Title={Function.Title} Fun={() => onInfoSelect(Function)}/>
            <Pieces Title={Constant.Title} Fun={() => onInfoSelect(Constant)}/>
        </div>

    )

}