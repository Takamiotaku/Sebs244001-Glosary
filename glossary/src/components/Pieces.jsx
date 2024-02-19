import React from "react";
import './styles.css'
import Glossary from "./Glossary";


export default function Pieces(props){
    return(
        <div className="Piece">
            <input type="button" value={props.Title} onClick={props.Fun} />
        </div>
    )
}