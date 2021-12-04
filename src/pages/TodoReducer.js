import { useContext, useEffect } from 'react'
import Todo from '../components/Todo'
import Context from '../store'

export default function TodoReducer() {
  const [state, dispatch] = useContext(Context)

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
