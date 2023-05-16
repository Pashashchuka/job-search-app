import { FC } from 'react'

import { IVacancy } from 'api'

import person from 'assets/icons/person.svg'

import Pagintaion from 'components/Pagintaion'
import Vacancy from 'components/Vacancy'
import Layout from 'components/Layout'
import Button from 'components/Button'

import { useFavoritesPage } from './hooks'

import styles from './FavoritesPage.module.scss'

const FavoritesPage: FC = () => {
  const { handleBtnClick, handleVacancyClick, favVacancies } =
    useFavoritesPage()

  return (
    <Layout>
      <div className={styles.wrapper}>
        {favVacancies.length && favVacancies ? (
          <div className={styles.vacancyBlock}>
            {favVacancies.map((vacancy: IVacancy, index: number) => (
              <Vacancy
                key={index}
                vacancy={vacancy}
                handleVacancyClick={handleVacancyClick}
              />
            ))}
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
