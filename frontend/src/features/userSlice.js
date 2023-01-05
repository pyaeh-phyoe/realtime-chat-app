import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
        console.log(action.payload)
      state.userName = action.payload
    },
    logout: (state) => {
      state.userName = null
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer