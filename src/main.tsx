import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
