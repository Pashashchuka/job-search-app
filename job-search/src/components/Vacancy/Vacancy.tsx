import { FC } from 'react'

import locationIcon from 'assets/icons/location.svg'
import star from 'assets/icons/star.svg'

import styles from './Vacancy.module.scss'

interface IVacancyProps {
  profession?: string
  salaryFrom?: number
  salaryTo?: number
  schedule?: string
  location?: string
  currency?: string
  id?: number
  handleVacancyClick?: (id: number) => void
}

const Vacancy: FC<IVacancyProps> = ({
  profession,
  salaryFrom,
  salaryTo,
  schedule,
  location,
  currency,
  id,
  handleVacancyClick,
}) => {
  return (
    <div className={styles.wrapper} onClick={() => handleVacancyClick(id)}>
      <div className={styles.vacancyBlock}>
        <h2 className={styles.title}>{profession}</h2>
        <div className={styles.infoBlock}>
          {salaryFrom === 0 && salaryTo === 0 && (
            <h5 className={styles.salary}>з/п не указана</h5>
          )}
          {salaryFrom === 0 && salaryTo !== 0 && (
            <h5 className={styles.salary}>
              з/п до {salaryTo} {currency}
            </h5>
          )}
          {salaryFrom !== 0 && salaryTo === 0 && (
            <h5 className={styles.salary}>
              з/п от {salaryFrom} {currency}
            </h5>
          )}
          {salaryFrom !== 0 && salaryTo !== 0 && (
            <h5 className={styles.salary}>
              з/п {salaryFrom} - {salaryTo} {currency}
            </h5>
          )}
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
