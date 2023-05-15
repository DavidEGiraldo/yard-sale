import React from 'react'
import "../styles/Login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" id="email" placeholder="example@mail.com" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="***************" className="input input-password" />
          <button type="submit" className="primary-button login-button">Log in</button>
        </form>
        <a href="/" className="forgot-password">Forgot my password</a>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>

  )
}

export default Login