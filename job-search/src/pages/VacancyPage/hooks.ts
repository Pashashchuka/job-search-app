import { useEffect, useState } from 'react'

import { getVacancy, IVacancy } from 'api'

export const useVacancyPage = () => {
  const vacancyId: string = JSON.parse(localStorage.getItem('vacancyId')).toString()

  const [vacancy, setVacancy] = useState<IVacancy>()

  useEffect(() => {
    const fetchVacancy = async () => {
      const response = await getVacancy(vacancyId)
      setVacancy(response)
    }
    fetchVacancy()
  }, [vacancyId])

  return { vacancy }
}
