import { useCallback, useEffect, useState } from "react";
import Contact from "./components/discovery/Contact";
import Search from "./components/discovery/Search";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import FavoritesModal from "./components/recipes/FavoritesModal";
import FoodList from "./components/recipes/FoodList";
import RecipeModal from "./components/recipes/RecipeModal";
import { curatedRecipes } from "./data/recipes";
import {
  FAVORITES_CHANGE_EVENT,
  getFavoriteRecipeIds,
} from "./utils/favorites";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(null);
  const [isSearching, setIsSearching] = useState(true);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [savedRecipeIds, setSavedRecipeIds] = useState(getFavoriteRecipeIds);

  const closeModal = useCallback(() => setFoodId(null), []);
  const closeFavorites = useCallback(() => setFavoritesOpen(false), []);

  useEffect(() => {
    function syncFavorites(event) {
      setSavedRecipeIds(event.detail);
    }

    window.addEventListener(FAVORITES_CHANGE_EVENT, syncFavorites);
    return () => window.removeEventListener(FAVORITES_CHANGE_EVENT, syncFavorites);
  }, []);

  const surpriseMe = useCallback(() => {
    const recipePool = foodData.length > 1 ? foodData : curatedRecipes;
    const alternatives = recipePool.filter((recipe) => recipe.id !== foodId);
    const choices = alternatives.length > 0 ? alternatives : recipePool;
    const randomRecipe = choices[Math.floor(Math.random() * choices.length)];

    if (randomRecipe) setFoodId(randomRecipe.id);
  }, [foodData, foodId]);

  function openFavoriteRecipe(id) {
    setFavoritesOpen(false);
    setFoodId(id);
  }

  return (
    <div className="min-h-screen">
      <Nav
        favoriteCount={savedRecipeIds.length}
        onFavorites={() => setFavoritesOpen(true)}
        onSurprise={surpriseMe}
      />

      <main>
        <Search
          setFoodData={setFoodData}
          setHasSearched={setHasSearched}
          setIsSearching={setIsSearching}
          setSearchError={setSearchError}
        />

        <div className="mx-auto w-full max-w-[1240px] px-[clamp(20px,5vw,56px)] py-[clamp(56px,7vw,90px)] max-sm:py-11">
          <section id="recipes" aria-labelledby="recipe-results-heading">
            <div className="mb-6 flex items-end justify-between gap-5">
              <div>
                <span className="text-xs font-bold tracking-[0.13em] text-[#3f8a62] uppercase">
                  Food without borders
                </span>
                <h2
                  className="mt-1 font-display text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.12] text-[#173c2c]"
                  id="recipe-results-heading"
                >
                  Famous dishes around the world
                </h2>
              </div>

              {!isSearching && foodData.length > 0 && (
                <span className="shrink-0 rounded-full border border-[#e4e1d8] bg-white/50 px-3 py-2 text-xs font-semibold text-[#687169]">
                  {foodData.length} recipes
                </span>
              )}
            </div>

            <p className="-mt-2.5 mb-[30px] max-w-[660px] text-sm leading-7 text-[#687169]">
              Travel through food culture and discover a signature dish from every
              featured country—complete with ingredients and a practical method.
            </p>

            <FoodList
              error={searchError}
              foodData={foodData}
              hasSearched={hasSearched}
              isLoading={isSearching}
              selectedFoodId={foodId}
              setFoodId={setFoodId}
            />
          </section>
        </div>

        <Contact />
      </main>

      <Footer />

      {foodId !== null && <RecipeModal foodId={foodId} onClose={closeModal} />}

      {favoritesOpen && (
        <FavoritesModal
          onClose={closeFavorites}
          onSelect={openFavoriteRecipe}
          recipes={curatedRecipes.filter((recipe) =>
            savedRecipeIds.includes(recipe.id),
          )}
        />
      )}
    </div>
  );
}

export default App;
