import React from 'react'
import { Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

const { Header } = Layout

export default function MyHeader({ collapsed, setCollapsed }) {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>
  )
}
