import React from "react"
import "./styles.css"


export default function Glossary (props){
 
    return(
        //Templete how to display Data in glossary 
        <div>    
            <h1>Glossary</h1>
            <h2>{props.Title}</h2>
            <img src={props.Image} alt="Image" />
            <p>{props.Text}</p>
        </div>
    )
}

