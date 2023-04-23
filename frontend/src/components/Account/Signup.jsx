import React, { useState } from 'react'
import './account.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = ({outerSidebar}) => {
  const navigate = useNavigate();
  const[credentials,setCredentials] = useState({
    phoneNumber:"",
    name:"",
    email:"",
    password:""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:7700/api/users/register", {
        phoneNumber:credentials.phoneNumber,
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      });
      if (data.success) {
        alert("User Register Successfully");
        navigate("/")
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
    <div className={ outerSidebar ? "outerSidebar outerSidebar--open" : "outerSidebar" }>
      <div>
        <h3 className='signingSidebar'>Sign up</h3>
        <div className='innerSidebar'>
          <p className='orSignup'>or</p>
          <p className='toAccountSidebar'>Login to your account</p>
        </div>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" className='logoSidebar' />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" name = "phoneNumber" value = {credentials.phoneNumber} placeholder='Phone Number' onChange={onChange} className='phoneNumberInput'/><br/>
          <input type="text" name = "name" value = {credentials.name} placeholder='Name' onChange={onChange} className='nameInput'/><br/>
          <input type="email" name='email' value={credentials.email} placeholder='Email' onChange={onChange} className='emailInput'/><br/>
          <input type="password" name='password' value={credentials.password} placeholder='Password' onChange={onChange} className='emailInput'/>
          <div className='referral'>Have a referral code</div>
          <button className='continueButton'>CONTINUE</button>
          <div className='acceptance'>By creating account, I accept the <span className='spanTerm'>Term & Conditions</span></div>
        </form>
      </div>
    </div>

    </>
  )
}

export default Signup