import { FC } from 'react'

import { IVacancy } from 'api'

import locationIcon from 'assets/icons/location.svg'
import fillStar from 'assets/icons/fillStar.svg'
import star from 'assets/icons/star.svg'

import { useSecondaryVacancy } from './hooks'

import styles from './SecondaryVacancy.module.scss'

interface ISecondaryVacancyProps {
  vacancy: IVacancy
}

const SecondaryVacancy: FC<ISecondaryVacancyProps> = ({ vacancy }) => {
  const { isFillStar, handleStarClick } = useSecondaryVacancy()

  return (
    <div className={styles.wrapper}>
      <div className={styles.vacancyBlock}>
        <h2 className={styles.title}>{vacancy.profession}</h2>
        <div className={styles.infoBlock}>
          {vacancy.payment_from === 0 && vacancy.payment_to === 0 && (
            <h5 className={styles.salary}>з/п не указана</h5>
          )}
          {vacancy.payment_from === 0 && vacancy.payment_to !== 0 && (
            <h5 className={styles.salary}>
              з/п до {vacancy.payment_to} {vacancy.currency}
            </h5>
          )}
          {vacancy.payment_from !== 0 && vacancy.payment_to === 0 && (
            <h5 className={styles.salary}>
              з/п от {vacancy.payment_from} {vacancy.currency}
            </h5>
          )}
          {vacancy.payment_from !== 0 && vacancy.payment_to !== 0 && (
            <h5 className={styles.salary}>
              з/п {vacancy.payment_from} - {vacancy.payment_to}{' '}
              {vacancy.currency}
            </h5>
          )}
          <div className={styles.dot}></div>
          <p className={styles.type}>{vacancy.type_of_work.title}</p>
        </div>
        <div className={styles.locationBlock}>
          <img
            className={styles.locationIcon}
            src={locationIcon}
            alt="location"
          />
          <p className={styles.city}>{vacancy.town.title}</p>
        </div>
      </div>
      <img
        className={
          vacancy.favorite || isFillStar
            ? styles.hiddenStarIcon
            : styles.starIcon
        }
        src={star}
        onClick={(event) => {
          event.stopPropagation()
          handleStarClick(vacancy)
        }}
        alt="star"
      />
      <img
        className={
          vacancy.favorite || isFillStar
            ? styles.fillStarIcon
            : styles.hiddenStarIcon
        }
        src={fillStar}
        onClick={(event) => {
          event.stopPropagation()
        }}
        alt="star"
      />
    </div>
  )
}

export default SecondaryVacancy
