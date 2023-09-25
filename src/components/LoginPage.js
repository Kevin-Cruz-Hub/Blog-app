function LoginPage() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form className="loginForm">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <p className='error-message'></p>
    </div>
  )
}
export default LoginPage;