import './App.css'
import { useReducer } from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { initState, reducer } from './vm/todoVm'
import DispatchContext from './store/DispatchContext'
import RouterView from './routes/RouteView'
import reduxStore from './store/redux'
import { Provider } from 'react-redux'

function App() {
  const store = useReducer(reducer, initState)

  return (
    <div name='container'>
      <DispatchContext.Provider value={store}>
        <Provider store={reduxStore}>
          <h1>React Hook Practice</h1>
          <RouterView />
          <ToastContainer position='top-center' transition={Slide} autoClose={1000} />
        </Provider>
      </DispatchContext.Provider>
    </div>
  )
}

export default App
