import { useState } from 'react'
import Todo from '../components/Todo'

const defaultState = {
  list: [],
}

const localStorageKey = 'TodoStateAllLocalStorage'

export default function TodoStateAllLocalStorage() {
  const [state, setState] = useState(() => {
    const state = localStorage.getItem(localStorageKey)
    console.log('load!', state)
    return state ? JSON.parse(state) : defaultState
  })

  const updateList = (cb) => {
    const list = cb(state.list)
    setState({ ...state, list })
    localStorage.setItem(localStorageKey, JSON.stringify(state))
  }

  return (
    <div name='container'>
      <h2>Todo State LocalStorage</h2>
      <Todo list={state.list} setList={updateList} />
    </div>
  )
}
