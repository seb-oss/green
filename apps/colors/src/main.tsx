import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './app/app'

const domNode = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(domNode)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
