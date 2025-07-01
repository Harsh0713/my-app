
import Alert from './Alert';
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
    <Navbar title="Amazon" link="Links" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
   
    
     <TextForm showAlert={showAlert} heading="Enter the text to modify" mode={mode} />
     {/* <About/> */}

    </>
  );
}

export default App;
