import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
  },
  reducers: {
    update: (state, action) => {
      state.list = action.payload
    },
  },
})

export const { update } = slice.actions

export default slice.reducer
