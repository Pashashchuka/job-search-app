import { FC } from 'react'

import person from 'assets/icons/person.svg'

import Button from 'components/Button'

import { useEmptyFavorites } from './hooks'

import styles from './EmptyFavorites.module.scss'

const EmptyFavorites: FC = () => {
  const { handleBtnClick } = useEmptyFavorites()

  return (
    <div className={styles.block}>
      <img className={styles.person} src={person} alt="person" />
      <h2 className={styles.title}>Упс, здесь еще ничего нет!</h2>
      <Button
        className={styles.button}
        handleClick={handleBtnClick}
        content="Поиск Вакансий"
      />
    </div>
  )
}

export default EmptyFavorites
