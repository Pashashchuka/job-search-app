import { useEffect, useState } from 'react'

import { getAllVacancies, IVacancy } from 'api'

export const useSearchPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [vacancies, setVacancies] = useState<IVacancy[]>([])

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      const response = await getAllVacancies()
      setVacancies(response)
      setIsLoading(false)
    }
    
    fetchData()
  }, [])

  return {
    vacancies,
    isLoading,
  }
}
