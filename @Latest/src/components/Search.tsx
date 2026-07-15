import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { searchRecipes } from "../services/spoonacular";
import type { RecipeSummary } from "../types";
import styles from "./Search.module.css";

interface SearchProps {
  setFoodData: Dispatch<SetStateAction<RecipeSummary[]>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  setSearchError: Dispatch<SetStateAction<string>>;
  setHasSearched: Dispatch<SetStateAction<boolean>>;
}

function Search({ setFoodData, setIsSearching, setSearchError, setHasSearched }: SearchProps) {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setSubmittedQuery(query.trim()), 500);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();
    setIsSearching(true);
    setSearchError("");

    searchRecipes(submittedQuery, controller.signal)
      .then((recipes) => {
        setFoodData(recipes);
        setHasSearched(true);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setFoodData([]);
        setSearchError(error instanceof Error ? error.message : "Recipes could not be loaded.");
        setHasSearched(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsSearching(false);
      });

    return () => controller.abort();
  }, [submittedQuery, setFoodData, setHasSearched, setIsSearching, setSearchError]);

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedQuery(query.trim());
  }

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-heading">
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.eyebrow}>A world of food culture</span>
        <h1 id="hero-heading">Taste the world, one country at a time.</h1>
        <p>
          Discover the dishes each country is proud of, learn the culture behind them, and cook their authentic flavors at home.
        </p>
        <form className={styles.searchForm} onSubmit={submitSearch} role="search">
          <label className="srOnly" htmlFor="recipe-search">Search recipes</label>
          <span className={styles.searchIcon} aria-hidden="true" />
          <input
            id="recipe-search"
            className={styles.input}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search a country, dish, or ingredient..."
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>
        <div className={styles.suggestions} aria-label="Popular searches">
          <span>Try:</span>
          {['Lebanon', 'Mexico', 'Thailand', 'Morocco', 'Brazil'].map((suggestion) => (
            <button key={suggestion} type="button" onClick={() => setQuery(suggestion.toLowerCase())}>
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search;
