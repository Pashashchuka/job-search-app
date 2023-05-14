import { useState } from 'react'

import { IVacancy } from 'api'

export const useSecondaryVacancy = () => {
  const [isFillStar, setIsFillStar] = useState<boolean>(false)

  const handleStarClick = (vacancy: IVacancy) => {
    const favVacancies = JSON.parse(localStorage.getItem('favVacancies')) || []

    vacancy.favorite = true

    favVacancies.push(vacancy)
    localStorage.setItem('favVacancies', JSON.stringify(favVacancies))
    setIsFillStar(true)
  }

  return {
    isFillStar,
    handleStarClick,
  }
}
