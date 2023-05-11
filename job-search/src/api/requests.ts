import axios from 'axios'

import { TGetAccessToken } from './types'

export const BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0'
export const AUTHZ_URL = `${BASE_URL}/oauth2/password`

const secretKey = process.env.REACT_APP_X_SECRET_KEY

const login = process.env.REACT_APP_LOGIN
const password = process.env.REACT_APP_PASSWORD
const clientId = process.env.REACT_APP_CLIEN_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET

export const getAccessToken: TGetAccessToken = async () => {
  try {
    const { data } = await axios.get(
      `${AUTHZ_URL}/?login=${login}&password=${password}&client_id=${clientId}&client_secret=${clientSecret}`,
      {
        headers: {
          'x-secret-key': secretKey,
        },
      },
    )
    localStorage.setItem('acess_token', JSON.stringify(data.access_token))

    return data.access_token
  } catch (error) {
    throw new Error(error)
  }
}
