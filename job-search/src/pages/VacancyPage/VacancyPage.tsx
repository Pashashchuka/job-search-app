import { FC } from 'react'

import Layout from 'components/Layout'
import Loader from 'components/Loader'

import { useVacancyPage } from './hooks'

const VacancyPage: FC = () => {
  const { isLoading, vacancy } = useVacancyPage()

  return (
    <Layout>{isLoading ? <Loader /> : <h1>{vacancy.profession}</h1>}</Layout>
  )
}

export default VacancyPage
