import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case","success");
    }

    const handleOnChange=(event)=>{
        console.log("Handle OnChange CLicked");
        setText(event.target.value);
    } 

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case","success");
    }
    
    const clearText=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    
    const copyText=()=>{
        var text=document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const[text, setText]=useState('');
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
             color:props.mode==='dark'?'white':'black'} } id="my-box"  rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary ms-2' onClick={handleLowClick}>Convert To LowerCase</button>
            <button className="btn btn-primary ms-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary ms-2" onClick={copyText}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1> Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length}</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to Preview"}</p>
        </div>
        </>
    )
}    
