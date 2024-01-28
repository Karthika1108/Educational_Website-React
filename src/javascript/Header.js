import React from "react"
import { FaBookOpen, FaUser } from "react-icons/fa";
import { FaUserCircle} from "react-icons/fa";
import {  Link } from "react-router-dom";
import '../css/Header.css';
function Main(){
    const icon={
        fontSize:'40px',
        marginTop:'15px',
        marginLeft:'30px'
    }
    const user={
        fontSize:'30px',
        marginTop:'22px',
        marginLeft:'30px',
        color:'white',
        marginLeft:'200px'
    }
    return(
      <div className="nav">
      <FaBookOpen style={icon} />
      <p className="imp"  style={{marginRight:"200px"}}><span className="top">L</span>earn Easy</p>      
       <div className="navItem">      <Link to="/Hhome">Home</Link></div> 
       <div className="navItem">      <Link to="/Course">Categories</Link></div>  
       <div className="navItem">     <Link to="/Instructor ">Instructor</Link></div>
       <div className="navItem">     <Link to="/Header ">About us</Link></div>
       <Link to="/Login"><FaUserCircle style={user} /></Link>
       </div>
    )
}
export default Main;