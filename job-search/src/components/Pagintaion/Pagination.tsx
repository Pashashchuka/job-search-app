import { FC } from 'react'

import { IVacancy } from 'api'

import arrow from 'assets/icons/down.svg'

import styles from './Pagination.module.scss'

interface IPaginationProps {
  vacancies: IVacancy[]
}

const Pagination: FC<IPaginationProps> = ({ vacancies }) => {
  const pages = []

  for (let i = 1; i <= Math.ceil(vacancies.length / 4); i++) {
    pages.push(i)
  }
  return (
    <div className={styles.pagination}>
      <button className={styles.arrowBtn}>
        <img className={styles.prevIcon} src={arrow} alt="arrowPrev" />
      </button>
      {pages.map((page) => (
        <button key={page} className={styles.pageBtn}>
          {page}
        </button>
      ))}
      <button className={styles.arrowBtn}>
        <img className={styles.nextIcon} src={arrow} alt="arrowNext" />
      </button>
    </div>
  )
}

export default Pagination
