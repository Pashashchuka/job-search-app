import React from 'react'
import ReactDOM from 'react-dom/client'

import Loader from 'components/Loader'
import App from 'components/App'

import 'scss/styles.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement,
)

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
