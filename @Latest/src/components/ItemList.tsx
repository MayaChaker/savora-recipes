import type { Ingredient } from "../types";
import Item from "./Item";
import styles from "./ItemList.module.css";

function ItemList({ ingredients }: { ingredients: Ingredient[] }) {
  if (ingredients.length === 0) {
    return <div className={styles.empty}>Ingredient information is not available for this recipe.</div>;
  }

  return (
    <ul className={styles.list}>
      {ingredients.map((item, index) => (
        <Item item={item} key={`${item.id ?? item.name}-${index}`} />
      ))}
    </ul>
  );
}

export default ItemList;
