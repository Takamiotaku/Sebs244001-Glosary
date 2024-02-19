import React from "react";
import './styles.css'

export default function Pieces(props){
    return(
        // Template for the button
        <div className="Piece">
            <input type="button" value={props.Title} onClick={props.Fun} />
        </div>
    )
}