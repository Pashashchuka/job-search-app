import { useState } from 'react'

import { IVacancy } from 'api'

export const useVacancy = () => {
  const [isFillStar, setIsFillStar] = useState<boolean>(false)

  const handleStarClick = (vacancy: IVacancy) => {
    const favVacancies = JSON.parse(localStorage.getItem('favVacancies')) || []

    favVacancies.push(vacancy)
    localStorage.setItem('favVacancies', JSON.stringify(favVacancies))
    setIsFillStar(true)
  }

  return {
    isFillStar,
    handleStarClick,
  }
}
