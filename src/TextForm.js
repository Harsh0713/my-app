
//This is the "React functional Component" Shortcut: rfc+tabkey


import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upper case was clicked"+text)
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to Upper Case", "success")
        // setText("You clicked on handleupClick")
    }

    const handleDownClick=()=>{
        // console.log("Upper case was clicked"+text)
        let newText=text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to Lower Case", "warning")
        // setText("You clicked on handleupClick")
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
        console.log("On change")
    }

    const [text, setText]=useState("");
    
    // setText("New text");
    // console.log(text);

    const handleDelete=()=>{
      setText("");
      props.showAlert("Deleted the content", "danger")
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading} </h1>
     
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}
   style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white', color: props.mode==='dark' ? 'white' : 'black'}}></textarea>
</div>

    <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>UpperCase</button>
    <button className="btn btn-primary mx-3 my-3 " onClick={handleDownClick}>LowerCase</button>
    <button type="button" className="btn btn-secondary mx-4" onClick={handleDelete}>Delete Content</button>
    
    </div>
    <div className='container my-4' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element) => {
        return element.length!=0;

      }).length
      }{" "} 
      Words and {text.length} characters
      </p>
      <p>{0.008*text.split(" ").length} Minutes read </p>
    
    <h2>Preview</h2>
    <p>{text.length>0 ? text: "Enter the text to get your Preview"}</p>
    </div>
    </>
  )
}
