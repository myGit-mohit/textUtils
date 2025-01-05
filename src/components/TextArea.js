import React, {useState} from 'react'
import App from '../App';
import Alert from './Alert';
export default function TextArea(props) {
    const [text, setText] = useState(""); 
  //  text ="vjovja"   wrong way to change the state.
  // setText("vnsjvosjv")   right way to change the state.
    const handlechange = (event)=>{
        console.log(text);
        setText(event.target.value);
    }
const handleUpClick = ()=>{
    console.log ('handling btn click event ')
let upper_text = text.toUpperCase();
setText(upper_text);
props.showAlert("text set to Upper case", "success");
}
const handleLoClick = ()=>{
    let lower_text = text.toLowerCase();
setText(lower_text);
props.showAlert("text set to Lower case", "success");
}
const handleClearText = ()=>{
setText("");
props.showAlert("text is cleared", "success");
}

return (
<>
    
<div className= "container" style={{backgroundColor: props.mode==='light'? 'white' : '#043743', color: props.mode==='light'? 'black': 'white'}} >
<h1>{props.heading}</h1>
  
<textarea className="form-control" id="mybox" placeholder='Type or paste your text here' value={text} onChange={handlechange} rows="8"></textarea>
 
</div>
<div className="container my-2">
<button type="button" onClick={handleUpClick} class="btn btn-primary mx-2" >Upper case</button>
<button type="button" onClick={handleLoClick} class="btn btn-primary mx-2">Lower case</button>
<button type="button" onClick={handleClearText} class="btn btn-primary mx-2">Clear text</button>
</div>

<div className= "container my-2" style={{backgroundColor: props.mode==='light'? 'white' : '#043743', color: props.mode==='light'? 'black': 'white'}} >
    <h2> Your Text Summary Here</h2>
 
    <p> <b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> characters</p>
    <p> <b>{text.split(" ").length*.008}</b> minutes read</p> 
</div>
<div className= "container my-2" style={{backgroundColor: props.mode === 'light' ? 'white' : '#043743', color: props.mode === 'light' ? 'black' : 'white'}} >
    <h2>Text Preview</h2>
    <p> {text} </p>
</div>

</>
)
}
