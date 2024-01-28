import React from "react";
import common from '../images/common.jpg';
import '../css/Common.css';
import {Link} from "react-router-dom"
function Main(){
    return(
        // <div className="Cback">
        //  <img className="commonImage" src={common}></img>
        // <div className="Ccont">hiii</div>
        // </div>
        <div className="Cback">
                < img className="commonImage" src={common}></img>
                <div className="Ccont">
                    <div className="Cval">You were here to learn something and acheive more in  life,YES you have selected the right path and go ahead</div>
                    <Link to ="./Hhome" ><button className="btn1">Start</button></Link>
                     </div>
                
            </div>
       
    )
}
export default Main;