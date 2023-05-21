import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IVacancy } from 'api'

import { PATHS } from 'router/paths'

export const useFavoritesPage = () => {
  const navigate = useNavigate()

  const favVacancies: IVacancy[] =
    JSON.parse(localStorage.getItem('favVacancies')) || []

  const handleVacancyClick = (id: number) => {
    localStorage.setItem('vacancyId', JSON.stringify(id))
    localStorage.setItem(
      'prevPathName',
      JSON.stringify(window.location.pathname),
    )

    navigate(`${PATHS.VACANCIES}/${id}`)
  }

  const [currentPage, setCurrentPage] = useState<number>(1)

  const indexOfLastVacancy = currentPage * 4
  const indexOfFirstVacancy = indexOfLastVacancy - 4

  const paginatedVacancies = favVacancies.slice(
    indexOfFirstVacancy,
    indexOfLastVacancy,
  )

  const pages = Math.ceil(favVacancies.length / 4)

  return {
    pages,
    currentPage,
    favVacancies,
    paginatedVacancies,
    setCurrentPage,
    handleVacancyClick,
  }
}
