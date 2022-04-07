import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

function AppRoutes() {
  const isAuthenticated = true

  return <>{isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}</>
}

export default AppRoutes
