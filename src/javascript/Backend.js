import React from "react";
import Header from './Header';
import '../css/Design.css';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import js from '../images/js.jpg';
import html2 from '../images/html2.jpg';
import Footer from './Footer'
import {Link} from "react-router-dom";
function Main(){
    return(
        <div>
            <Header/>
            <div className="con">
            <div className="tit">Back End Courses</div><br></br>
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
                </div>
       
        <div><Link to='../Design'><button style={{float:"left"}} className="btn">&lt;&lt; Previous</button></Link>
        <Link to='../Database'><button style={{float:"right",marginRight:'60px'}} className="btn"> Next &gt;&gt;</button></Link></div><br></br><br></br><br></br>
        </div>
        <Footer/>
        </div>
    )
}
export default Main;