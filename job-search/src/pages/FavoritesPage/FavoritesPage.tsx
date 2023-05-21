import { FC } from 'react'

import { IVacancy } from 'api'

import EmptyFavorites from 'components/EmptyFavorites'
import Pagintaion from 'components/Pagintaion'
import Vacancy from 'components/Vacancy'
import Layout from 'components/Layout'

import { useFavoritesPage } from './hooks'

import styles from './FavoritesPage.module.scss'

const FavoritesPage: FC = () => {
  const {
    paginatedVacancies,
    favVacancies,
    currentPage,
    pages,
    handleVacancyClick,
    setCurrentPage,
  } = useFavoritesPage()

  return (
    <Layout>
      <div className={styles.wrapper}>
        {favVacancies.length && favVacancies ? (
          <div className={styles.vacancyBlock}>
            {paginatedVacancies.map((vacancy: IVacancy, index: number) => (
              <Vacancy
                key={index}
                vacancy={vacancy}
                handleVacancyClick={handleVacancyClick}
              />
            ))}
            <Pagintaion
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <EmptyFavorites />
        )}
      </div>
    </Layout>
  )
}

export default FavoritesPage
