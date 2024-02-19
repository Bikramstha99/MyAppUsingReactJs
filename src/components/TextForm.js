import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("Handle OnChange CLicked");
        setText(event.target.value);
    } 
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    
    const clearText=()=>{
        let newText="";
        setText(newText);
    }
    const[text, setText]=useState('');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box"  rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary ms-2' onClick={handleLowClick}>Convert To LowerCase</button>
            <button className="btn btn-primary ms-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h1> Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length}</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}    
