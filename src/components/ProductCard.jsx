import { Link } from 'react-router-dom'
import styles from '../styles/ProductCard.module.css'
import coins from '../assets/coin.svg'

const ProductCard = ({product}) => {
  return (
    <li className={styles.cardContainer}>
      <Link to={`/${product._id}`}>
        <img src={product.img?.url} alt={product.name} />
        <p className={styles.category}>{product.category}</p>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.cost}>You need {product.cost}
        <img src={coins} alt={coins} />
        </p>
      </Link>
    </li>
  )
}

export default ProductCard