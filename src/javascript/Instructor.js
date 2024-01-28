import React from "react";
import Header from './Header';
import '../css/Instructor.css';
import '../css/Course.css';
import Footer from './Footer'
import insts from '../images/insts.jpg'
function Main(){
    return(
        <div style={{overflow:'hidden'}}>
            <Header/>
            <div className="con">
            <div className="tit">List Of Our Experts</div><br></br>
            <div className="container" >
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont">Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Name :Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
                <div className="itemm" > 
                 <img className="img11" src={insts}></img>
                 <div className="cont"> Mr. John <br></br>Experienced man in Front End technologies with 11 years of experience </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Main;