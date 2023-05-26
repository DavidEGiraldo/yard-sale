import React from 'react'
import "@styles/MyAccount.scss"

const MyAccount = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <p className="value">User Name</p>
            <label htmlFor="email" className="label">Email address</label>
            <p className="value">example@mail.com</p>
            <label htmlFor="password" className="label">Password</label>
            <p className="value">***************</p>
          </div>
          <button type="submit" className="secondary-button login-button">Edit</button>
        </form>
      </div>
    </div>

  )
}

export default MyAccount