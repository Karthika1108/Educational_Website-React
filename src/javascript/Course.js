import React from "react";
import '../css/Course.css';
import  Header from './Header';
import {  Link } from "react-router-dom";
import box from '../images/box.jpg';
import Footer from './Footer'
function Main(){
    return (      
        <div className="back">
            <Header />   
        <div className="top1">Find Course and Enjoyyy</div>
        <div className="secondhalf">
        <div className="courseNav">
            <div className="subcourse">
                < img className="box" src={box}></img>
                <div className="boxContent">
                      <div className="boxTop">Front End Courses</div><div className="boxSubContent">
                A front end development role is like a role of god Brahma,who designs the User interfaces for the website ,which gives  to look wow.  </div>
                <div className="btn"><Link to="/Design">Tap for more</Link></div></div>
                
            </div>
            <div className="subcourse">
                < img className="box" src={box}></img>
                <div className="boxContent">
                      <div className="boxTop">Back End Courses</div><div className="boxSubContent">
                A Back end development role is like a nervous system in our body,where giving connection between external and internal.</div>
                <div className="btn"><Link to="/Backend">Tap for more</Link></div></div>
                
            </div>
            <div className="subcourse">
                < img className="box" src={box}></img>
                <div className="boxContent">
                      <div className="boxTop">Database Courses</div><div className="boxSubContent">
               Database technology is like a container  which is used to store the data for the website,which gives us to retrieve data using query.</div>
                <div className="btn"><Link to="/Database">Tap for more</Link></div></div>
                
            </div>
            <div className="subcourse">
                < img className="box" src={box}></img>
                <div className="boxContent">
                      <div className="boxTop">App Development</div><div className="boxSubContent">
                Application development involves the developmemt of complete application with User Interface and Database.</div>
                <div className="btn"><Link to="/Programming">Tap for more</Link></div></div>
                
            </div>
            </div>
           {/* <Link to='./Design'>Design</Link>
           <Link to='./Backend'>BackEnd</Link>
           <Link to='./Database'>Database</Link>
           <Link to='./Programming'>Programming</Link> */}
            
        </div>
       <Footer/>
        </div>
    )
} 
export default Main;