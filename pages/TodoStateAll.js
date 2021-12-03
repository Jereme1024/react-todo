import { useState } from 'react'
import HighlightButton from '../components/HighlightButton'

const defaultState = {
  list: [],
  name: '',
  mode: 'All',
}

export default function TodoStateAll() {
  const [state, setState] = useState(defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    setState((prev) => ({ ...prev, list: [...prev.list, { checked: false, name: prev.name }], name: '' }))
  }
  const handleDelete = (i) => {
    setState((prev) => {
      prev.list.splice(i, 1)
      return { ...prev, list: prev.list }
    })
  }
  const handleCheck = (e, i) => {
    setState((prev) => {
      prev.list[i].checked = e.target.checked
      return { ...prev, list: [...prev.list] }
    })
  }
  function TodoItem({ todo, i }) {
    return (
      <li>
        <input type='checkbox' onClick={(e)=>handleCheck(e, i)} checked={todo.checked} onChange={()=>{}} />
        {todo.name}
        <button onClick={()=>handleDelete(i)}>Delete</button>
      </li>
    )
  }
  function TodoList({ mode, list }) {
    return (<ul>
      {list.map((todo, i) => (
        (mode === 'All' || mode === 'Checked' && todo.checked || mode === 'Unchecked' && !todo.checked) ?
          <TodoItem key={i} todo={todo} i={i} /> :
          <div key={i}></div>
      ))}
    </ul>)
  }

  return (
    <div name='container'>
      <h2>Todo State</h2>
      <input onChange={(e) => setState((prev) => ({ ...prev, name: e.target.value }))} value={state.name}/>
      <button onClick={handleSubmit}>Add</button>
      <br/>
      <HighlightButton setMode={(mode) => setState((prev) => ({ ...prev, mode }))} mode={state.mode} value='All' />
      <HighlightButton setMode={(mode) => setState((prev) => ({ ...prev, mode }))} mode={state.mode} value='Checked' />
      <HighlightButton setMode={(mode) => setState((prev) => ({ ...prev, mode }))} mode={state.mode} value='Unchecked' />
      <button onClick={()=>console.log(JSON.stringify(state.list, null, 2))}>Debug</button>
      <hr></hr>
      <TodoList mode={state.mode} list={state.list} />
    </div>
  )
}
