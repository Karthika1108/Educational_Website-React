import react from 'react';
import  '../css/SignUp.css';
import Header from './Header';
import Footer from './Footer';
import loginImage from '../images/loginImage.jpg';
import {Link} from 'react-router-dom';
import '../css/Login.css'
function Main(){
    return (
        <div>
            <Header/>
            <div className='back1'>
            </div>
            <div className='secondhalf2'>
                  <div className='loginn'>
                    <img className='loginImagee' src={loginImage}></img>
                    <div className='loginForm'>
                        <div className='formTop'>Signup</div>
                        <form action='' method=''>
                          <div>
                            <input type='text' id='username' name='username' placeholder='UserName'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input type='Email' id='email' name='email' placeholder='Email'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input type='tel' id='phone' name='phone' placeholder='Mobile Number'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input type='password' id='password' name='password' placeholder='Password'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input type='password' id='Cpassword' name='Cpassword' placeholder='Confirm Password'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <button type='submit' value='submit'>Submit</button>
                          </div>
                        <div className='sign'>
                            Already have an account?<Link to="/Login">Login</Link>
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