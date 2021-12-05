import { Layout, Typography } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'
import { useState } from 'react'
import Todo from '../components/Todo'
import todoApis from '../apis/todoApis'

export default function TodoApiPage() {
  const [list, setListOrigin] = useState([{ checked: false, name: 'init' }])

  const setList = async (cb) => {
    const newList = cb(list)
    await todoApis.update(newList).then(() => setListOrigin(newList)).catch(()=>{})
  }

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content" >
        <Title level={3}>Todo State API</Title>
        <Todo list={list} setList={setList} />
      </Content>
    </Layout>
  )
}
