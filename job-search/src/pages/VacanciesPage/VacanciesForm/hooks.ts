import { useForm } from 'react-hook-form'

export interface FormValues {
  catalogues: string
  payment_from: string
  payment_to: string
}

export const useVacanciesForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      catalogues: '',
      payment_from: '',
      payment_to: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return {
    control,
    onSubmit,
    handleSubmit,
  }
}
