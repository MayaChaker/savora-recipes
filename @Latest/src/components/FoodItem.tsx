import { useState } from "react";
import type { RecipeSummary } from "../types";
import styles from "./FoodItem.module.css";

interface FoodItemProps {
  food: RecipeSummary;
  isSelected: boolean;
  setFoodId: (id: number) => void;
}

function FoodItem({ food, isSelected, setFoodId }: FoodItemProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className={`${styles.card} ${isSelected ? styles.selected : ""}`}>
      <div className={styles.imageWrap}>
        {food.image && !imageFailed ? (
          <img
            className={styles.image}
            src={food.image}
            alt={food.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className={styles.imageFallback} role="img" aria-label={`No image available for ${food.title}`}>
            <span aria-hidden="true">S</span>
          </div>
        )}
        <span className={styles.badge}>{isSelected ? "Selected" : "Fresh pick"}</span>
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{food.country ? `${food.country} · ${food.cuisine ?? "Signature dish"}` : food.cuisine ?? "World kitchen"}</p>
        <h3>{food.title}</h3>
        <button type="button" onClick={() => setFoodId(food.id)} aria-pressed={isSelected}>
          <span>{isSelected ? "Viewing recipe" : "View recipe"}</span>
          <span className={styles.arrow} aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

export default FoodItem;
