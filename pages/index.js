/* eslint-disable react/jsx-key */
import Head from 'next/head'
import { useState } from 'react'
import TodoState from './TodoState'
import TodoStateApi from './TodoStateApi'
import TodoReducer from './TodoReducer'
import HighlightButton from '../components/HighlightButton'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const [page, setPage] = useState('Reducer')
  return (
    <div name='container'>
      <Head>React Hook Practice</Head>
      <h1>React Hook Practice</h1>
      <HighlightButton mode={page} setMode={setPage} value='State' />
      <HighlightButton mode={page} setMode={setPage} value='StateApi' />
      <HighlightButton mode={page} setMode={setPage} value='Reducer' />
      <hr/>
      {
        page === 'State' ?
          <TodoState /> :
          page === 'StateApi' ?
            <TodoStateApi /> :
            page === 'Reducer' ?
              <TodoReducer /> :
              <></>
      }
      <ToastContainer position='top-center' transition={Slide} autoClose={1000} />
    </div>
  )
}
