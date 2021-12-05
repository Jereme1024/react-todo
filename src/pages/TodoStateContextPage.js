import { Layout } from 'antd'
import CollapsedButton from '../containers/CollapsedButton'
const { Header, Content } = Layout
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
        <h2>Todo State Context</h2>
        <Todo list={state.list} setList={setList} />
      </Content>
    </Layout>
  )
}
