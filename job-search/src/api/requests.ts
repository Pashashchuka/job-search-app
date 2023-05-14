import axios from 'axios'

import { TGetAccessToken, TGetAllVacancies } from './types'

const BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0'
const AUTHZ_URL = `${BASE_URL}/oauth2/password`
const VAC_URL = `${BASE_URL}/vacancies/`

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
          'X-Api-App-Id': clientSecret,
        },
      },
    )
    return data.access_token
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllVacancies: TGetAllVacancies = async () => {
  try {
    const { data } = await axios.get(`${VAC_URL}`, {
      headers: {
        'x-secret-key': secretKey,
        'X-Api-App-Id': clientSecret,
      },
    })
    return data.objects
  } catch (error) {
    throw new Error(error)
  }
}
