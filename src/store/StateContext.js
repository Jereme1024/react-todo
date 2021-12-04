import React from 'react'
import todoState from './states/todoState'

export const initialState = {
  todo: todoState,
}

const Context = React.createContext()
export default Context

