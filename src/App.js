import './App.css'
import { useReducer } from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { initState, reducer } from './vm/todoVm'
import Context from './store'
import RouterView from './routes/RouteView'

function App() {
  const store = useReducer(reducer, initState)

  return (
    <div name='container'>
      <Context.Provider value={store}>
        <h1>React Hook Practice</h1>
        <RouterView />
        <ToastContainer position='top-center' transition={Slide} autoClose={1000} />
      </Context.Provider>
    </div>
  )
}

export default App
