import { FC } from 'react'

import styles from './Loader.module.scss'

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      Jobored
      <span></span>
    </div>
  )
}

export default Loader
