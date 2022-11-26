import styles from "../styles/ProductCard.module.css";
import { Link } from "react-router-dom";
import coins from "../assets/coin.svg";
import buyBlue from "../assets/buy-blue.svg";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { addItemToHistory } from "../utils/getData";

const ProductCard = ({ product }) => {
  const { userInfo, setUserPoints } = useContext(UserContext);

  const handleBuyItem = () => {
    if (userInfo.points < product.cost) return

    setUserPoints(1000)
    addItemToHistory(product._id)
  }

  return (
    <li className={styles.cardContainer}>
      <Link to={`/Aerolab-SPA-react/product/${product._id}`}>
        <img src={product.img?.url} alt={product.name} />
        <p className={styles.category}>{product.category}</p>
        <p className={styles.name}>{product.name}</p>
        {userInfo.points >= product.cost ? (
          <p className={`${styles.cost}`}>
            <img src={buyBlue} alt={"buy"} />
          </p>
        ) : (
          <p className={`${styles.cost} ${styles.needMore}`}>
            {" "}
            You need {product.cost - userInfo.points}
            <img src={coins} alt={"coins"} />
          </p>
        )}
      </Link>
        <div className={`${styles.redeem}`}>
          <button onClick={handleBuyItem}>
            {userInfo.points >= product.cost ? "Redeem Now!" : "Not Enough"}
          </button>
        </div>
    </li>
  );
};

export default ProductCard;
