import React from 'react'
import './account.css'

const LoginUpper = ({openLoginSide}) => {
  return (
    <div className='login' onClick={openLoginSide}>
        Login
    </div>
  )
}

export default LoginUpper;