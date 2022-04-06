import { Routes, Route } from 'react-router-dom'

import { Page1 } from '../pages/Page1'
import { Page2 } from '../pages/Page2'
import { PublicRoutes } from './public.routes'

function AppRoutes() {
  return (
    <>
      {/* Desta forma funciona: */}
      {/* <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes> */}

      {/* E assim apresenta erro: */}
      <Routes>
        <PublicRoutes />
      </Routes>
    </>
  )
}

export default AppRoutes
