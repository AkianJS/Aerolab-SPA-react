import styles from '../styles/Header.module.css'

import headerImg from '../assets/header-x1.png'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img src={headerImg} alt="" />
      <h3>Electronics</h3>
    </div>
  )
}

export default Header