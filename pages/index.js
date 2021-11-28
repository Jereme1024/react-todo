/* eslint-disable react/jsx-key */
import Head from 'next/head'
import { useState } from 'react'
import TodoState from './TodoState'
import HighlightButton from '../components/HighlightButton'

export default function Home() {
  const [page, setPage] = useState('State')
  return (
    <div name='container'>
      <Head>React Hook Practice</Head>
      <h1>React Hook Practice</h1>
      <HighlightButton mode={page} setMode={setPage} value='State' />
      <HighlightButton mode={page} setMode={setPage} value='StateApi' />
      <hr/>
      {
        page === 'State' ?
          <TodoState /> :
          <></>
      }
    </div>
  )
}
