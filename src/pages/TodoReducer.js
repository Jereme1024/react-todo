import { useContext, useEffect } from 'react'
import Todo from '../components/Todo'
import DispatchContext from '../store/DispatchContext'

export default function TodoReducer() {
  const [state, dispatch] = useContext(DispatchContext)

  useEffect(() => {
    console.log(state)
  }, [state.list])

  const updateList = (cb) => {
    const newList = cb(state.list)
    dispatch({ type: 'UpdateList', list: newList })
  }

  return (
    <div name='container'>
      <h2>Todo State Reducer</h2>
      <Todo list={state.list} setList={updateList} />
    </div>
  )
}
