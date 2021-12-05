import './App.css'
import React from 'react'
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
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout

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
            <h1>React Hook Practice</h1>
            <Layout>
              <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                  {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                  })}
                </Header>
                <Content
                  className="site-layout-background"
                  style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                  }}
                >
            Content
                </Content>
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
