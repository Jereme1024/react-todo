import { Layout } from 'antd'
import CollapsedButton from '../containers/CollapsedButton'
const { Header, Content } = Layout
import { useState } from 'react'
import Todo from '../components/Todo'

const defaultState = {
  list: [],
}

export default function TodoStateObjectPage() {
  const [state, setState] = useState(defaultState)

  const setList = (cb) => {
    setState({ ...state, list: cb(state.list) })
  }

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content" >
        <h2>Todo State All</h2>
        <Todo list={state.list} setList={setList} />
      </Content>
    </Layout>
  )
}
