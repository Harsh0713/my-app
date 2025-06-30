
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
// import About from './About';
import React, {useState} from 'react';

function App() {
    //Two ways of using the REACT APP
    //Functional Based : React Hooks(imp)
    //Class Based Components
    // let greet = <b>Good Morning</b>;
    const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

    //Props: properties
  return (
    
    <>
    <Navbar title="Amazon" link="Links" mode={mode} toggleMode={toggleMode}/>
   
    
     <TextForm heading="Enter the text to modify" mode={mode}/>
     {/* <About/> */}

    </>
  );
}

export default App;
