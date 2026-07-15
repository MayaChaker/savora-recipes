import { useEffect, useRef } from "react";
import FoodDetails from "./FoodDetails";
import styles from "./RecipeModal.module.css";

interface RecipeModalProps {
  foodId: number;
  onClose: () => void;
}

function RecipeModal({ foodId, onClose }: RecipeModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} role="presentation" onMouseDown={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Recipe details"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button ref={closeButtonRef} className={styles.closeButton} type="button" onClick={onClose} aria-label="Close recipe details">
          <span aria-hidden="true">×</span>
        </button>
        <FoodDetails foodId={foodId} />
      </div>
    </div>
  );
}

export default RecipeModal;
