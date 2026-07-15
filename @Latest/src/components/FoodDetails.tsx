import { useEffect, useState } from "react";
import { getRecipeDetails } from "../services/spoonacular";
import type { RecipeDetails as RecipeDetailsType } from "../types";
import ItemList from "./ItemList";
import styles from "./fooddetails.module.css";

function FoodDetails({ foodId }: { foodId: number }) {
  const [food, setFood] = useState<RecipeDetailsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [imageFailed, setImageFailed] = useState(false);
  const [savedRecipeIds, setSavedRecipeIds] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("savora-favorites") ?? "[]") as number[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError("");
    setImageFailed(false);

    getRecipeDetails(foodId, controller.signal)
      .then(setFood)
      .catch((requestError: unknown) => {
        if (requestError instanceof DOMException && requestError.name === "AbortError") return;
        setFood(null);
        setError(requestError instanceof Error ? requestError.message : "Recipe details could not be loaded.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, [foodId]);

  if (isLoading) {
    return (
      <div className={styles.detailsSkeleton} aria-busy="true" aria-label="Loading recipe details">
        <div className={styles.heroSkeleton} />
        <div className={styles.bodySkeleton} />
        <span className="srOnly">Loading recipe details...</span>
      </div>
    );
  }

  if (error || !food) {
    return (
      <div className={styles.errorState} role="alert">
        <span aria-hidden="true">!</span>
        <h2>Recipe unavailable</h2>
        <p>{error || "Choose another recipe and try again."}</p>
      </div>
    );
  }

  const instructionSteps = food.analyzedInstructions?.flatMap((group) => group.steps ?? []) ?? [];
  const price = food.pricePerServing ? `$${(food.pricePerServing / 100).toFixed(2)}` : "—";
  const recipeId = food.id;
  const isSaved = savedRecipeIds.includes(recipeId);

  function toggleSavedRecipe() {
    setSavedRecipeIds((current) => {
      const next = current.includes(recipeId) ? current.filter((id) => id !== recipeId) : [...current, recipeId];
      localStorage.setItem("savora-favorites", JSON.stringify(next));
      window.dispatchEvent(new CustomEvent<number[]>("savora-favorites-change", { detail: next }));
      return next;
    });
  }

  return (
    <article className={styles.recipeCard}>
      <div className={styles.heroImageWrap}>
        {food.image && !imageFailed ? (
          <img
            className={styles.recipeImage}
            src={food.image}
            alt={food.title}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className={styles.imageFallback} role="img" aria-label={`No image available for ${food.title}`}>Savora</div>
        )}
        <div className={styles.imageShade} />
        <span className={styles.featuredBadge}>Today’s selection</span>
      </div>

      <div className={styles.recipeBody}>
        <div className={styles.titleRow}>
          <div>
            <span className={styles.eyebrow}>Selected recipe</span>
            <h2>{food.title}</h2>
          </div>
          <button
            className={`${styles.saveButton} ${isSaved ? styles.saved : ""}`}
            type="button"
            aria-label={isSaved ? "Remove recipe from favorites" : "Save recipe to favorites"}
            aria-pressed={isSaved}
            title={isSaved ? "Saved to favorites" : "Save to favorites"}
            onClick={toggleSavedRecipe}
          >
            <span aria-hidden="true">{isSaved ? "♥" : "♡"}</span>
          </button>
        </div>

        <div className={styles.badges} aria-label="Recipe preferences">
          {food.country && <span>{food.country}</span>}
          {food.cuisine && <span>{food.cuisine}</span>}
          {food.category && <span>{food.category}</span>}
          {food.vegetarian && <span>Vegetarian</span>}
          {food.vegan && <span>Vegan</span>}
          {!food.vegetarian && !food.vegan && !food.category && <span>Chef’s pick</span>}
        </div>

        <dl className={styles.metaGrid}>
          <div><dt>Time</dt><dd>{food.readyInMinutes ? `${food.readyInMinutes} min` : "—"}</dd></div>
          <div><dt>Serves</dt><dd>{food.servings ?? "—"}</dd></div>
          <div><dt>Per serving</dt><dd>{price}</dd></div>
        </dl>

        <section className={styles.recipeSection} aria-labelledby="ingredients-heading">
          <div className={styles.sectionTitle}>
            <div><span>What you’ll need</span><h3 id="ingredients-heading">Ingredients</h3></div>
            <span>{food.extendedIngredients?.length ?? 0} items</span>
          </div>
          <ItemList ingredients={food.extendedIngredients ?? []} />
        </section>

        <section className={styles.recipeSection} aria-labelledby="instructions-heading">
          <div className={styles.sectionTitle}>
            <div><span>From prep to plate</span><h3 id="instructions-heading">Method</h3></div>
            <span>{instructionSteps.length} steps</span>
          </div>
          {instructionSteps.length > 0 ? (
            <ol className={styles.instructions}>
              {instructionSteps.map((step, index) => (
                <li key={`${step.number}-${index}`}>
                  <span aria-hidden="true">{index + 1}</span>
                  <p>{step.step}</p>
                </li>
              ))}
            </ol>
          ) : (
            <div className={styles.emptyState}>Step-by-step instructions are not available for this recipe.</div>
          )}
        </section>

        {food.sourceUrl && (
          <a className={styles.sourceLink} href={food.sourceUrl} target="_blank" rel="noreferrer">
            View original recipe <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default FoodDetails;
