export interface IVacancy {
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
}

export type TGetAccessToken = () => Promise<string>

export type TGetAllVacancies = () => Promise<IVacancy[]>
