import { FC } from 'react'

import SecondaryVacancy from 'components/SecondaryVacancy'
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
             vacancy={vacancy}
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
