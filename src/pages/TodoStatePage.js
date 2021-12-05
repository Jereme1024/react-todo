import { Layout, Typography } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'
import { useState } from 'react'
import Todo from '../components/Todo'

export default function TodoStatePage() {
  const [list, setList] = useState([{ checked: false, name: 'init' }])

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content" >
        <Title level={3}>Todo Basic</Title>
        <Todo list={list} setList={setList} />
      </Content>
    </Layout>
  )
}
