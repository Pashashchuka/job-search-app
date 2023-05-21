import { FC } from 'react'

import search from 'assets/icons/search.svg'
import close from 'assets/icons/close.svg'

import InputSelect from 'components/InputSelect'
import Pagintaion from 'components/Pagintaion'
import Vacancy from 'components/Vacancy'
import Button from 'components/Button'
import Layout from 'components/Layout'
import Loader from 'components/Loader'
import Input from 'components/Input'

import { useVacanciesPage } from './hooks'

import styles from './VacanciesPage.module.scss'

const VacanciesPage: FC = () => {
  const {
    paginatedVacancies,
    currentPage,
    isLoading,
    control,
    pages,
    handleClickArrowDownBtn,
    handleClickArrowUpBtn,
    handleClickResetBtn,
    handleVacancyClick,
    setCurrentPage,
    handleSubmit,
    onSubmit,
  } = useVacanciesPage()

  return (
    <Layout>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.filterBlock}>
          <div className={styles.titleBlock}>
            <h3 className={styles.title}>Фильтры</h3>
            <button className={styles.resetBtn} onClick={handleClickResetBtn}>
              <p className={styles.resetText}>Сбросить все</p>
              <img className={styles.closeImg} src={close} alt="close" />
            </button>
          </div>
          <div className={styles.industryBlock}>
            <h4 className={styles.subtitle}>Отрасль</h4>
            <InputSelect control={control} />
          </div>
          <div className={styles.salaryBlock}>
            <h4 className={styles.subtitle}>Оклад</h4>
            <div className={styles.salaryWrapper}>
              <Input
                name="payment_from"
                control={control}
                handleArrowUpClick={handleClickArrowUpBtn}
                handleArrowDownClick={handleClickArrowDownBtn}
                placeholder="От"
              />
            </div>
            <div className={styles.salaryWrapper}>
              <Input
                name="payment_to"
                control={control}
                handleArrowUpClick={handleClickArrowUpBtn}
                handleArrowDownClick={handleClickArrowDownBtn}
                placeholder="До"
              />
            </div>
          </div>
          <Button
            className={styles.filterButton}
            content="Применить"
            type="submit"
          />
        </form>
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
