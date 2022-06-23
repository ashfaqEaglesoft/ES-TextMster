import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//eable dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const togleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#2a4162'
      showAlert('Dark Mode Enable sucessfuly','success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('White Mode Enable sucessfuly','success');
    }
  }

  return (
    <>
    <Navbar title="ES-TextMaster" mode={mode} togleMode={togleMode} about="About"/>
    <Alert alert={alert}/>
    <Router>
        <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <div className="container my-3">
                <TextForm showAlert={showAlert} mode={mode} />
                </div>
              </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
