import './App.css'
import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink as Link } from 'react-router-dom'
import { useReducer } from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { initState, reducer } from './vm/todoVm'
import Context from './store'

const TodoState = React.lazy(() => import('./pages/TodoState'))
const TodoStateApi = React.lazy(() => import('./pages/TodoStateApi'))
const TodoReducer = React.lazy(() => import('./pages/TodoReducer'))
const TodoFirestore = React.lazy(() => import('./pages/TodoFirestore'))
const TodoStateAll = React.lazy(() => import('./pages/TodoStateAll'))
const TodoStateAllLocalStorage = React.lazy(() => import('./pages/TodoStateAllLocalStorage'))

function App() {
  const store = useReducer(reducer, initState)

  return (
    <div name='container'>
      <Context.Provider value={store}>
        <h1>React Hook Practice</h1>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/basic">Basic</Link>
              </li>
              <li>
                <Link to="/all">All</Link>
              </li>
              <li>
                <Link to="/mockApi">Api</Link>
              </li>
              <li>
                <Link to="/reducer">Reducer</Link>
              </li>
              <li>
                <Link to="/localStorage">LocalStorage</Link>
              </li>
              <li>
                <Link to="/fireStore">FireStore</Link>
              </li>
            </ul>
          </nav>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<TodoState />} />
              <Route path="/basic" element={<TodoState />} />
              <Route path="/all" element={<TodoStateAll />} />
              <Route path="/mockApi" element={<TodoStateApi />} />
              <Route path="/reducer" element={<TodoReducer />} />
              <Route path="/localStorage" element={<TodoStateAllLocalStorage />} />
              <Route path="/fireStore" element={<TodoFirestore />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer position='top-center' transition={Slide} autoClose={1000} />
      </Context.Provider>
    </div>
  )
}

export default App
