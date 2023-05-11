import { IVacancy } from 'api'

import { SET_ALL_VACANCIES } from 'store/actions'

interface ISetAllVacancies {
  type: typeof SET_ALL_VACANCIES
  payload: IVacancy[]
}

type AllActionTypes = ISetAllVacancies

export interface IinitialState {
  vacancies: IVacancy[]
}

const initialState = {
  vacancies: [],
}

const jobored = (
  state: IinitialState = initialState,
  action: AllActionTypes,
): IinitialState => {
  switch (action.type) {
    case SET_ALL_VACANCIES: {
      return {
        ...state,
        vacancies: action.payload,
      }
    }
    default:
      return state
  }
}

export default jobored
