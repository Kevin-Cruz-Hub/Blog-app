import { useState } from 'react'
import React from 'react'
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';

function Auth() {
    const [showLogin, setShowLogin] = useState(true)
  
  
    return (
      <main>
  
        <h1 onClick={()=> setShowLogin(!showLogin)} className='heading'>{showLogin?"Sign up": 'Login'}</h1>
        {
          showLogin ? (
  
            <LoginPage/>
          ) : (
            <SignupPage/>
          )
        }
      </main>
    )
  }
export default Auth;