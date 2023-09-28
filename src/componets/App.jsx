import "./App.css";
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home/Home";
import Landing from "./Landing/Landing";
//import Nav from "./components/Nav/Nav.jsx";
//import Abaut from "./components/Abaut/Abaut";

function App() {
  return (
    <div className='App'>
      <div className='body'>
        <Routes>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/' element={<Landing/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
