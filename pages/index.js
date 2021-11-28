/* eslint-disable react/jsx-key */
import Head from 'next/head'
import { useState } from 'react'

export default function TodoState() {
  const [list, setList] = useState([{ checked: false, name: 'init' }])
  const [name, setName] = useState('')
  const [mode, setMode] = useState('All')

  const handleSubmit = (e) => {
    e.preventDefault()
    setList((prev) => [...prev, { checked: false, name }])
    setName('')
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
          <></>
      ))}
    </ul>)
  }
  function Highlight({ mode, value }) {
    const trueTemplate = (<b>{value}</b>)
    const falseTemplate = (<>{value}</>)
    return (<>{ mode === value ? trueTemplate : falseTemplate }</>)
  }


  return (
    <div name='container'>
      <Head>Todo Practice</Head>
      <h1>Todo List</h1>
      <input onChange={(e) => setName(e.target.value)} value={name}/>
      <button onClick={handleSubmit}>Add</button>
      <br/>
      <button onClick={()=>setMode('All')}><Highlight mode={mode} value='All' /></button>
      <button onClick={()=>setMode('Checked')}><Highlight mode={mode} value='Checked' /></button>
      <button onClick={()=>setMode('Unchecked')}><Highlight mode={mode} value='Unchecked' /></button>
      <button onClick={()=>console.log(JSON.stringify(list, null, 2))}>Debug</button>
      <hr></hr>
      <TodoList mode={mode} list={list} />
    </div>
  )
}
