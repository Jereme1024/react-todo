import { Layout } from 'antd'
import CollapsedButton from '../containers/CollapsedButton'
const { Header, Content } = Layout
import { doc, getDoc, updateDoc } from '@firebase/firestore'
import { useEffect, useState, useRef } from 'react'
import Todo from '../components/Todo'
import db from '../utils/firebase.config'

export default function TodoFirestorePage() {
  const [list, setList] = useState([])
  const docRef = useRef()

  useEffect(async () => {
    docRef.current = doc(db, 'todos', '9JLLyPhq8TwVAOAkMOu0')
    const docSnap = await getDoc(docRef.current)
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data())
      setList((prev) => [...prev, ...docSnap.data().list])
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
  }, [])

  const updateList = async (cb) => {
    try {
      const newList = cb(list)
      await updateDoc(docRef.current, { list })
      setList(newList)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <CollapsedButton />
      </Header>
      <Content className="site-layout-background my-content" >
        <h2>Todo State</h2>
        <Todo list={list} setList={updateList} />
      </Content>
    </Layout>
  )
}
