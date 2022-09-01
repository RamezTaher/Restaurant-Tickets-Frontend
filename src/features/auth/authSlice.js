import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"

// Prevent User From going after reaload
const user = JSON.parse(localStorage.getItem("user"))
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (err) {
      const message =
        (err.response && err.response.data & err.response.data.message) ||
        err.message ||
        err.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user)
})

export const logout = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  authService.logout()
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.user = null
        state.message = action.payload
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
