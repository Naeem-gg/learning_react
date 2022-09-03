import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text herre");
    const toLower = ()=>{
        // let newText = text.toLowerCase;
        console.log(text.toLowerCase());
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
    <div id="emailHelp" className="form-text">Convert your text to lower case with one click</div>
  </div>
  
  <button className="btn btn-primary"  onClick={toLower}>To Lower case</button>

    </div>
  )
}
