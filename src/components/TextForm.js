import React, { useState } from "react";
import PropTypes from 'prop-types';
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('uppercase was clicked');
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text Convert into uppercase sucessfuly','success');
  };
  const handleLoClick = () => {
    // console.log('uppercase was clicked');
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text Convert into Lowercase sucessfuly','success');
  };
  const handleOnChange = (event) => {
    // console.log('handleOnChange');
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText('new text')
  return (
    <div>
      <div className="container" style={{color:props.mode==='dark'?'white':'gray'}}>
      <div className="mb-3">
        <h1>Enter your Text Below to analyze</h1>
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="mybox"
          rows="7"
          style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'gray'}}></textarea>
        <div className="my-3 btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </div>
        <div className="my-3 btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </div>
      </div>
      <div className="container">
          <h2>Your text summary is here</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{text.split(" ").length*0.008} Minutes required to read</p>
          <h3>Prview</h3>
          <p>{text}</p>
      </div>
    </div>
    </div>
  );
}
