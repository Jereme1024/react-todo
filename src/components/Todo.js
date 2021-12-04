import { useState } from 'react'
import HighlightButton from './HighlightButton'

export default function Todo({ defaultMode, list, setList }) {
  const [mode, setMode] = useState(defaultMode || 'All')

  const handleAdd = (name) => {
    setList((prev) => [...prev, { checked: false, name }])
  }
  const handleDelete = (i) => {
    setList((prev) => {
      const copy = [...prev]
      copy.splice(i, 1)
      return [...copy]
    })
  }
  const handleCheck = (e, i) => {
    setList((prev) => {
      const copy = [...prev]
      copy[i].checked = e.target.checked
      return [...copy]
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

  function TodoControl({ mode, handleAdd }) {
    const [name, setName] = useState('')

    return (
      <>
        <input onChange={(e) => setName(e.target.value)} value={name}/>
        <button onClick={() => (handleAdd(name), setName(''))}>Add</button>
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
      <TodoControl mode={mode} handleAdd={handleAdd} />
      <hr></hr>
      <TodoList mode={mode} list={list} handleCheck={handleCheck} handleDelete={handleDelete} />
    </>
  )
}
