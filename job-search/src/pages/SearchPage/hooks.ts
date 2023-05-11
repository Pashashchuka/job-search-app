import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getAllVacanciesSelector } from 'store/selectors'
import { fetchAllVacancies } from 'store/actions'
import { useAppDispatch } from 'store'

export const useSearchPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllVacancies())
  }, [dispatch])

  const vacancies = useSelector(getAllVacanciesSelector)

  return {
    vacancies,
  }
}
