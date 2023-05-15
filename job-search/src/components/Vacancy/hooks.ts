import { useState } from 'react'

import { IVacancy } from 'api'

import { PATHS } from 'router/paths'

export const useVacancy = () => {
  const [isFillStar, setIsFillStar] = useState<boolean>(false)
  const [isDefaultStar, setIsDefaultStar] = useState<boolean>(false)
  const [isHiddenVacancy, setIsHiddenVacancy] = useState<boolean>(false)

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
    const currentPathName = window.location.pathname

    vacancy.favorite = false

    const filteredFavVacancies = favVacancies.filter(
      (favVacancy: IVacancy) => favVacancy.id !== vacancy.id,
    )

    localStorage.setItem('favVacancies', JSON.stringify(filteredFavVacancies))
    setIsDefaultStar(true)
    setIsFillStar(false)

    if (currentPathName === PATHS.FAVORITES) {
      setIsHiddenVacancy(true)
    }
  }

  return {
    isFillStar,
    isDefaultStar,
    isHiddenVacancy,
    handleStarClick,
    handleFillStarClick,
  }
}
