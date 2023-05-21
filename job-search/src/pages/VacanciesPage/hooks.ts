import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllVacancies, IVacancy } from 'api'

import { PATHS } from 'router/paths'

export const useVacanciesPage = () => {
  const navigate = useNavigate()

  const favVacancies = JSON.parse(localStorage.getItem('favVacancies')) || []

  const [vacancies, setVacancies] = useState<IVacancy[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      const response = await getAllVacancies()
      setVacancies(response)
      setIsLoading(false)
    }

    fetchData()
  }, [])

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
    const newSalary = parseFloat(salary) + 1
    setSalary(newSalary.toString())
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
    isLoading,
    currentPage,
    paginatedVacancies,
    setCurrentPage,
    handleVacancyClick,
    handleClickArrowUpBtn,
    handleClickArrowDownBtn,
  }
}
