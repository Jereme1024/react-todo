import './App.css'
import { useReducer, useState } from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { initState, reducer } from './vm/todoVm'
import DispatchContext from './store/DispatchContext'
import StateContext, { initialState } from './store/StateContext'
import RouterView from './routes/RouteView'
import reduxStore from './store/redux'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import MySider from './layouts/MySider'
import MyHeader from './layouts/MyHeader'
import MyContent from './layouts/MyContent'


function App() {
  const store = useReducer(reducer, initState)
  const todoState = useState(initialState.todo)
  const state = { todoState }
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div name='container'>
      <DispatchContext.Provider value={store}>
        <StateContext.Provider value={state}>
          <Provider store={reduxStore}>
            <Layout>
              <MySider collapsed={collapsed} />
              <Layout className="site-layout">
                <MyHeader collapsed={collapsed} setCollapsed={setCollapsed} />
                <MyContent />
              </Layout>
            </Layout>
            <RouterView />
            <ToastContainer position='top-center' transition={Slide} autoClose={1000} />
          </Provider>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  )
}

export default App
