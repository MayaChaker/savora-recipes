import { useEffect, useState } from "react";
import { searchRecipes } from "../../services/spoonacular";

function Search({ setFoodData, setIsSearching, setSearchError, setHasSearched }) {
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
      .catch((error) => {
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

  function submitSearch(event) {
    event.preventDefault();
    setSubmittedQuery(query.trim());
  }

  return (
    <section className="relative grid min-h-[535px] place-items-center overflow-hidden bg-[linear-gradient(90deg,rgba(13,36,26,.94),rgba(13,36,26,.68)),url('/images/savora-hero.png')] bg-cover bg-center px-5 pt-[clamp(70px,9vw,118px)] pb-[92px] text-white before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] before:bg-[length:30px_30px] before:opacity-[.18] max-[560px]:min-h-[480px] max-[560px]:px-[18px] max-[560px]:pt-[62px] max-[560px]:pb-[62px]" id="top" aria-labelledby="hero-heading">
      <div className="absolute -top-40 -right-[90px] size-[340px] rounded-full bg-[rgba(93,150,99,.28)] blur-[3px]" aria-hidden="true" />
      <div className="absolute -bottom-[170px] left-[4%] size-[260px] rounded-full bg-[rgba(220,139,63,.18)] blur-[3px]" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-[780px] text-center">
        <span className="mb-[18px] inline-flex items-center gap-2 text-xs font-bold tracking-[.16em] text-[#bfd5c3] uppercase before:h-px before:w-[27px] before:bg-[#dc8b3f] before:content-['']">A world of food culture</span>
        <h1 className="mx-auto mb-[18px] max-w-[760px] font-display text-[clamp(2.5rem,6.4vw,5rem)] leading-[.99] tracking-[-.04em] max-[560px]:text-[clamp(2.35rem,12vw,3.4rem)]" id="hero-heading">Taste the world, one country at a time.</h1>
        <p className="mx-auto mb-[34px] max-w-[610px] text-[clamp(.98rem,1.8vw,1.12rem)] leading-7 text-[#cbd8ce]">
          Discover the dishes each country is proud of, learn the culture behind them, and cook their authentic flavors at home.
        </p>
        <form className="mx-auto flex min-h-[62px] w-full max-w-[660px] items-center gap-3 rounded-full border border-white/25 bg-white p-[7px] pl-5 shadow-[0_20px_55px_rgba(0,0,0,.24)] max-[560px]:min-h-[58px] max-[560px]:gap-2 max-[560px]:pl-4" onSubmit={submitSearch} role="search">
          <label className="sr-only" htmlFor="recipe-search">Search recipes</label>
          <span className="relative size-[18px] shrink-0 rounded-full border-2 border-[#839087] after:absolute after:right-[-5px] after:bottom-[-2px] after:h-0.5 after:w-[7px] after:rotate-45 after:rounded-sm after:bg-[#839087] after:content-[''] max-[380px]:hidden" aria-hidden="true" />
          <input
            id="recipe-search"
            className="min-w-0 flex-1 border-0 bg-transparent p-2.5 text-[.96rem] text-[#263028] outline-0 placeholder:text-[#909891]"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search a country, dish, or ingredient..."
            autoComplete="off"
          />
          <button className="min-h-[47px] rounded-full border-0 bg-[#dc8b3f] px-6 text-sm font-bold text-[#2d261d] transition hover:-translate-y-px hover:brightness-105 max-[560px]:min-h-[43px] max-[560px]:px-4 max-[380px]:px-3" type="submit">Search</button>
        </form>
        <div className="mt-[18px] flex min-h-6 flex-wrap items-center justify-center gap-2 text-xs text-[#91aa98] max-[560px]:gap-1.5" aria-label="Popular searches">
          <span className="max-[560px]:w-full">Try:</span>
          {['Lebanon', 'Mexico', 'Thailand', 'Morocco', 'Brazil'].map((suggestion) => (
            <button className="border-0 border-b border-white/25 bg-transparent px-2 py-1 text-xs text-[#dbe6dd]" key={suggestion} type="button" onClick={() => setQuery(suggestion.toLowerCase())}>
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search;
