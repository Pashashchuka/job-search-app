import { FC } from 'react'

import SecondaryVacancy from 'components/SecondaryVacation'
import Layout from 'components/Layout'
import Loader from 'components/Loader'

import { useVacancyPage } from './hooks'

import styles from './VacancyPage.module.scss'

const VacancyPage: FC = () => {
  const { isLoading, vacancy } = useVacancyPage()

  return (
    <Layout>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <SecondaryVacancy
              profession={vacancy.profession}
              salaryFrom={vacancy.payment_from}
              salaryTo={vacancy.payment_to}
              location={vacancy.town.title}
              schedule={vacancy.type_of_work.title}
              currency={vacancy.currency}
            />
            <div
              className={styles.block}
              dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}
            ></div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default VacancyPage
