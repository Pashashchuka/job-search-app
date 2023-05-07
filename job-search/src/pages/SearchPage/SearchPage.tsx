import { FC } from 'react'

import close from 'assets/icons/close.svg'
import arrow from 'assets/icons/down.svg'

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
          <button className={styles.filterButton}>Применить</button>
        </div>
        <div className={styles.searchBlock}></div>
      </div>
    </Layout>
  )
}

export default SearchPage
