import { useState } from 'react'
import Todo from '../components/Todo'

export default function TodoState() {
  const [list, setList] = useState([{ checked: false, name: 'init' }])

  return (
    <div name='container'>
      <h2>Todo State</h2>
      <Todo list={list} setList={setList} />
    </div>
  )
}
