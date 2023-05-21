import { FC, ReactNode } from 'react'

import Header from 'components/Header'

import styles from './Layout.module.scss'

type LayotProps = {
  children: ReactNode
}

const Layout: FC<LayotProps> = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.childrenBlock}>{props.children}</div>
    </div>
  )
}

export default Layout
