import React from "react"
import "./styles.css"


export default function Glossary (props){
    function handleInput(e){
        props.info.updateAnswer(e.target.value);
    };
    function handleConfirmClick() {
        const isCorrect = props.info.Check(); // Call the Check method on the info object
        alert(isCorrect ? "Correct answer!" : "Incorrect answer, try again!"); // Provide feedback
    }
 
    return(
        //Templete how to display Data in glossary 
        <div>    
            <h1>Glossary</h1>
            <h2>{props.Title}</h2>
            <img src={props.Image} alt="Image" />
            <p>{props.Text}</p>
            <h1>{props.Question}</h1>
            <input type="text" onChange={handleInput}/>
            <input type="button" value="Confirm" onClick={handleConfirmClick} />

        </div>
    )
}

