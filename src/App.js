import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert]=useState(null);
  const[color, setColor]=useState('light');

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
      removeBodyClasses();
      document.body.style.backgroundColor = 'grey'; 
      showAlert("Dark Mode has been enabled","success")
    } else {
      setMode('light');
      removeBodyClasses();
      document.body.style.backgroundColor = 'white'; 
      showAlert("Light Mode has been enabled","success")
    }
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }

  const colorMode=(cls)=>{
    console.log(cls);
      removeBodyClasses();
      document.body.classList.add('bg-'+cls);
      document.body.style.backgroundColor = 'cls'; 
  }


  return (
    <> 
    <Router>
      <Navbar title="Myapp" mode={mode} toggleMode={toggleMode} colorMode={colorMode}/> 
      <Alert alert={alert}  />
      <div className="container" >
      <Routes>
          <Route exact path="/about" element={<About mode={mode} />}  />
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode} /> } />
      </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
