import { FC, useEffect } from 'react'

import { getAccessToken } from 'api'

import Router from 'router'

const App: FC = () => {
  useEffect(() => {
    getAccessToken()
  }, [])

  return <Router />
}
export default App
