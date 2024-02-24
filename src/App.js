import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/alert';
// import { Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'; 
      showAlert("Dark Mode has been enabled","success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      showAlert("Light Mode has been enabled","success")
    }
  };
  return (
    <> 
    {/* <Router> */}
      <Navbar title="Myapp" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}  />
      <div className="container" >
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/">  */}
          {/* element={ */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>
            {/* }  */}
          {/* <Route/> */}
        {/* </Routes> */}
        </div>
        {/* </Router> */}
      
    </>
  );
}
export default App;
