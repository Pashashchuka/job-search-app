import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import {
  getAllVacancies,
  IVacancy,
  getFilteredVacancies,
  ICatalogue,
} from 'api'

import { PATHS } from 'router/paths'

export interface FormValues {
  catalogues: string
  payment_from: string
  payment_to: string
  keyword: string
}

export const useVacanciesPage = () => {
  const navigate = useNavigate()

  const favVacancies = JSON.parse(localStorage.getItem('favVacancies')) || []
  const defaultCatalogues = JSON.parse(localStorage.getItem('catalogues'))

  const [vacancies, setVacancies] = useState<IVacancy[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      catalogues: '',
      payment_from: '',
      payment_to: '',
      keyword: '',
    },
  })

  const resetValues = {
    catalogues: '',
    payment_from: '',
    payment_to: '',
    keyword: '',
  }

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      const response = await getAllVacancies()
      setVacancies(response)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true)

    const newFilteredVacancies = await getFilteredVacancies({
      ...data,
      catalogues:
        defaultCatalogues && data.catalogues
          ? defaultCatalogues.find(
              (catalogue: ICatalogue) => catalogue.title === data.catalogues,
            ).key
          : '',
    })

    setVacancies(newFilteredVacancies)
    setIsLoading(false)
  }

  const handleClickResetBtn = async () => {
    reset(resetValues)
    setIsLoading(true)

    const response = await getAllVacancies()
    setVacancies(response)

    setIsLoading(false)
  }

  const handleVacancyClick = (id: number) => {
    localStorage.setItem('vacancyId', JSON.stringify(id))
    localStorage.setItem(
      'prevPathName',
      JSON.stringify(window.location.pathname),
    )

    navigate(`${PATHS.VACANCIES}/${id}`)
  }

  const vacanciesWithoutFavVacancies = vacancies.filter((vacancy) => {
    return !favVacancies.some(
      (favVacancy: IVacancy) => favVacancy.id === vacancy.id,
    )
  })

  const indexOfLastVacancy = currentPage * 4
  const indexOfFirstVacancy = indexOfLastVacancy - 4

  const paginatedVacancies = vacanciesWithoutFavVacancies.slice(
    indexOfFirstVacancy,
    indexOfLastVacancy,
  )

  const pages = Math.ceil(vacanciesWithoutFavVacancies.length / 4)

  const handleClickArrowUpBtn = (
    salary: string,
    setSalary: Dispatch<SetStateAction<string>>,
  ) => {
    if (salary === '') {
      setSalary('1')
    } else {
      const newSalary = parseFloat(salary) + 1
      setSalary(newSalary.toString())
    }
  }

  const handleClickArrowDownBtn = (
    salary: string,
    setSalary: Dispatch<SetStateAction<string>>,
  ) => {
    if (salary === '0') {
      setSalary('0')
    } else {
      const newSalary = parseFloat(salary) - 1
      setSalary(newSalary.toString())
    }
  }

  return {
    pages,
    control,
    isLoading,
    currentPage,
    paginatedVacancies,
    onSubmit,
    handleSubmit,
    setCurrentPage,
    handleVacancyClick,
    handleClickResetBtn,
    handleClickArrowUpBtn,
    handleClickArrowDownBtn,
  }
}
