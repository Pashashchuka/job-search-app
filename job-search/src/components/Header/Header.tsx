import { FC } from 'react'

import { PATHS } from 'router/paths'

import logo from 'assets/icons/logo.svg'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoBlock}>
        <img className={styles.logoImg} src={logo} alt="logo" />
        <h3 className={styles.logoTitle}>Jobored</h3>
      </div>
      <nav>
        <ul className={styles.nav}>
          <a className={styles.link} href={PATHS.SEARCH}>
            Поиск Вакансий
          </a>
          <a className={styles.link} href={PATHS.FAVORITES}>
            Избранное
          </a>
        </ul>
      </nav>
    </div>
  )
}

export default Header
