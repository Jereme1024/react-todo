import { Layout } from 'antd'
import CollapsedButton from '../containers/CollapsedButton'
const { Header, Content } = Layout
import { useState } from 'react'
import Todo from '../components/Todo'

export default function TodoState() {
  const [list, setList] = useState([{ checked: false, name: 'init' }])

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content" >
        <h2>Todo Basic</h2>
        <Todo list={list} setList={setList} />
      </Content>
    </Layout>
  )
}
