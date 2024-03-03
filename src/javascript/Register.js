import react, { useState } from 'react';
import  '../css/SignUp.css';
import Header from './Header';
import Footer from './Footer';
import loginImage from '../images/loginImage.jpg';
import {Link} from 'react-router-dom';
import '../css/Login.css'
import axios from 'axios';
function Main(){
    const [username,setName]=useState();
    const [phone,setPhone]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    async function submit(e){
      e.preventDefault();
      try{
       await axios.post("http://localhost:8001/signup",{
        username,phone,email,password
       })
       .then(res=>{
        if(res.data==='exists'){
          alert("Account already exists");
        }
        else if(res.data==='inserted'){
          alert("Account create succesfully");
        }
        else{
          alert("Failed");
        }
       })
      }catch(err){
        console.log(err);
      }
    }
   
return (
    <div>
        <Header/>
        <div className='back1'>
        </div>
        <div className='secondhalf2'>
              <div className='loginn'>
                <img className='loginImagee' src={loginImage}></img>
                <div className='loginForm'>
                    <div className='formTop'>Register </div>
                    <form  action='signup' method='post'>
                      <div>
                        <input onChange={(e)=>setName(e.target.value)} type='text' id='username' name='username' placeholder='UserName'></input>
                        <div className='error'></div>
                      </div>
                      <div>
                        <input onChange={(e)=>setName(e.target.value)} type='date' id='dob' name='dob' placeholder='dob'></input>
                        <div className='error'></div>
                      </div>
                      <div>
                        <input onChange={(e)=>setName(e.target.value)} type='country' id='country' name='country' placeholder='Country'></input>
                        <div className='error'></div>
                      </div>
                      <div>
                        <input onChange={(e)=>setEmail(e.target.value)} type='Email' id='email' name='email' placeholder='Email'></input>
                        <div className='error'></div>
                      </div>
                      <div>
                        <input onChange={(e)=>setPhone(e.target.value)} type='tel' id='phone' name='phone' placeholder='Mobile Number'></input>
                        <div className='error'></div>
                      </div>
                      <div>
                        <input onChange={(e)=>setPassword(e.target.value)} type='password' id='password' name='password' placeholder='Password'></input>
                        <div className='error'></div>
                      </div>
                      <div>
                        <input onChange={(e)=>setPassword(e.target.value)} type='password' id='password' name='password' placeholder='Password'></input>
                        <div className='error'></div>
                      </div>
                      <div>
                        <input onChange={(e)=>setPassword(e.target.value)} type='password' id='password' name='password' placeholder='Password'></input>
                        <div className='error'></div>
                      </div>
                      

                      
                      <div>
                        <button type='submit'onClick={submit} value='submit'>Submit</button>
                      </div>
                    
                    </form>
                </div>
              </div>
        </div>
        <Footer/>
    </div>
)
}
export default Main;