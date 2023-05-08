import { FC } from 'react'

import search from 'assets/icons/search.svg'
import close from 'assets/icons/close.svg'
import arrow from 'assets/icons/down.svg'

import Vacancy from 'components/Vacancy'
import Button from 'components/Button'
import Layout from 'components/Layout'

import styles from './SearchPage.module.scss'

const SearchPage: FC = () => {
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
              <input className={styles.salary} type="text" placeholder="От" />
              <div className={styles.arrowBlock}>
                <img className={styles.arrowUp} src={arrow} alt="arrowUp" />
                <img className={styles.arrowDown} src={arrow} alt="arrowDown" />
              </div>
            </div>
            <div className={styles.salaryWrapper}>
              <input className={styles.salary} type="text" placeholder="До" />
              <div className={styles.arrowBlock}>
                <img className={styles.arrowUp} src={arrow} alt="arrowUp" />
                <img className={styles.arrowDown} src={arrow} alt="arrowDown" />
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
              />
            </div>
            <Button className={styles.findButton} content="Поиск" />
          </div>
          <div className={styles.vacancyWrapper}>
            <Vacancy />
            <Vacancy />
            <Vacancy />
            <Vacancy />
          </div>
          <div className={styles.pagination}>
            <button className={styles.arrowBtn}>
              <img className={styles.prevIcon} src={arrow} alt="arrowPrev" />
            </button>
            <button className={styles.pageBtn}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.arrowBtn}>
              <img className={styles.nextIcon} src={arrow} alt="arrowNext" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SearchPage
