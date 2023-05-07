import { FC } from 'react'

import location from 'assets/icons/location.svg'
import star from 'assets/icons/star.svg'

import styles from './Vacancy.module.scss'

const Vacancy: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.vacancyBlock}>
        <h2 className={styles.title}>Менеджер-дизайнер</h2>
        <div className={styles.infoBlock}>
          <h5 className={styles.salary}>з/п от 70000 rub</h5>
          <div className={styles.dot}></div>
          <p className={styles.type}>Полный рабочий день</p>
        </div>
        <div className={styles.locationBlock}>
          <img className={styles.locationIcon} src={location} alt="location" />
          <p className={styles.city}>Новый Уренгой</p>
        </div>
      </div>
      <img className={styles.starIcon} src={star} alt="star" />
    </div>
  )
}

export default Vacancy
