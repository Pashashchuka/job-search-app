import { FC } from 'react'

import person from 'assets/icons/person.svg'

import styles from './EmptyVacancies.module.scss'

const EmptyFavorites: FC = () => {
  return (
    <div className={styles.block}>
      <img className={styles.person} src={person} alt="person" />
      <h2 className={styles.title}>
        Упс, по вашему запросу ничего не найдено!
      </h2>
    </div>
  )
}

export default EmptyFavorites
