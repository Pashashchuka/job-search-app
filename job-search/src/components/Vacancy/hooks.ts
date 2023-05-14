import { useState } from 'react'

import { IVacancy } from 'api'

export const useVacancy = () => {
  const [isFillStar, setIsFillStar] = useState<boolean>(false)

  const handleStarClick = (vacancy: IVacancy) => {
    setIsFillStar(true)
  }

  return {
    isFillStar,
    handleStarClick,
  }
}
