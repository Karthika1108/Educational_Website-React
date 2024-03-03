import react,{useState} from 'react';
import  '../css/SignUp.css';
import Header from './Header';
import Footer from './Footer';
import loginImage from '../images/loginImage.jpg';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
function Main(){
  const page=useNavigate();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const handle= async (e)=>{
    e.preventDefault();
    try{
     await axios.post('http://localhost:8001/login',{email,password})
     .then(res=>{
      if(res.data==='exists'){
        alert('Login sucessful')
        page('/Hhome')
      }
      else  if(res.data==='Pincorrect'){
        alert('password incorrect')
      }
      else if(res.data==='Aincorrect'){
        alert('Account not found')
      }
     })
    } catch(err){
      console.log(err)
      alert("error")
    }
  }
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
                        <form   action='login' method='post'>
                          <div>
                            <input onChange={(e)=>setEmail(e.target.value)}   type='Email' id='email' name='email' placeholder='Email'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input onChange={(e)=>setPassword(e.target.value)}  type='password' id='password' name='password' placeholder='Password'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <button type='submit' onClick={handle} value='submit'>Submit</button>
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