import { FC } from 'react'

import locationIcon from 'assets/icons/location.svg'
import star from 'assets/icons/star.svg'

import styles from './Vacancy.module.scss'

interface IVacancyProps {
  profession?: string
  salary?: number
  schedule?: string
  location?: string
}

const Vacancy: FC<IVacancyProps> = ({
  profession,
  salary,
  schedule,
  location,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.vacancyBlock}>
        <h2 className={styles.title}>{profession}</h2>
        <div className={styles.infoBlock}>
          <h5 className={styles.salary}>з/п от {salary} rub</h5>
          <div className={styles.dot}></div>
          <p className={styles.type}>{schedule}</p>
        </div>
        <div className={styles.locationBlock}>
          <img
            className={styles.locationIcon}
            src={locationIcon}
            alt="location"
          />
          <p className={styles.city}>{location}</p>
        </div>
      </div>
      <img className={styles.starIcon} src={star} alt="star" />
    </div>
  )
}

export default Vacancy
