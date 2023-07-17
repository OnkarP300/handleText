// import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import Error from "./components/error";
import { useState } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  // App theme
  const [mode, setMode] = useState("light")
  const [btn, setBtn] = useState("primary")
  const toggle = (cls)=>{
      if(cls === 'primary'){
        setBtn("success")
      }
      else{
        setBtn("primary")
      }
      if (cls) {
        console.log(cls)
        document.body.classList = "";
        const list = document.body.classList;
        list.add('bg-'+cls) 
      }
      if (mode === "dark" && cls==="dark") {
        document.body.classList = "";
        setMode("light")
        showAlert("Light Mode",cls)
        document.body.style.backgroundColor = "white"
      }else{
        setMode(cls)
        if (cls === "dark") {
          
          showAlert("Dark Mode", cls)
        }
        document.body.style.backgroundColor = 'rgb(38, 54, 67)'
      }

    // document.body.classList.remove = cls;
  }
  

  // Alert Message
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      }
      )
      setTimeout(() => {
        setAlert(null)
      }, 3000);
  }

  return (
    <>
      <Navbar page="ReactJS" home="Text Form" mode ={mode} link = "About Us" toggleMode = {toggle}/>
      <TextForm alert={showAlert} heading ="Enter the Text here!!" btnToggle = {btn} mode={mode}/>
      {/* <BrowserRouter> */}
        {/* <Routes>
          <Route index element = {<TextForm alert={showAlert} heading ="Enter the Text here!!" btnToggle = {btn} mode={mode}/>}/>
          <Route exact path="/TextForm" element = {<TextForm alert={showAlert} heading ="Enter the Text here!!" btnToggle = {btn} mode={mode}/>} />
          <Route exact path="/About" element ={<About about="About Us" mode = {mode}></About>}/>
          <Route exact path="*" element = {<Error/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <Navbar page="ReactJS" home="Welcome" mode ={mode} toggleMode = {toggle}/> */}
      <Alert alert={alert}/>
      
      
      
    </>
  );
}

export default App;
