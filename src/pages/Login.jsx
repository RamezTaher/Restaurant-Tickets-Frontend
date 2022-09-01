import React, { useState } from "react"
import { FaSignInAlt } from "react-icons/fa"

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = userData

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Sign In To Your Account Here</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter Your email"
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Enter Your password"
              name="password"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit{" "}
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
