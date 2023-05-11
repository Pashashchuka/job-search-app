import { FC } from 'react'
import { Provider } from 'react-redux'

import { getAccessToken } from 'api'

import store from 'store'

import Router from 'router'

const App: FC = () => {
  getAccessToken()

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
export default App
