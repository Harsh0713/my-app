
//This is the "React functional Component" Shortcut: rfc+tabkey


import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upper case was clicked"+text)
        setText("You clicked on handleupClick")
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
        console.log("On change")
    }

    const [text, setText]=useState("Enter text here");
    
    // setText("New text");
    // console.log(text);
  return (
    <div>
        <h1>{props.heading} </h1>
     
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>

    <button className="btn btn-primary" onClick={handleUpClick}>Convert</button>
    </div>
  )
}
