
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';

function App() {
    //Two ways of using the REACT APP
    //Functional Based : React Hooks(imp)
    //Class Based Components
    // let greet = <b>Good Morning</b>;

    //Props: properties
  return (
    
    <>
    <Navbar title="Amazon" link="Links"/>
   
    
     <TextForm heading="Enter the text to modify"/>
     <About/>

    </>
  );
}

export default App;
