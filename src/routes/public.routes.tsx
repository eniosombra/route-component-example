import { Route } from 'react-router-dom'

import { Page1 } from '../pages/Page1'
import { Page2 } from '../pages/Page2'

export function PublicRoutes() {
  return (
    <>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </>
  )
}
