import { useContext } from 'react'
import Todo from '../components/Todo'
import StateContext from '../store/StateContext'

export default function TodoStateContext() {
  const { todoState: [state, setState] } = useContext(StateContext)

  const setList = (cb) => {
    setState({ ...state, list: cb(state.list) })
  }

  return (
    <div name='container'>
      <h2>Todo State Context</h2>
      <Todo list={state.list} setList={setList} />
    </div>
  )
}
