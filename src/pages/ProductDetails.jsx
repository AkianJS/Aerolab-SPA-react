import styles from '../styles/ProductDetails.module.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../designed-components/Loading";
import getData from "../utils/getData";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getData().then((data) => {
      const found = data.find(item => item._id == id);
      setProduct(found)
    });

}, [id]);
  console.log(product)
  if (!product) {
    return <Loading/>;
  }

  return (
    <div className={styles.container}>
    <img src={product.img?.hdUrl} alt={product.name}/>
    <div className={styles.itemDescription}>
      <p>Category: {product.category}</p>
      <p>Name: {product.name}</p>
      <p>Cost: {product.cost}</p>
    </div>

    </div>
  );
};

export default ProductDetails;
