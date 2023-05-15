import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllVacancies, IVacancy } from 'api'
import { PATHS } from 'router/paths'

export const useSearchPage = () => {
  const navigate = useNavigate()
  const favVacancies = JSON.parse(localStorage.getItem('favVacancies')) || []

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

  const handleVacancyClick = (id: number) => {
    localStorage.setItem('vacancyId', JSON.stringify(id))
    localStorage.setItem(
      'prevPathName',
      JSON.stringify(window.location.pathname),
    )

    navigate(`${PATHS.VACANCIES}/${id}`)
  }

  const filteredVacancies = vacancies.filter((vacancy) => {
    return !favVacancies.some(
      (favVacancy: IVacancy) => favVacancy.id === vacancy.id,
    )
  })

  return {
    isLoading,
    filteredVacancies,
    handleVacancyClick,
  }
}
