import { useEffect, useState } from "react";
import { getRecipeDetails } from "../../services/spoonacular";
import { getFavoriteRecipeIds, saveFavoriteRecipeIds } from "../../utils/favorites";
import ItemList from "./ItemList";

const emptyStateClass = "rounded-xl border border-dashed border-[#cfd5ce] bg-[#faf9f4] p-5 text-xs leading-6 text-[#687169]";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [imageFailed, setImageFailed] = useState(false);
  const [savedRecipeIds, setSavedRecipeIds] = useState(getFavoriteRecipeIds);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError("");
    setImageFailed(false);

    getRecipeDetails(foodId, controller.signal)
      .then(setFood)
      .catch((requestError) => {
        if (requestError instanceof DOMException && requestError.name === "AbortError") return;
        setFood(null);
        setError(requestError instanceof Error ? requestError.message : "Recipe details could not be loaded.");
      })
      .finally(() => { if (!controller.signal.aborted) setIsLoading(false); });

    return () => controller.abort();
  }, [foodId]);

  if (isLoading) return <div className="overflow-hidden rounded-[30px] border border-[#e4e1d8] bg-[#fffdf8]" aria-busy="true" aria-label="Loading recipe details"><div className="min-h-[340px] animate-pulse bg-[#eceae3] max-[560px]:min-h-[250px]" /><div className="m-8 h-[420px] animate-pulse rounded-[20px] bg-[#eceae3]" /><span className="sr-only">Loading recipe details...</span></div>;

  if (error || !food) return <div className="grid min-h-[390px] place-items-center content-center rounded-[30px] border border-[#e4e1d8] bg-[#fffdf8] p-10 text-center shadow-[0_8px_24px_rgba(29,49,37,.08)]" role="alert"><span className="grid size-11 place-items-center rounded-full bg-[#f8e7db] font-bold text-[#a7522d]">!</span><h2 className="mt-4 mb-2 font-display text-2xl text-[#173c2c]">Recipe unavailable</h2><p className="m-0 max-w-[380px] leading-6 text-[#687169]">{error || "Choose another recipe and try again."}</p></div>;

  const instructionSteps = food.analyzedInstructions?.flatMap((group) => group.steps ?? []) ?? [];
  const price = food.pricePerServing ? `$${(food.pricePerServing / 100).toFixed(2)}` : "—";
  const isSaved = savedRecipeIds.includes(food.id);

  function toggleSavedRecipe() {
    setSavedRecipeIds((current) => {
      const next = current.includes(food.id) ? current.filter((id) => id !== food.id) : [...current, food.id];
      saveFavoriteRecipeIds(next);
      return next;
    });
  }

  return (
    <article className="overflow-hidden rounded-[30px] border border-[#e4e1d8] bg-[#fffdf8] shadow-[0_20px_60px_rgba(29,49,37,.12)]">
      <div className="relative min-h-[340px] overflow-hidden bg-[#dae4da] [aspect-ratio:1.55] max-[560px]:min-h-[250px]">
        {food.image && !imageFailed ? <img className="h-full w-full object-cover" src={food.image} alt={food.title} onError={() => setImageFailed(true)} /> : <div className="grid h-full min-h-[340px] place-items-center bg-[linear-gradient(135deg,#315f44,#8bb18c)] font-display text-[2rem] text-white/80 max-[560px]:min-h-[250px]" role="img" aria-label={`No image available for ${food.title}`}>Savora</div>}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(16,42,30,.4),transparent_50%)]" />
        <span className="absolute bottom-5 left-[22px] rounded-full bg-[#dc8b3f] px-[11px] py-[7px] text-[.66rem] font-bold tracking-[.04em] text-[#2e251d] uppercase">Today’s selection</span>
      </div>

      <div className="p-[clamp(24px,4vw,38px)] max-[560px]:px-5 max-[560px]:py-[23px]">
        <div className="flex items-start justify-between gap-[18px]">
          <div><span className="mb-[7px] block text-[.65rem] font-bold tracking-[.13em] text-[#3f8a62] uppercase">Selected recipe</span><h2 className="m-0 font-display text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.08] tracking-[-.025em] text-[#173c2c]">{food.title}</h2></div>
          <button className={`grid size-[43px] shrink-0 place-items-center rounded-full border text-[1.35rem] transition hover:scale-105 ${isSaved ? "border-[#e5b4a2] bg-[#fff2ec] text-[#b74c32]" : "border-[#e4e1d8] bg-white text-[#246044] hover:bg-[#e8f1e9]"}`} type="button" aria-label={isSaved ? "Remove recipe from favorites" : "Save recipe to favorites"} aria-pressed={isSaved} onClick={toggleSavedRecipe}><span aria-hidden="true">{isSaved ? "♥" : "♡"}</span></button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2" aria-label="Recipe preferences">{[food.country, food.cuisine, food.category, food.vegetarian && "Vegetarian", food.vegan && "Vegan", !food.vegetarian && !food.vegan && !food.category && "Chef’s pick"].filter(Boolean).map((badge) => <span className="rounded-full bg-[#e8f1e9] px-2.5 py-1.5 text-[.66rem] font-bold text-[#246044]" key={badge}>{badge}</span>)}</div>

        <dl className="mt-[26px] grid grid-cols-3 border-y border-[#e4e1d8] py-[18px]">{[["Time", food.readyInMinutes ? `${food.readyInMinutes} min` : "—"], ["Serves", food.servings ?? "—"], ["Per serving", price]].map(([label, value], index) => <div className={`px-[17px] ${index === 0 ? "pl-0" : ""} ${index < 2 ? "border-r border-[#e4e1d8]" : "pr-0"}`} key={label}><dt className="text-[.64rem] font-semibold tracking-[.08em] text-[#687169] uppercase">{label}</dt><dd className="mt-[5px] ml-0 text-base font-bold text-[#173c2c]">{value}</dd></div>)}</dl>

        <section className="pt-8" aria-labelledby="ingredients-heading"><div className="mb-[18px] flex items-end justify-between gap-[15px]"><div><span className="text-[.62rem] font-bold tracking-[.08em] text-[#dc8b3f] uppercase">What you’ll need</span><h3 className="mt-[3px] font-display text-2xl text-[#173c2c]" id="ingredients-heading">Ingredients</h3></div><span className="text-[.7rem] text-[#687169]">{food.extendedIngredients?.length ?? 0} items</span></div><ItemList ingredients={food.extendedIngredients ?? []} /></section>

        <section className="pt-8" aria-labelledby="instructions-heading"><div className="mb-[18px] flex items-end justify-between gap-[15px]"><div><span className="text-[.62rem] font-bold tracking-[.08em] text-[#dc8b3f] uppercase">From prep to plate</span><h3 className="mt-[3px] font-display text-2xl text-[#173c2c]" id="instructions-heading">Method</h3></div><span className="text-[.7rem] text-[#687169]">{instructionSteps.length} steps</span></div>{instructionSteps.length > 0 ? <ol className="m-0 grid list-none gap-[18px] p-0">{instructionSteps.map((step, index) => <li className="grid grid-cols-[34px_1fr] items-start gap-[14px]" key={`${step.number}-${index}`}><span className="grid size-8 place-items-center rounded-full bg-[#173c2c] font-display text-xs text-white" aria-hidden="true">{index + 1}</span><p className="mt-[3px] mb-0 text-sm leading-7 text-[#586159]">{step.step}</p></li>)}</ol> : <div className={emptyStateClass}>Step-by-step instructions are not available for this recipe.</div>}</section>

        {food.sourceUrl && <a className="mt-[30px] flex items-center justify-between border-t border-[#e4e1d8] pt-[18px] text-xs font-bold text-[#246044] no-underline" href={food.sourceUrl} target="_blank" rel="noreferrer">View original recipe <span aria-hidden="true">↗</span></a>}
      </div>
    </article>
  );
}

export default FoodDetails;
