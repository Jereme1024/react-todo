import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingPage from '../pages/LoadingPage'
import NotFound404 from '../pages/NotFound404'

const TodoStatePage = React.lazy(() => import('../pages/TodoStatePage'))
const TodoApiPage = React.lazy(() => import('../pages/TodoApiPage'))
const TodoReducerPage = React.lazy(() => import('../pages/TodoReducerPage'))
const TodoFirestorePage = React.lazy(() => import('../pages/TodoFirestorePage'))
const TodoStateObjectPage = React.lazy(() => import('../pages/TodoStateObjectPage'))
const TodoLocalStoragePage = React.lazy(() => import('../pages/TodoLocalStoragePage'))
const TodoReduxPage = React.lazy(() => import('../pages/TodoReduxPage'))
const TodoStateContextPage = React.lazy(() => import('../pages/TodoStateContextPage'))

export default function RouterView() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<TodoStatePage />} />
        <Route path="/basic" element={<TodoStatePage />} />
        <Route path="/stateObject" element={<TodoStateObjectPage />} />
        <Route path="/mockApi" element={<TodoApiPage />} />
        <Route path="/reducer" element={<TodoReducerPage />} />
        <Route path="/localStorage" element={<TodoLocalStoragePage />} />
        <Route path="/redux" element={<TodoReduxPage />} />
        <Route path="/stateContext" element={<TodoStateContextPage />} />
        <Route path="/fireStore" element={<TodoFirestorePage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Suspense>
  )
}
