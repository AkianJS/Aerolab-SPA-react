import coin from "../assets/coin.svg";
import logo from "../../assets/aerolab-logo.svg";
import styles from "../styles/Navbar.module.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const {userInfo} = useContext(UserContext)
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.items}>
        <li className={styles.logo}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </li>
        <li className={styles.user}>
          <p>{userInfo?.name}</p>
        </li>
        <li className={styles.coins}>
          <p>{userInfo?.points}</p>
          <img src={coin} alt="coin" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
