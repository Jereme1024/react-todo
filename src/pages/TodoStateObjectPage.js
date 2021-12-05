import { Layout, Typography } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'
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
        <Title level={3}>Todo State All</Title>
        <Todo list={state.list} setList={setList} />
      </Content>
    </Layout>
  )
}
