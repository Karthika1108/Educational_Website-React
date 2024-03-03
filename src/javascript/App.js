import Hhome from "./Hhome";
import React from "react";
import Course from "./Course"
import Design from './Design';
import DataBase from './Database';
import Programming from './Programming';
import Backend from './Backend';
import SignUp from './SignUp';
import Login from './Login'
import  ReactDOM  from "react";
import Instructor from './Instructor';
import Register from './Register';
import Front from './Front';
import { BrowserRouter ,  Route, Routes ,Link, Router } from "react-router-dom";
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Front/>}></Route>
      <Route path="/Hhome" element={<Hhome/>}></Route>
      <Route path="/Course" element={<Course/>} ></Route>
      <Route path="/Design" element={<Design/>}></Route>
      <Route path="/Database" element={<DataBase/>}></Route>
      <Route path="/Backend" element={<Backend/>}></Route>
      <Route path="/Programming" element={<Programming/>}></Route>
      <Route path="/Instructor" element={<Instructor/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/SignUp" element={<SignUp/>}></Route>
      
      <Route path="/Register" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    

  );
}

export default App;
