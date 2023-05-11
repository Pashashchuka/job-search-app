import { getAllVacancies } from 'api'
import { AppDispatch } from 'store/types'

export const SET_ALL_VACANCIES = 'SET_ALL_VACANCIES'

export const fetchAllVacancies = () => async (dispatch: AppDispatch) => {
  try {
    const allVacancies = await getAllVacancies()
    dispatch({ type: SET_ALL_VACANCIES, payload: allVacancies })
  } catch (error) {
    throw new Error(`${error}`)
  }
}
