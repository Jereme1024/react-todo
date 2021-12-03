import { doc, getDoc, updateDoc } from '@firebase/firestore'
import { useEffect, useState, useRef } from 'react'
import HighlightButton from '../components/HighlightButton'
import db from '../utils/firebase.config'

export default function TodoFirestore() {
  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [mode, setMode] = useState('All')
  const docRef = useRef()

  useEffect(async () => {
    docRef.current = doc(db, 'todos', '9JLLyPhq8TwVAOAkMOu0')
    const docSnap = await getDoc(docRef.current)
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data())
      setList((prev) => [...prev, ...docSnap.data().list])
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newItem = { checked: false, name }
      await updateDoc(docRef.current, {
        list: [...list, newItem],
      })
      setList((prev) => [...prev, { checked: false, name }])
      setName('')
    } catch (e) {
      console.log(e)
    }
  }
  const handleDelete = async (i) => {
    try {
      const newList = [...list]
      newList.splice(i, 1)
      await updateDoc(docRef.current, {
        list: newList,
      })
      setList((prev) => {
        prev.splice(i, 1)
        return [...prev]
      })
    } catch (e) {
      console.log(e)
    }
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
          <div key={i}></div>
      ))}
    </ul>)
  }

  return (
    <div name='container'>
      <h2>Todo State</h2>
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
