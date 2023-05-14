import { useState } from 'react'

import { IVacancy } from 'api'

export const useSecondaryVacancy = () => {
  const [isFillStar, setIsFillStar] = useState<boolean>(false)
  const [isDefaultStar, setIsDefaultStar] = useState<boolean>(true)

  const handleStarClick = (vacancy: IVacancy) => {
    const favVacancies = JSON.parse(localStorage.getItem('favVacancies')) || []

    vacancy.favorite = true

    favVacancies.push(vacancy)
    localStorage.setItem('favVacancies', JSON.stringify(favVacancies))
    setIsFillStar(true)
    setIsDefaultStar(false)
  }

  const handleFillStarClick = (vacancy: IVacancy) => {
    const favVacancies = JSON.parse(localStorage.getItem('favVacancies'))

    vacancy.favorite = false

    const filteredFavVacancies = favVacancies.filter(
      (favVacancy: IVacancy) => favVacancy.id !== vacancy.id,
    )

    localStorage.setItem('favVacancies', JSON.stringify(filteredFavVacancies))
    setIsDefaultStar(true)
    setIsFillStar(false)
  }

  return {
    isFillStar,
    isDefaultStar,
    handleStarClick,
    handleFillStarClick,
  }
}
