import './App.css'
import { useReducer, useState } from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { initState, reducer } from './vm/todoVm'
import DispatchContext from './store/DispatchContext'
import StateContext, { initialState } from './store/StateContext'
import reduxStore from './store/redux'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import NavSider from './layouts/NavSider'
import { BrowserRouter } from 'react-router-dom'
import RouterView from './routes/RouteView'

function App() {
  const store = useReducer(reducer, initState)
  const todoState = useState(initialState.todo)
  const state = { todoState }

  return (
    <div name='container'>
      <DispatchContext.Provider value={store}>
        <StateContext.Provider value={state}>
          <Provider store={reduxStore}>
            <BrowserRouter>
              <Layout>
                <NavSider/>
                <RouterView />
              </Layout>
            </BrowserRouter>
          </Provider>
        </StateContext.Provider>
      </DispatchContext.Provider>
      <ToastContainer position='top-center' transition={Slide} autoClose={1000} />
    </div>
  )
}

export default App
