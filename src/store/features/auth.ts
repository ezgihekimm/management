import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  token?: string
  id?: number
  fullName?: string
  email?: string
}

const initialState = {} as User

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => initialState,
    signIn: (state, action: PayloadAction<User>) => {
      state.token = action.payload.token
      state.id = action.payload.id
      state.fullName = action.payload.fullName
      state.email = action.payload.email
    },
  },
})

export const { signIn, logOut } = auth.actions
export default auth.reducer
