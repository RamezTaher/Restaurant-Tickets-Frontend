import React from "react"
import { useState } from "react"
import { FaUser } from "react-icons/fa"
import { toast } from "react-toastify"

import { useSelector, useDispatch } from "react-redux"
import { register, reset } from "../features/auth/authSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const { name, email, password, confirmPassword } = userData

  const nagivate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      nagivate("/")
    }

    dispatch(reset())
  }, [isSuccess, isError, message])

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error("Passwords don't match")
    } else {
      const user = {
        name,
        email,
        password,
      }

      dispatch(register(user))
    }
  }

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Create Your Account Here</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Enter Your Name"
              name="name"
            />
          </div>
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
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              placeholder="Enter Your password"
              name="confirmPassword"
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

export default Register
