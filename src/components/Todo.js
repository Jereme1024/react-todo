import { useState } from 'react'
import HighlightButton from './HighlightButton'

export default function Todo({ defaultMode, list, setList }) {
  const [name, setName] = useState('')
  const [mode, setMode] = useState(defaultMode || 'All')

  const handleSubmit = (name) => {
    setList((prev) => [...prev, { checked: false, name }])
  }
  const handleDelete = (i) => {
    setList((prev) => {
      prev.splice(i, 1)
      return [...prev]
    })
  }
  const handleCheck = (e, i) => {
    setList((prev) => {
      prev[i].checked = e.target.checked
      return [...prev]
    })
  }

  function TodoItem({ todo, i, handleCheck, handleDelete }) {
    return (
      <li>
        <input type='checkbox' onClick={(e)=>handleCheck(e, i)} checked={todo.checked} onChange={()=>{}} />
        {todo.name}
        <button onClick={()=>handleDelete(i)}>Delete</button>
      </li>
    )
  }

  function TodoList({ mode, list, handleCheck, handleDelete }) {
    return (<ul>
      {list.map((todo, i) => (
        (mode === 'All' || mode === 'Checked' && todo.checked || mode === 'Unchecked' && !todo.checked) ?
          <TodoItem key={i} todo={todo} i={i} handleCheck={handleCheck} handleDelete={handleDelete} /> :
          <div key={i}></div>
      ))}
    </ul>)
  }

  function TodoControl({ mode, handleSubmit }) {
    return (
      <>
        <input onChange={(e) => setName(e.target.value)} value={name}/>
        <button onClick={handleSubmit}>Add</button>
        <br/>
        <HighlightButton setMode={setMode} mode={mode} value='All' />
        <HighlightButton setMode={setMode} mode={mode} value='Checked' />
        <HighlightButton setMode={setMode} mode={mode} value='Unchecked' />
        <button onClick={()=>console.log(JSON.stringify(list, null, 2))}>Debug</button>
      </>
    )
  }

  return (
    <>
      <TodoControl mode={mode} handleSubmit={() => (handleSubmit(name), setName(''))} />
      <hr></hr>
      <TodoList mode={mode} list={list} handleCheck={handleCheck} handleDelete={handleDelete} />
    </>
  )
}
