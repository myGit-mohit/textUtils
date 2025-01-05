
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import { useState } from 'react';
import React from "react";

function App() {
const [alert, setAlert] =useState (null);
const showAlert =(message, type)=> {

  setAlert({
msg: message,
type: type

})
setTimeout(() => {
setAlert(null)
}, 2000);
}

const [mode, setMode] = useState('light');

const changeMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#043743';
    showAlert("dark mode is bad", "danger")
    document.title = 'textUtils in dark mode';
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode is fair", "success")
    document.title = 'textUtils in light mode';
  }
    

};

return (
  
  <>

<Navbar title="textUtils" aboutText="About Us" mode={mode} changeMode={changeMode} />
<Alert alert={alert}/>

<div class="container my-3" >

{/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}    
          
      <TextArea heading="Enter the text here" mode= {mode} showAlert={showAlert} />


{/* <About/> */}
</div>
</>
);
}

export default App;
