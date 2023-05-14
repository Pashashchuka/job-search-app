import { FC } from 'react'

import { IVacancy } from 'api'

import person from 'assets/icons/person.svg'
import arrow from 'assets/icons/down.svg'

import Vacancy from 'components/Vacancy'
import Layout from 'components/Layout'
import Button from 'components/Button'

import { useFavoritesPage } from './hooks'

import styles from './FavoritesPage.module.scss'

const FavoritesPage: FC = () => {
  const { handleBtnClick, favVacancies, isEmptyArr } = useFavoritesPage()

  return (
    <Layout>
      <div className={styles.wrapper}>
        {!isEmptyArr ? (
          <div className={styles.vacancyBlock}>
            {favVacancies.map((vacancy: IVacancy, index: number) => (
              <Vacancy key={index} vacancy={vacancy} />
            ))}
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
        ) : (
          <div className={styles.block}>
            <img className={styles.person} src={person} alt="person" />
            <h2 className={styles.title}>Упс, здесь еще ничего нет!</h2>
            <Button
              className={styles.button}
              handleClick={handleBtnClick}
              content="Поиск Вакансий"
            />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default FavoritesPage
