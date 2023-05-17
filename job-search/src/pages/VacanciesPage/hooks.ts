import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllVacancies, IVacancy } from 'api'

import { PATHS } from 'router/paths'

export const useSearchPage = () => {
  const navigate = useNavigate()
  const favVacancies = JSON.parse(localStorage.getItem('favVacancies')) || []

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [vacancies, setVacancies] = useState<IVacancy[]>([])
  const [searchParams, setSearchParams] = useState<string>('')
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

  const filteredVacancies = vacancies.filter((vacancy) => {
    return !favVacancies.some(
      (favVacancy: IVacancy) => favVacancy.id === vacancy.id,
    )
  })

  const searchVacancies = filteredVacancies.filter((vacancy) =>
    vacancy.profession.toLowerCase().includes(searchParams.toLowerCase()),
  )

  const onChangeSearchParams = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSearchParams(event.target.value)
  }

  const indexOfLastVacancy = currentPage * 4
  const indexOfFirstVacancy = indexOfLastVacancy - 4

  const paginatedVacancies = searchVacancies.slice(
    indexOfFirstVacancy,
    indexOfLastVacancy,
  )

  const pages = Math.ceil(searchVacancies.length / 4)

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
    searchParams,
    paginatedVacancies,
    setCurrentPage,
    handleVacancyClick,
    onChangeSearchParams,
    handleClickArrowUpBtn,
    handleClickArrowDownBtn,
  }
}
