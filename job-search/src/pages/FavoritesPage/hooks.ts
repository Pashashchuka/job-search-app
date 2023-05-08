import { useNavigate } from 'react-router-dom'

import { PATHS } from 'router/paths'

export const useFavoritesPage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(PATHS.SEARCH)
  }

  return {
    handleClick,
  }
}
