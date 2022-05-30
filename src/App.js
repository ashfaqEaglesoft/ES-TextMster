import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');//eable dark mode

  const togleMode = () =>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='#2a4162'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
    <Navbar title="ES-TextMaster" mode={mode} togleMode={togleMode} about="About"/>

    <div className="container my-3">
    <TextForm mode={mode} />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
