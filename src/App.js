import './App.css'
import { useState, useReducer } from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HighlightButton from './components/HighlightButton'
import TodoState from './pages/TodoState'
import TodoStateApi from './pages/TodoStateApi'
import TodoReducer from './pages/TodoReducer'
import TodoFirestore from './pages/TodoFirestore'
import TodoStateAll from './pages/TodoStateAll'
import { initState, reducer } from './vm/todoVm'
import Context from './store'

function App() {
  const [page, setPage] = useState('StateAll')
  const store = useReducer(reducer, initState)

  return (
    <div name='container'>
      <Context.Provider value={store}>
        <h1>React Hook Practice</h1>
        <HighlightButton mode={page} setMode={setPage} value='State' />
        <HighlightButton mode={page} setMode={setPage} value='StateApi' />
        <HighlightButton mode={page} setMode={setPage} value='Reducer' />
        <HighlightButton mode={page} setMode={setPage} value='Firestore' />
        <HighlightButton mode={page} setMode={setPage} value='StateAll' />
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
                  page === 'StateAll' ?
                    <TodoStateAll /> :
                    <></>
        }
        <ToastContainer position='top-center' transition={Slide} autoClose={1000} />
      </Context.Provider>
    </div>
  )
}

export default App
