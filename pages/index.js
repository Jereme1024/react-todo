/* eslint-disable react/jsx-key */
import Head from 'next/head'
import { useReducer, useState } from 'react'
import TodoState from './TodoState'
import TodoStateApi from './TodoStateApi'
import TodoReducer from './TodoReducer'
import TodoFirestore from './TodoFirestore'
import HighlightButton from '../components/HighlightButton'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { initState, reducer } from '../vm/todoVm'
import Context from '../store'

export default function Home() {
  const [page, setPage] = useState('Firestore')
  const store = useReducer(reducer, initState)

  return (
    <div name='container'>
      <Context.Provider value={store}>
        <Head>React Hook Practice</Head>
        <h1>React Hook Practice</h1>
        <HighlightButton mode={page} setMode={setPage} value='State' />
        <HighlightButton mode={page} setMode={setPage} value='StateApi' />
        <HighlightButton mode={page} setMode={setPage} value='Reducer' />
        <HighlightButton mode={page} setMode={setPage} value='Firestore' />
        <hr/>
        {
          page === 'State' ?
            <TodoState /> :
            page === 'StateApi' ?
              <TodoStateApi /> :
              page === 'Reducer' ?
                <TodoReducer /> :
                page === 'Firestore' ?
                  <TodoFirestore /> :
                  <></>
        }
        <ToastContainer position='top-center' transition={Slide} autoClose={1000} />
      </Context.Provider>
    </div>
  )
}
