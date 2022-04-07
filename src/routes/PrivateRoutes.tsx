import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { PageNotFound } from '../pages/PageNotFound'
import { Reports } from '../pages/Reports'

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />

      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}
