import { useState } from 'react'
import HighlightButton from '../components/HighlightButton'
import todoApis from '../apis/todoApis'

export default function TodoStateApi() {
  const [list, setList] = useState([{ checked: false, name: 'init' }])
  const [name, setName] = useState('')
  const [mode, setMode] = useState('All')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setName('')
    const next = [...list, { checked: false, name }]
    await todoApis.update(next).then(() => setList(next)).catch(()=>{})
  }
  const handleDelete = async (i) => {
    const next = [...list]
    next.splice(i, 1)
    await todoApis.update(next).then(() => setList(next)).catch(()=>{})
  }
  const handleCheck = async (e, i) => {
    const next = [...list]
    next[i].checked = e.target.checked
    await todoApis.update(next).then(() => setList(next)).catch(()=>{})
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
      <h2>Todo State API</h2>
      <input onChange={(e) => setName(e.target.value)} value={name}/>
      <button onClick={handleSubmit}>Add</button>
      <br/>
      <HighlightButton setMode={setMode} mode={mode} value='All' />
      <HighlightButton setMode={setMode} mode={mode} value='Checked' />
      <HighlightButton setMode={setMode} mode={mode} value='Unchecked' />
      <button onClick={()=>console.log(JSON.stringify(list, null, 2))}>Debug</button>
      <hr></hr>
      <TodoList mode={mode} list={list} />
    </div>
  )
}
