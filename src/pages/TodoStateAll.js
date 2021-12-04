import { useState } from 'react'
import Todo from '../components/Todo'

const defaultState = {
  list: [],
}

export default function TodoStateAll() {
  const [state, setState] = useState(defaultState)

  function setList(cb) {
    setState({ ...state, list: cb(state.list) })
  }

  return (
    <div name='container'>
      <h2>Todo State All</h2>
      <Todo list={state.list} setList={setList} />
    </div>
  )
}
