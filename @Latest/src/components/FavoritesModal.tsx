import { useEffect, useRef } from "react";
import type { RecipeDetails } from "../types";
import styles from "./FavoritesModal.module.css";

interface FavoritesModalProps {
  recipes: RecipeDetails[];
  onClose: () => void;
  onSelect: (id: number) => void;
}

function FavoritesModal({ recipes, onClose, onSelect }: FavoritesModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} role="presentation" onMouseDown={onClose}>
      <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="favorites-heading" onMouseDown={(event) => event.stopPropagation()}>
        <header className={styles.header}>
          <div><span>Your collection</span><h2 id="favorites-heading">My Favorites</h2></div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close favorites">×</button>
        </header>
        {recipes.length > 0 ? (
          <div className={styles.grid}>
            {recipes.map((recipe) => (
              <article className={styles.card} key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <div>
                  <span>{recipe.country ?? recipe.cuisine ?? "World kitchen"}</span>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.readyInMinutes ?? "—"} min · Serves {recipe.servings ?? "—"}</p>
                  <button type="button" onClick={() => onSelect(recipe.id)}>View recipe <span aria-hidden="true">→</span></button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span aria-hidden="true">♡</span>
            <h3>Your collection is waiting</h3>
            <p>Open any recipe and tap the heart to save it here for later.</p>
            <button type="button" onClick={onClose}>Explore recipes</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default FavoritesModal;
