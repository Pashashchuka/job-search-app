import { useEffect, useState } from 'react'

import { getVacancy, IVacancy } from 'api'
import { PATHS } from 'router/paths'

export const useVacancyPage = () => {
  const prevPathName = JSON.parse(localStorage.getItem('prevPathName'))
  const vacancyId = localStorage.getItem('vacancyId')

  const [vacancy, setVacancy] = useState<IVacancy>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)

    const fetchVacancy = async () => {
      const response = await getVacancy(vacancyId)

      if (prevPathName === PATHS.FAVORITES) {
        response.favorite = true
      } else {
        response.favorite = false
      }

      setVacancy(response)
      setIsLoading(false)
    }

    fetchVacancy()
  }, [prevPathName, vacancyId])

  return { isLoading, vacancy }
}
