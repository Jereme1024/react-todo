import { Layout } from 'antd'
import CollapsedButton from '../containers/CollapsedButton'
const { Header, Content } = Layout
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../store/slices/todoSlice'

export default function TodoStateAll() {
  const state = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  const setList = (cb) => {
    const newList = cb(JSON.parse(JSON.stringify(state.list)))
    dispatch(update(newList))
  }

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content" >
        <h2>Todo Redux</h2>
        <Todo list={state.list} setList={setList} />
      </Content>
    </Layout>
  )
}
