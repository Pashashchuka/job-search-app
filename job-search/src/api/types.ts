import { FormValues } from 'pages/VacanciesPage/hooks'

export interface ICatalogue {
  title: string
  key: number
}
export interface IVacancy {
  catalogues: ICatalogue[]
  profession: string
  firm_name: string
  town: {
    title: string
  }
  type_of_work: {
    title: string
  }
  payment_to: number
  payment_from: number
  currency: string
  id: number
  vacancyRichText?: string
  favorite: boolean
}

export type TGetAccessToken = () => Promise<string>

export type TGetAllVacancies = () => Promise<IVacancy[]>

export type TGetVacancy = (id: string) => Promise<IVacancy>

export type TGetCatalogues = () => Promise<ICatalogue[]>

export type TGetFilteredVacancies = (
  formValues: FormValues,
) => Promise<IVacancy[]>
