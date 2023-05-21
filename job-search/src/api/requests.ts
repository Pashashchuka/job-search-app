import axios from 'axios'

import {
  TGetAccessToken,
  TGetAllVacancies,
  TGetCatalogues,
  TGetFilteredVacancies,
  TGetVacancy,
} from './types'

const BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0'
const AUTHORIZATION_URL = `${BASE_URL}/oauth2/password`
const CATALOGUES_URL = `${BASE_URL}/catalogues/`
const VACANCIES_URL = `${BASE_URL}/vacancies/`

const secretKey = process.env.REACT_APP_X_SECRET_KEY

const login = process.env.REACT_APP_LOGIN
const password = process.env.REACT_APP_PASSWORD
const clientId = process.env.REACT_APP_CLIEN_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET

export const getAccessToken: TGetAccessToken = async () => {
  try {
    const { data } = await axios.get(
      `${AUTHORIZATION_URL}/?login=${login}&password=${password}&client_id=${clientId}&client_secret=${clientSecret}`,
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
    const { data } = await axios.get(`${VACANCIES_URL}`, {
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

export const getVacancy: TGetVacancy = async (id: string) => {
  try {
    const { data } = await axios.get(`${VACANCIES_URL}${id}/`, {
      headers: {
        'x-secret-key': secretKey,
        'X-Api-App-Id': clientSecret,
      },
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getCatalogues: TGetCatalogues = async () => {
  try {
    const { data } = await axios.get(`${CATALOGUES_URL}`, {
      headers: {
        'x-secret-key': secretKey,
        'X-Api-App-Id': clientSecret,
      },
    })
    const catalogues = data.map(({ title }: { title: string }) => title)
    return catalogues
  } catch (error) {
    throw new Error(error)
  }
}

export const getFilteredVacancies: TGetFilteredVacancies = async (
  formValues,
) => {
  try {
    const { data } = await axios.get(
      `${VACANCIES_URL}?order_field=payment&&payment_from=${formValues.payment_from}&payment_to=${formValues.payment_to}&catalogues=${formValues.catalogues}`,
      {
        headers: {
          'x-secret-key': secretKey,
          'X-Api-App-Id': clientSecret,
        },
      },
    )
    return data.objects
  } catch (error) {
    throw new Error(error)
  }
}
