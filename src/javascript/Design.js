import React from "react";
import Header from './Header';
import '../css/Design.css';
import '../css/Course.css';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import js from '../images/js.jpg';
import html2 from '../images/html2.jpg';
import front from '../images/front.jpg';
import Footer from './Footer'
import {Link } from 'react-router-dom';
function Main(){
    return(
        <div>
            <Header/>
            <div className="con">
            <div className="tit">Front End Courses</div><br></br>
            <div className="container" >
                <div className="item" > 
                 <img className="img1" src={html}></img>
                 <div className="cont">Course Name : Full HTML <br></br>Course Duration : 10hours<br></br>Mentor : Mr James </div>
                </div>
                <div className="item">
                <img className="img1" src={css}></img>
                 <div className="cont">Course Name : Basic CSS <br></br>Course Duration : 12hours<br></br>Mentor : Mr John </div>
                
                </div>
                <div className="item" >
                <img className="img1" src={js}></img>
                 <div className="cont">Course Name :  JavaScript <br></br>Course Duration : 10hours<br></br>Mentor : Mr Malvik </div>
                
                </div>
                <div className="item" >
                <img className="img1" src={html2}></img>
                 <div className="cont">Course Name : HTML+CSS <br></br>Course Duration : 18hours<br></br>Mentor : Mr Vimal </div>
                
                </div>
                <div className="item">
                <img className="img1" src={js}></img>
                 <div className="cont">Course Name : Medium JS <br></br>Course Duration : 20hours<br></br>Mentor : Mr Kamal </div>
                
                </div>
                <div className="item" >
                <img className="img1" src={js}></img>
                 <div className="cont">Course Name :Advance JS  <br></br>Course Duration : 17hours<br></br>Mentor : Mr Franklin </div>
                
                </div>
                <div className="item" >
                <img className="img1" src={front}></img>
                 <div className="cont">Course Name : React <br></br>Course Duration : 20hours<br></br>Mentor : Mr Brown </div>
                
                </div>
                <div className="item" >
                <img className="img1" src={html}></img>
                 <div className="cont">Course Name : Advance CSS <br></br>Course Duration : 10hours<br></br>Mentor : Mr James </div>
                
                </div>
               
            </div>
            <div><Link to='../Backend'><button style={{float:"right",marginRight:'60px'}} className="btn">Next &gt;&gt;</button></Link></div><br></br><br></br>
        </div>
        <Footer/>
        </div>
    )
}
export default Main;