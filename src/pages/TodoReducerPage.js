import { Layout } from 'antd'
import CollapsedButton from '../containers/CollapsedButton'
const { Header, Content } = Layout
import { useContext, useEffect } from 'react'
import Todo from '../components/Todo'
import DispatchContext from '../store/DispatchContext'

export default function TodoReducerPage() {
  const [state, dispatch] = useContext(DispatchContext)

  useEffect(() => {
    console.log(state)
  }, [state.list])

  const updateList = (cb) => {
    const newList = cb(state.list)
    dispatch({ type: 'UpdateList', list: newList })
  }

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content" >
        <h2>Todo State Reducer</h2>
        <Todo list={state.list} setList={updateList} />
      </Content>
    </Layout>
  )
}
