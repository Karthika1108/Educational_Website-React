import react from 'react';
import  '../css/SignUp.css';
import Header from './Header';
import Footer from './Footer';
import loginImage from '../images/loginImage.jpg';
import {Link} from 'react-router-dom';
function Main(){
    return (
        <div>
            <Header/>
            <div className='back1'>
            </div>
            <div className='secondhalf1'>
                  <div className='login'>
                    <img className='loginImage' src={loginImage}></img>
                    <div className='loginForm'>
                        <div className='formTop'>Login</div>
                        <form action='' method=''>
                          <div>
                            <input type='Email' id='email' name='email' placeholder='Email'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input type='password' id='password' name='password' placeholder='Password'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <button type='submit' value='submit'>Submit</button>
                          </div>
                        <div className='sign'>
                            Not a member?<Link to="/SignUp">Sign up now</Link>
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