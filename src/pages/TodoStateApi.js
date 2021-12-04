import { useState } from 'react'
import Todo from '../components/Todo'
import todoApis from '../apis/todoApis'

export default function TodoStateApi() {
  const [list, setListOrigin] = useState([{ checked: false, name: 'init' }])

  const setList = async (cb) => {
    const newList = cb(list)
    await todoApis.update(newList).then(() => setListOrigin(newList)).catch(()=>{})
  }

  return (
    <div name='container'>
      <h2>Todo State API</h2>
      <Todo list={list} setList={setList} />
    </div>
  )
}
