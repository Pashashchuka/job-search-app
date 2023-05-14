import { useEffect, useState } from 'react'

import { getVacancy, IVacancy } from 'api'

export const useVacancyPage = () => {
  const vacancyId = localStorage.getItem('vacancyId')

  const [vacancy, setVacancy] = useState<IVacancy>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)

    const fetchVacancy = async () => {
      const response = await getVacancy(vacancyId)
      setVacancy(response)
      setIsLoading(false)
    }

    fetchVacancy()
  }, [vacancyId])

  return { isLoading, vacancy }
}
