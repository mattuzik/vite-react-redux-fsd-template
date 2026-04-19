import { NavLink } from 'react-router-dom'
import styles from './missing.module.scss'

const MissingPage = () => {
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.text}>This page doesn't exist</h2>
      <NavLink to="/" className={styles.link}>Visit our homepage</NavLink>
    </main>
  )
}

export default MissingPage