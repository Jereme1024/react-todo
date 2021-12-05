import { useMemo, useState } from 'react'
import {
  Input,
  Button,
  Checkbox,
  Radio,
  Divider,
  Space,
  Typography,
  List,
} from 'antd'

const { Text } = Typography

export default function Todo({ defaultMode, list, setList }) {
  const [mode, setMode] = useState(defaultMode || 'All')

  const handleAdd = (name) => {
    setList((prev) => [...prev, { checked: false, name }])
  }
  const handleDelete = (i) => {
    setList((prev) => {
      const copy = [...prev]
      copy.splice(i, 1)
      return [...copy]
    })
  }
  const handleCheck = (e, i) => {
    setList((prev) => {
      const copy = [...prev]
      copy[i].checked = e.target.checked
      return [...copy]
    })
  }

  function TodoItem({ todo, i, handleCheck, handleDelete }) {
    return (
      <li>
        <Space direction="horizontal">
          <Checkbox onClick={(e)=>handleCheck(e, i)} checked={todo.checked}></Checkbox>
          <Text>{todo.name}</Text>
          <Button danger type="primary" onClick={()=>handleDelete(i)}>Delete</Button>
        </Space>
      </li>
    )
  }

  function TodoList({ mode, list, handleCheck, handleDelete }) {
    const filteredList = useMemo(() => {
      if (mode === 'Checked') {
        return list.filter((todo) => todo.checked)
      } else if (mode === 'Unchecked') {
        return list.filter((todo) => !todo.checked)
      }
      return list
    }, [list])

    return (
      <List
        bordered
        dataSource={filteredList}
        renderItem={(todo, i) => (
          <List.Item>
            <TodoItem key={i} todo={todo} i={i} handleCheck={handleCheck} handleDelete={handleDelete} />
          </List.Item>
        )}
      />
    )
  }

  function TodoControl({ mode, handleAdd }) {
    const [name, setName] = useState('')

    return (
      <Space direction="vertical">
        <Input.Group compact>
          <Input style={{ width: 'calc(200px)' }} onChange={(e) => setName(e.target.value)} value={name} />
          <Button type="primary" onClick={() => (handleAdd(name), setName(''))}>Add</Button>
        </Input.Group>
        <Radio.Group defaultValue={mode} buttonStyle="solid" onChange={(e) => setMode(e.target.value)}>
          <Radio.Button value="All">All</Radio.Button>
          <Radio.Button value="Checked">Checked</Radio.Button>
          <Radio.Button value="Unchecked">Unchecked</Radio.Button>
        </Radio.Group>
      </Space>
    )
  }

  return (
    <>
      <TodoControl mode={mode} handleAdd={handleAdd} />
      <Divider />
      <TodoList mode={mode} list={list} handleCheck={handleCheck} handleDelete={handleDelete} />
    </>
  )
}
