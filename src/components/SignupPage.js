import React from 'react'

export default function SignupPage() {
  return (
    <div className="">
      <h1>Sign Up</h1>
      <form className="signupForm">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
      <p className='error-message'></p>
    </div>
  )
}
