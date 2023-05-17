import { useForm } from 'react-hook-form'

export interface FormValues {
  catalogues: string
  payment_from: string
  payment_to: string
}

export const useVacanciesForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      catalogues: '',
      payment_from: '',
      payment_to: '',
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return {
    errors,
    control,
    onSubmit,
    handleSubmit,
  }
}
