import { configureStore } from '@reduxjs/toolkit'

import appSlice from './slices/appSlice'
import todoReducer from './slices/todoSlice'

export default configureStore({
  reducer: {
    app: appSlice,
    todo: todoReducer,
  },
})
