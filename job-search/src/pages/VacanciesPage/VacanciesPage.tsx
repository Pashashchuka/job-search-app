import { FC } from 'react'

import search from 'assets/icons/search.svg'

import Pagintaion from 'components/Pagintaion'
import Vacancy from 'components/Vacancy'
import Button from 'components/Button'
import Layout from 'components/Layout'
import Loader from 'components/Loader'

import { useVacanciesPage } from './hooks'

import styles from './VacanciesPage.module.scss'
import VacanciesForm from './VacanciesForm'

const VacanciesPage: FC = () => {
  const {
    paginatedVacancies,
    searchParams,
    currentPage,
    isLoading,
    pages,
    handleClickArrowDownBtn,
    handleClickArrowUpBtn,
    onChangeSearchParams,
    handleVacancyClick,
    setCurrentPage,
  } = useVacanciesPage()

  return (
    <Layout>
      <div className={styles.wrapper}>
        <VacanciesForm
          handleClickArrowDownBtn={handleClickArrowDownBtn}
          handleClickArrowUpBtn={handleClickArrowUpBtn}
        />
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
