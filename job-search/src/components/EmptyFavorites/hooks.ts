import { useNavigate } from 'react-router-dom'

import { PATHS } from 'router/paths'

export const useEmptyFavorites = () => {
  const navigate = useNavigate()

  const handleBtnClick = () => {
    navigate(PATHS.VACANCIES)
  }

  return { handleBtnClick }
}
