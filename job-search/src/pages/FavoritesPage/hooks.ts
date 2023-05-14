import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IVacancy } from 'api'

import { PATHS } from 'router/paths'

export const useFavoritesPage = () => {
  const navigate = useNavigate()

  const [isEmptyArr, setIsEmptyArr] = useState<boolean>(true)
  const favVacancies: IVacancy[] = JSON.parse(
    localStorage.getItem('favVacancies'),
  )

  useEffect(() => {
    const favVacancies: IVacancy[] = JSON.parse(
      localStorage.getItem('favVacancies'),
    )

    if (favVacancies.length === 0) {
      setIsEmptyArr(true)
    } else {
      setIsEmptyArr(false)
    }
  }, [favVacancies.length])

  const handleBtnClick = () => {
    navigate(PATHS.VACANCIES)
  }

  return {
    isEmptyArr,
    favVacancies,
    handleBtnClick,
  }
}
