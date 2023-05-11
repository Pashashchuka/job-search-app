import { IVacancy } from './../../api/types'
import { AppStateType } from 'store/types'

export const getAllVacanciesSelector = (state: AppStateType): IVacancy[] => {
  return state.jobored.vacancies
}
