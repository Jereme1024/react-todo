import { Layout } from 'antd'
import CollapsedButton from '../containers/CollapsedButton'
const { Header, Content } = Layout
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
        <h2>Todo State LocalStorage</h2>
        <Todo list={state.list} setList={updateList} />
      </Content>
    </Layout>
  )
}
