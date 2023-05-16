import { FC } from 'react'

import search from 'assets/icons/search.svg'
import close from 'assets/icons/close.svg'
import arrow from 'assets/icons/down.svg'

import Pagintaion from 'components/Pagintaion'
import Vacancy from 'components/Vacancy'
import Button from 'components/Button'
import Layout from 'components/Layout'
import Loader from 'components/Loader'

import { useSearchPage } from './hooks'

import styles from './VacanciesPage.module.scss'

const VacanciesPage: FC = () => {
  const {
    paginatedVacancies,
    searchParams,
    currentPage,
    salaryFrom,
    isLoading,
    salaryTo,
    pages,
    handleClickArrowDownBtn,
    handleClickArrowUpBtn,
    onChangeSearchParams,
    onChangeSalaryValue,
    handleVacancyClick,
    setCurrentPage,
    setSalaryFrom,
    setSalaryTo,
  } = useSearchPage()

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.filterBlock}>
          <div className={styles.titleBlock}>
            <h3 className={styles.title}>Фильтры</h3>
            <div className={styles.resetBlock}>
              <p className={styles.resetText}>Сбросить все</p>
              <img className={styles.closeImg} src={close} alt="close" />
            </div>
          </div>
          <div className={styles.industryBlock}>
            <h4 className={styles.subtitle}>Отрасль</h4>
            <button className={styles.industryBtn}>
              Выберете отрасль
              <img className={styles.arrow} src={arrow} alt="arrowDown" />
            </button>
          </div>
          <div className={styles.salaryBlock}>
            <h4 className={styles.subtitle}>Оклад</h4>
            <div className={styles.salaryWrapper}>
              <input
                className={styles.salary}
                onChange={(event) => onChangeSalaryValue(event, setSalaryFrom)}
                value={salaryFrom}
                type="number"
                placeholder="От"
              />
              <div className={styles.arrowBlock}>
                <img
                  className={styles.arrowUp}
                  onClick={() =>
                    handleClickArrowUpBtn(salaryFrom, setSalaryFrom)
                  }
                  src={arrow}
                  alt="arrowUp"
                />
                <img
                  className={styles.arrowDown}
                  onClick={() =>
                    handleClickArrowDownBtn(salaryFrom, setSalaryFrom)
                  }
                  src={arrow}
                  alt="arrowDown"
                />
              </div>
            </div>
            <div className={styles.salaryWrapper}>
              <input
                className={styles.salary}
                onChange={(event) => onChangeSalaryValue(event, setSalaryTo)}
                value={salaryTo}
                type="number"
                placeholder="До"
              />
              <div className={styles.arrowBlock}>
                <img
                  className={styles.arrowUp}
                  onClick={() => handleClickArrowUpBtn(salaryTo, setSalaryTo)}
                  src={arrow}
                  alt="arrowUp"
                />
                <img
                  className={styles.arrowDown}
                  onClick={() => handleClickArrowDownBtn(salaryTo, setSalaryTo)}
                  src={arrow}
                  alt="arrowDown"
                />
              </div>
            </div>
          </div>
          <Button className={styles.filterButton} content="Применить" />
        </div>
        <div className={styles.searchBlock}>
          <div className={styles.searchWrapper}>
            <div className={styles.inputBlock}>
              <img
                className={styles.searchIcon}
                src={search}
                alt="searchIcon"
              />
              <input
                className={styles.search}
                type="text"
                placeholder="Введите название вакансии"
                value={searchParams}
                onChange={(event) => onChangeSearchParams(event)}
              />
            </div>
            <Button className={styles.findButton} content="Поиск" />
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className={styles.vacancyWrapper}>
                {paginatedVacancies.map((vacancy) => (
                  <Vacancy
                    key={vacancy.id}
                    vacancy={vacancy}
                    handleVacancyClick={handleVacancyClick}
                  />
                ))}
              </div>
              <Pagintaion
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default VacanciesPage
