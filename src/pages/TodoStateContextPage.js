import { Layout, Typography } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'
import { useContext } from 'react'
import Todo from '../components/Todo'
import StateContext from '../store/StateContext'

export default function TodoStateContextPage() {
  const { todoState: [state, setState] } = useContext(StateContext)

  const setList = (cb) => {
    setState({ ...state, list: cb(state.list) })
  }

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content" >
        <Title level={3}>Todo State Context</Title>
        <Todo list={state.list} setList={setList} />
      </Content>
    </Layout>
  )
}
