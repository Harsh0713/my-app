
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    //Two ways of using the REACT APP
    //Functional Based : React Hooks(imp)
    //Class Based Components
    // let greet = <b>Good Morning</b>;
    const [mode, setMode] = useState('light');
    const [alert, setAlert]= useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type,
      })

      setTimeout(()=>{
        setAlert(null);
      },2000)
    }



  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode turned on", "success")
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode turned on", "success")
    }
  }

    //Props: properties
  return (
    
    <>
  {/* home/user/account (exisitng)
  hone/user/account/user1 (not existing) */}
    
    
    
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={ 
      <>
      <Navbar title="Amazon" link="Links" mode={mode} toggleMode={toggleMode}/>
       <TextForm showAlert={showAlert} heading="Enter the text to modify" mode={mode} />
   
      
      
      </>
      
      }/>
      <Route exact path='/About' element={ 

        <>
        <Navbar title="Amazon" link="Links" mode={mode} toggleMode={toggleMode}/>
        <About/> 
        </>
        }/>
     

    </Routes>
    
    
    </BrowserRouter>
    {/* <Navbar title="Amazon" link="Links" mode={mode} toggleMode={toggleMode}/> */}
     {/* <Alert alert={alert}/> */}
   
    
     {/* <TextForm showAlert={showAlert} heading="Enter the text to modify" mode={mode} /> */} 
     {/* <About/> */}
      <Alert alert={alert}/>

    </>
  );
}

export default App;
