import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
}

// User login
// export const login = createAsyncThunk('auth/login', async (auth, thunkAPI) => {
//   try {
//       return await userService.login(auth)
//   } catch (error) {
//       const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//       return thunkAPI.rejectWithValue(message)
//   }
// })

// the Actual slice function
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      reset: (state) => {  // cannot use reset: (state) => initialState if solo user comes after auth applied
          state.authUser = null
          state.isLoading = false
          state.isSuccess = false
          state.isError = false
          state.message = ''
      }
  },
  extraReducers: (builder) => {
    // builder
    // .addCase(createUser.pending, (state) => {
    //     state.isLoading = true
    // })
    // .addCase(createUser.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.users.push(action.payload)
    // })
    // .addCase(createUser.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    // })
  }
})

export const {reset} = userSlice.actions
export default userSlice.reducer
