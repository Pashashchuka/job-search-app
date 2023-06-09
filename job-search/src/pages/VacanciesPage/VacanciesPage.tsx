import { FC } from 'react'

import search from 'assets/icons/search.svg'
import close from 'assets/icons/close.svg'

import EmptyVacancies from 'components/EmptyVacancies'
import InputSelect from 'components/InputSelect'
import Pagintaion from 'components/Pagintaion'
import Vacancy from 'components/Vacancy'
import Button from 'components/Button'
import Layout from 'components/Layout'
import Loader from 'components/Loader'
import Input from 'components/Input'

import { useVacanciesPage } from './hooks'

import styles from './VacanciesPage.module.scss'
import { Controller } from 'react-hook-form'

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
            <button
              type="reset"
              className={styles.resetBtn}
              onClick={handleClickResetBtn}
            >
              <p className={styles.resetText}>Сбросить все</p>
              <img className={styles.closeImg} src={close} alt="close" />
            </button>
          </div>
          <div className={styles.inputsWrapper}>
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
                  dataElem="salary-from-input"
                />
              </div>
              <div className={styles.salaryWrapper}>
                <Input
                  name="payment_to"
                  control={control}
                  handleArrowUpClick={handleClickArrowUpBtn}
                  handleArrowDownClick={handleClickArrowDownBtn}
                  placeholder="До"
                  dataElem="salary-to-input"
                />
              </div>
            </div>
          </div>
          <Button
            className={styles.filterButton}
            content="Применить"
            type="submit"
            dataElem="search-button"
          />
        </form>
        <div className={styles.searchBlock}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.searchWrapper}
          >
            <div className={styles.inputBlock}>
              <img
                className={styles.searchIcon}
                src={search}
                alt="searchIcon"
              />
              <Controller
                name="keyword"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    className={styles.search}
                    onChange={onChange}
                    value={value}
                    type="text"
                    placeholder="Введите название вакансии"
                    data-elem="search-input"
                  />
                )}
              />
            </div>
            <Button
              className={styles.findButton}
              content="Поиск"
              type="submit"
              dataElem="search-button"
            />
          </form>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {paginatedVacancies.length ? (
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
              ) : (
                <EmptyVacancies />
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default VacanciesPage
