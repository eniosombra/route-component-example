import { Navigate, Route, Routes } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Page1 } from '../pages/Page1'
import { Page2 } from '../pages/Page2'

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />

      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
