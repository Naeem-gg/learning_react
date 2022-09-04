import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text herre");
  const toUper = ()=>{
    setText(text.toUpperCase());
  }
    const toLower = ()=>{
        // let newText = text.toLowerCase;
        setText(text.toLowerCase());
    }
    const toChange = (event)=>{
        console.log("state changed")
        setText(event.target.value);
    }
  return (
    <div className="container">

  <div className="mb-3">
    <h1>{props.heading}</h1>
    
    <textarea name="formtext" onChange={toChange} cols="130" rows="10" value={text}></textarea>
    <div id="emailHelp" className="form-text">Convert your text to lower & upper case with one click</div>
  </div>
  
  <button className="btn btn-primary"  onClick={toUper}>To Upper case</button>
  <button className="btn btn-primary mx-3"  onClick={toLower}>To Lower case</button>
  

    </div>
  )
}
