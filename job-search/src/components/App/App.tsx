import { FC, useEffect } from 'react'

import { getAccessToken, getCatalogues } from 'api'

import Router from 'router'

const App: FC = () => {
  
  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken()

      localStorage.setItem('acess_token', JSON.stringify(token))
    }
    fetchAccessToken()
  }, [])

  return <Router />
}
export default App
