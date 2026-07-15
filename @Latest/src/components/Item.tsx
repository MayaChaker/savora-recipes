import { useState } from "react";
import type { Ingredient } from "../types";
import styles from "./item.module.css";

function formatAmount(amount: number) {
  return Number.isInteger(amount) ? amount.toString() : amount.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function Item({ item }: { item: Ingredient }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageUrl = item.image ? `https://spoonacular.com/cdn/ingredients_100x100/${item.image}` : "";

  return (
    <li className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        {imageUrl && !imageFailed ? (
          <img className={styles.image} src={imageUrl} alt={item.name} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <span className={styles.fallback} aria-hidden="true">•</span>
        )}
      </div>
      <div className={styles.nameContainer}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.amount}>{formatAmount(item.amount)} {item.unit ?? ""}</span>
      </div>
    </li>
  );
}

export default Item;
