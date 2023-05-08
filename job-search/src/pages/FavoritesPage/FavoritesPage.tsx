import { FC } from 'react'

import person from 'assets/icons/person.svg'

import Layout from 'components/Layout'
import Button from 'components/Button'

import { useFavoritesPage } from './hooks'

import styles from './FavoritesPage.module.scss'

const FavoritesPage: FC = () => {
  const { handleClick } = useFavoritesPage()

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <img className={styles.person} src={person} alt="person" />
          <h2 className={styles.title}>Упс, здесь еще ничего нет!</h2>
          <Button
            className={styles.button}
            handleClick={handleClick}
            content="Поиск Вакансий"
          />
        </div>
      </div>
    </Layout>
  )
}

export default FavoritesPage
