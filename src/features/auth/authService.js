import axios from "axios"
const API_URL = "https://restaurantticketsapi.herokuapp.com/api/auth"

// Signup User
const register = async (user) => {
  const res = await axios.post(`${API_URL}/signup`, user)
  const data = res.data

  if (data) {
    localStorage.setItem("user", JSON.stringify(data))
  }

  return data
}

// Signin User

const login = async (user) => {
  const res = await axios.post(`${API_URL}/signin`, user)
  const data = res.data
  if (data) {
    localStorage.setItem("user", JSON.stringify(data))
  }

  return data
}

// Logout User
const logout = () => localStorage.removeItem("user")

const authService = {
  register,
  logout,
  login,
}

export default authService
