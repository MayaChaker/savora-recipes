import { useCallback, useEffect, useState } from "react";
import "./components/App.css";
import Contact from "./components/Contact";
import Container from "./components/Container";
import FoodList from "./components/FoodList";
import FavoritesModal from "./components/FavoritesModal";
import Footer from "./components/Footer";
import InnerContainer from "./components/InnerContainer";
import Nav from "./components/Nav";
import RecipeModal from "./components/RecipeModal";
import Search from "./components/Search";
import type { RecipeSummary } from "./types";
import { curatedRecipes } from "./data/recipes";

function App() {
  const [foodData, setFoodData] = useState<RecipeSummary[]>([]);
  const [foodId, setFoodId] = useState<number | null>(null);
  const [isSearching, setIsSearching] = useState(true);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [savedRecipeIds, setSavedRecipeIds] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem("savora-favorites") ?? "[]") as number[]; }
    catch { return []; }
  });
  const closeModal = useCallback(() => setFoodId(null), []);
  const closeFavorites = useCallback(() => setFavoritesOpen(false), []);

  useEffect(() => {
    function syncFavorites(event: Event) {
      setSavedRecipeIds((event as CustomEvent<number[]>).detail);
    }
    window.addEventListener("savora-favorites-change", syncFavorites);
    return () => window.removeEventListener("savora-favorites-change", syncFavorites);
  }, []);
  const surpriseMe = useCallback(() => {
    const recipePool = foodData.length > 1 ? foodData : curatedRecipes;
    const alternatives = recipePool.filter((recipe) => recipe.id !== foodId);
    const choices = alternatives.length > 0 ? alternatives : recipePool;
    const randomRecipe = choices[Math.floor(Math.random() * choices.length)];
    if (randomRecipe) setFoodId(randomRecipe.id);
  }, [foodData, foodId]);

  return (
    <div className="appShell">
      <Nav onSurprise={surpriseMe} onFavorites={() => setFavoritesOpen(true)} favoriteCount={savedRecipeIds.length} />
      <main>
        <Search setFoodData={setFoodData} setIsSearching={setIsSearching} setSearchError={setSearchError} setHasSearched={setHasSearched} />
        <Container>
          <InnerContainer>
            <section id="recipes" aria-labelledby="recipe-results-heading">
              <div className="sectionHeading">
                <div><span className="eyebrow">Food without borders</span><h2 id="recipe-results-heading">Famous dishes around the world</h2></div>
                {!isSearching && foodData.length > 0 && <span className="resultCount">{foodData.length} recipes</span>}
              </div>
              <p className="sectionIntro">Travel through food culture and discover a signature dish from every featured country—complete with ingredients and a practical method.</p>
              <FoodList foodData={foodData} selectedFoodId={foodId} setFoodId={setFoodId} isLoading={isSearching} error={searchError} hasSearched={hasSearched} />
            </section>
          </InnerContainer>
        </Container>
        <Contact />
      </main>
      <Footer />
      {foodId !== null && <RecipeModal foodId={foodId} onClose={closeModal} />}
      {favoritesOpen && (
        <FavoritesModal
          recipes={curatedRecipes.filter((recipe) => savedRecipeIds.includes(recipe.id))}
          onClose={closeFavorites}
          onSelect={(id) => { setFavoritesOpen(false); setFoodId(id); }}
        />
      )}
    </div>
  );
}

export default App;
