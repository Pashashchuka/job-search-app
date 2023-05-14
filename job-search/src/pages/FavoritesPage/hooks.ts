import { useNavigate } from 'react-router-dom'

import { IVacancy } from 'api'

import { PATHS } from 'router/paths'

export const useFavoritesPage = () => {
  const navigate = useNavigate()

  const favVacancies: IVacancy[] =
    JSON.parse(localStorage.getItem('favVacancies')) || []

  const handleBtnClick = () => {
    navigate(PATHS.VACANCIES)
  }

  const handleVacancyClick = (id: number) => {
    localStorage.setItem('vacancyId', JSON.stringify(id))
    navigate(`${PATHS.VACANCIES}/${id}`)
  }

  return {
    favVacancies,
    handleBtnClick,
    handleVacancyClick,
  }
}
