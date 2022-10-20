import { Link } from "react-router-dom";
import coin from "../assets/coin.svg";
import logo from "../../assets/aerolab-logo.svg";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.items}>
          <li className={styles.logo}>
        <a href="/Aerolab-SPA-react/">
            <img src={logo} alt="logo" />
        </a>
        
          </li>
        <li className={styles.user}>
          <p>AkianJS</p>
        </li>
        <li className={styles.coins}>
          <p>6000</p>
          <img src={coin} alt="coin" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
