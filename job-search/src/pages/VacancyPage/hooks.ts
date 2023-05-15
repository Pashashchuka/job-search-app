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
      const favVacancies = JSON.parse(localStorage.getItem('favVacancies'))

      const response = await getVacancy(vacancyId)

      const isFavVacancy = favVacancies.some(
        (vacancy: IVacancy) => vacancy.id.toString() === vacancyId,
      )

      if (prevPathName === PATHS.FAVORITES) {
        response.favorite = true
      } else if (prevPathName === PATHS.VACANCIES && isFavVacancy) {
        response.favorite = true
      }

      setVacancy(response)
      setIsLoading(false)
    }

    fetchVacancy()
  }, [prevPathName, vacancyId])

  return { isLoading, vacancy }
}
