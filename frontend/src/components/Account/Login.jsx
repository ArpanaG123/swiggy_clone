import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({loginSidebar}) => {

  const[credentials,setCredentials] = useState({email:""})
  let navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:7700/api/users/login", {
        email: credentials.email,
      });
      if (data.success) {
        alert("User login Successfully");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onChange = (event) => {
    setCredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <>
    <div className={loginSidebar ? 'loginSidebar loginSidebar--open' : 'loginSidebar'}>
      <div>
        <h3 className='loginHeadSide'>Login</h3>
        <div className='loginDisplay'>
          <p className='orLogin'>or</p>
          <p className='createLog'>Create an account</p>
        </div>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" className='loginImageSide' />
        <div></div>
        <div className='formPartLogin'>
          <form onSubmit={handleSubmit}>
            <input type="email" name='email' value={credentials.email} placeholder='Email Address'  className='login-withPhone' onChange={onChange}/><br/>
            <Link to="/home"><button className='loginBut'>Login</button></Link>
          </form>
          <div className='loginPolicy'><span className='sapn1Login'>By clicking on Login, I accept the</span> <span>Terms & Conditions & Privacy <br/>Policy</span></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login