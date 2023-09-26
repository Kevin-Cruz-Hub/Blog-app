import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import axios from 'axios'
export default function SignupPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{

      const res = await axios.post('/auth/signup',{
        username, 
        password, 
        email,
      })
      setRedirect(true)
    }
    catch(err){
      console.log(err)
      setError('Signup Failed')
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="">
      <h1>Sign Up</h1>
      <form className="signupForm" onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={e =>setUsername(e.target.value)} placeholder="Username" />
        <input type="email"value={email} onChange={e =>setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={e =>setPassword(e.target.value)} placeholder="Password" />
        <button>Sign Up</button>
      </form>
      <p className='error-message'>{error}</p>
    </div>
  )
}
