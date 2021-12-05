import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { useSelector } from 'react-redux'

const { Sider } = Layout

const links = [{
  text: 'Basic',
  to: '/basic',
  icon: (<UserOutlined />),
}, {
  text: 'StateObject',
  to: '/stateObject',
  icon: (<VideoCameraOutlined />),
}, {
  text: 'API',
  to: '/mockApi',
  icon: (<UploadOutlined />),
}, {
  text: 'Reducer',
  to: '/reducer',
  icon: (<UserOutlined />),
}, {
  text: 'LocalStorage',
  to: '/localStorage',
  icon: (<VideoCameraOutlined />),
}, {
  text: 'Redux',
  to: '/redux',
  icon: (<UploadOutlined />),
}, {
  text: 'StateContext',
  to: '/stateContext',
  icon: (<UserOutlined />),
}, {
  text: 'FireStore',
  to: '/fireStore',
  icon: (<VideoCameraOutlined />),
}]

export default function NavSider() {
  const collapsed = useSelector((state) => state.app.collapsed)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} style={{
      overflow: 'auto',
      height: '100vh',
    }}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
        {
          links.map((link, index) => (
            <Menu.Item key={index} icon={link.icon}>
              <NavLink to={link.to}>{link.text}</NavLink>
            </Menu.Item>
          ))
        }
      </Menu>
    </Sider>
  )
}
