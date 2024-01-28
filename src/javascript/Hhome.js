import React from "react";
import '../css/Header.css';
import instructor from '../images/instructor.jpg';
import homeProject from '../images/homeProject.jpg';
import Header from './Header';
import Footer from './Footer';
import '../css/Footer.css';
function Main(){
    return(
        <body>
            <div className="back">
             <Header />
       <div className="content">Discover.Learn.Grow</div>
       <div style={{textAlign:'center'}}>platform to learn more creative and interesting courses</div>
        </div>
        <div className="secondhalf">
            <div className=" seconditem1">
                <div className="sTop">Skilled Intructor</div>
                <div className="sContent"> Our Instructors are very skilled and with minimum of 5 years experience 
                    in this field,and when you search for the good platform to learn ,our website is the top one among others.
                </div>
                <div> <img  src={instructor} alt="instructor"></img></div>
            </div>
            <div className=" seconditem2">
                <div className="sTop">Home Projects</div>
                <div className="sContent">Every individual course contains project session,so learners gains the hands on experience
                 with that course,and provides more knowledge on that particular topic. 
                </div>
                <div> <img  src={homeProject} alt="instructor"></img></div>
               
            </div>
            </div>
            <Footer/>
        </body>
    )
};
export default Main;



