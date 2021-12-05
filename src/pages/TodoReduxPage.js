import { Layout, Typography } from 'antd'
const { Header, Content } = Layout
const { Title } = Typography
import CollapsedButton from '../containers/CollapsedButton'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../store/slices/todoSlice'

export default function TodoReduxPage() {
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
        <Title level={3}>Todo Redux</Title>
        <Todo list={state.list} setList={setList} />
      </Content>
    </Layout>
  )
}
