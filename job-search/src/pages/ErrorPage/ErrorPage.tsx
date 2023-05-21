import { FC } from 'react'

import { useErrorPage } from './hooks'

import styles from './ErrorPage.module.scss'

const ErrorPage: FC = () => {
  const { handleClick } = useErrorPage()

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404 NOT FOUND</h1>
      <p onClick={handleClick} className={styles.text}>
        Keep calm and return to the previous page
      </p>
    </div>
  )
}

export default ErrorPage
