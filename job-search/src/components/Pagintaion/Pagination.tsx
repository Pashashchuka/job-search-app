import { Dispatch, FC, SetStateAction } from 'react'

import arrow from 'assets/icons/down.svg'

import styles from './Pagination.module.scss'

interface IPaginationProps {
  pages: number
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

const Pagination: FC<IPaginationProps> = ({
  pages,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [...Array(pages + 1).keys()].slice(1)

  const handleClickPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const handleClickNextPage = () => {
    if (currentPage !== pages) setCurrentPage(currentPage + 1)
  }

  const handleClickPageBtn = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className={styles.pagination} id="pagination">
      <button
        className={styles.arrowBtn}
        onClick={handleClickPrevPage}
        disabled={currentPage === 1}
      >
        <img className={styles.prevIcon} src={arrow} alt="arrowPrev" />
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={
            page !== currentPage ? styles.pageBtn : styles.pageBtnActive
          }
          onClick={() => handleClickPageBtn(page)}
        >
          {page}
        </button>
      ))}
      <button className={styles.arrowBtn} onClick={handleClickNextPage}>
        <img className={styles.nextIcon} src={arrow} alt="arrowNext" />
      </button>
    </div>
  )
}

export default Pagination
