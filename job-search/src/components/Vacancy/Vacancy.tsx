import { FC } from 'react'

import { IVacancy } from 'api'

import locationIcon from 'assets/icons/location.svg'
import fillStar from 'assets/icons/fillStar.svg'
import star from 'assets/icons/star.svg'

import { useVacancy } from './hooks'

import EmptyFavorites from 'components/EmptyFavorites'

import styles from './Vacancy.module.scss'

interface IVacancyProps {
  vacancy: IVacancy
  handleVacancyClick?: (id: number) => void
}

const Vacancy: FC<IVacancyProps> = ({ vacancy, handleVacancyClick }) => {
  const {
    isHiddenVacancy,
    isDefaultStar,
    isLastVacancy,
    isFillStar,
    handleFillStarClick,
    handleStarClick,
  } = useVacancy()

  const vacancyDataElem = `vacancy-${vacancy.id}`
  const starDataElem = `vacancy-${vacancy.id}-shortlist-button`

  return (
    <>
      {isLastVacancy ? (
        <EmptyFavorites />
      ) : (
        <div
          data-elem={vacancyDataElem}
          className={isHiddenVacancy ? styles.hidden : styles.wrapper}
          onClick={() => handleVacancyClick(vacancy.id)}
        >
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
              !vacancy.favorite || isDefaultStar
                ? styles.starIcon
                : styles.hidden
            }
            src={star}
            onClick={(event) => {
              event.stopPropagation()
              handleStarClick(vacancy)
            }}
            alt="star"
            data-elem={starDataElem}
          />
          <img
            className={
              vacancy.favorite || isFillStar
                ? styles.fillStarIcon
                : styles.hidden
            }
            src={fillStar}
            onClick={(event) => {
              event.stopPropagation()
              handleFillStarClick(vacancy)
            }}
            alt="star"
            data-elem={starDataElem}
          />
        </div>
      )}
    </>
  )
}

export default Vacancy
