import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const TodoState = React.lazy(() => import('../pages/TodoState'))
const TodoStateApi = React.lazy(() => import('../pages/TodoStateApi'))
const TodoReducer = React.lazy(() => import('../pages/TodoReducer'))
const TodoFirestore = React.lazy(() => import('../pages/TodoFirestore'))
const TodoStateAll = React.lazy(() => import('../pages/TodoStateAll'))
const TodoStateAllLocalStorage = React.lazy(() => import('../pages/TodoStateAllLocalStorage'))
const TodoRedux = React.lazy(() => import('../pages/TodoRedux'))
const TodoStateContext = React.lazy(() => import('../pages/TodoStateContext'))

export default function RouterView() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<TodoState />} />
        <Route path="/basic" element={<TodoState />} />
        <Route path="/stateObject" element={<TodoStateAll />} />
        <Route path="/mockApi" element={<TodoStateApi />} />
        <Route path="/reducer" element={<TodoReducer />} />
        <Route path="/localStorage" element={<TodoStateAllLocalStorage />} />
        <Route path="/redux" element={<TodoRedux />} />
        <Route path="/stateContext" element={<TodoStateContext />} />
        <Route path="/fireStore" element={<TodoFirestore />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Suspense>
  )
}