import type { RecipeSummary } from "../types";
import FoodItem from "./FoodItem";
import styles from "./FoodList.module.css";

interface FoodListProps {
  foodData: RecipeSummary[];
  selectedFoodId: number | null;
  setFoodId: (id: number) => void;
  isLoading: boolean;
  error: string;
  hasSearched: boolean;
}

function FoodList({ foodData, selectedFoodId, setFoodId, isLoading, error, hasSearched }: FoodListProps) {
  if (isLoading) {
    return (
      <div className={styles.grid} aria-label="Loading recipes" aria-busy="true">
        {Array.from({ length: 6 }, (_, index) => (
          <div className={styles.skeleton} key={index} aria-hidden="true">
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonLineShort} />
          </div>
        ))}
        <span className="srOnly">Loading recipes...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.state} role="alert" aria-live="polite">
        <span className={styles.stateIcon} aria-hidden="true">!</span>
        <h3>We couldn’t load recipes</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (hasSearched && foodData.length === 0) {
    return (
      <div className={styles.state} aria-live="polite">
        <span className={styles.stateIcon} aria-hidden="true">0</span>
        <h3>No recipes found</h3>
        <p>Try a broader ingredient, dish, or cuisine.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid} aria-live="polite">
      {foodData.map((food) => (
        <FoodItem
          food={food}
          isSelected={food.id === selectedFoodId}
          setFoodId={setFoodId}
          key={food.id}
        />
      ))}
    </div>
  );
}

export default FoodList;
