import styles from '../styles/Header.module.css'

import headerImg from '../assets/header-x1.png'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img src={headerImg} alt="" />
      <h3>Electronics</h3>
    </header>
  )
}

export default Header