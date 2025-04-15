import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import IndexRoute from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IndexRoute />
  </StrictMode>,
)
