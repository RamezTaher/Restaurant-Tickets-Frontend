import axios from "axios"
const API_URL = "http://localhost:5000/api/auth"

// SignUp User
const register = async (user) => {
  const res = await axios.post(`${API_URL}/signup`, user)
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
}

export default authService
