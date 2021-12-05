import { Layout, Typography } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'
import { useState } from 'react'
import Todo from '../components/Todo'

const defaultState = {
  list: [],
}

const localStorageKey = 'TodoLocalStoragePage'

export default function TodoLocalStoragePage() {
  const [state, setState] = useState(() => {
    const state = localStorage.getItem(localStorageKey)
    console.log('load!', state)
    return state ? JSON.parse(state) : defaultState
  })

  const updateList = (cb) => {
    const list = cb(state.list)
    setState({ ...state, list })
    localStorage.setItem(localStorageKey, JSON.stringify(state))
  }

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content" >
        <Title level={3}>Todo State LocalStorage</Title>
        <Todo list={state.list} setList={updateList} />
      </Content>
    </Layout>
  )
}
