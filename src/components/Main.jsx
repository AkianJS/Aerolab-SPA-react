import { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import ProductCard from "./ProductCard";
import getData from "../utils/getData";

const Main = () => {
  const [data, setData] = useState([]);
  const [isLowest, SetIsLowest] = useState(false);
  const [isHighest, SetIsHighest] = useState(false);

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);
  
  const handleSortNewest = () => {
    if (data) {
      let sorted = [...data].sort((a, b) =>
        a._id > b._id ? 1 : a._id < b._id ? -1 : 0
      );
      setData(sorted);
      SetIsHighest(false)
      SetIsLowest(false)
    }
  };
  
  const handleSortLowest = () => {
    if (data) {
      let sorted = [...data].sort((a, b) =>
      a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0
      );
      setData(sorted);
      SetIsLowest(true)
      SetIsHighest(false)
    }
  };
  
  const handleSortHighest = () => {
    if (data) {
      let sorted = [...data].sort((a, b) =>
        a.cost > b.cost ? -1 : a.cost < b.cost ? 1 : 0
      );
      setData(sorted);
      SetIsHighest(true)
      SetIsLowest(false)
    }
  };
  
  return (
    <main>
      <header className={styles.header}>
        <p>16 of 32 products</p>
        <p>Sort by:</p>
        <button className={!isLowest && !isHighest? styles.active : null}
        onClick={handleSortNewest}>
          Most recent
        </button>
        <button onClick={handleSortLowest}
        className={isLowest? styles.active : null}>Lower price</button>
        <button onClick={handleSortHighest} className={isHighest ? styles.active : null}>Highest price</button>
      </header>

      <ul className={styles.products}>
        {data.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
