import FoodItem from "./FoodItem";

const gridClass = "grid grid-cols-3 gap-[22px] max-[820px]:grid-cols-2 max-[520px]:grid-cols-1";
const stateClass = "grid min-h-[300px] place-items-center content-center rounded-[20px] border border-dashed border-[#cad1c9] bg-white/45 px-6 py-[38px] text-center";

function FoodList({ foodData, selectedFoodId, setFoodId, isLoading, error, hasSearched }) {
  if (isLoading) {
    return <div className={gridClass} aria-label="Loading recipes" aria-busy="true">{Array.from({ length: 6 }, (_, index) => <div className="overflow-hidden rounded-[20px] border border-[#e4e1d8] bg-[#fffdf8]" key={index} aria-hidden="true"><div className="aspect-[1.35] animate-pulse bg-[#eeece5]" /><div className="mx-[18px] mt-[21px] mb-2.5 h-[14px] animate-pulse rounded-full bg-[#eeece5]" /><div className="mx-[18px] mb-[22px] h-[11px] w-[55%] animate-pulse rounded-full bg-[#eeece5]" /></div>)}<span className="sr-only">Loading recipes...</span></div>;
  }

  if (error) return <div className={stateClass} role="alert" aria-live="polite"><span className="mb-[14px] grid size-[42px] place-items-center rounded-full bg-[#e8f1e9] font-display font-bold text-[#246044]" aria-hidden="true">!</span><h3 className="mb-[7px] font-display text-xl text-[#173c2c]">We couldn’t load recipes</h3><p className="m-0 max-w-[340px] text-sm leading-6 text-[#687169]">{error}</p></div>;

  if (hasSearched && foodData.length === 0) return <div className={stateClass} aria-live="polite"><span className="mb-[14px] grid size-[42px] place-items-center rounded-full bg-[#e8f1e9] font-display font-bold text-[#246044]" aria-hidden="true">0</span><h3 className="mb-[7px] font-display text-xl text-[#173c2c]">No recipes found</h3><p className="m-0 max-w-[340px] text-sm leading-6 text-[#687169]">Try a broader ingredient, dish, or cuisine.</p></div>;

  return <div className={gridClass} aria-live="polite">{foodData.map((food) => <FoodItem food={food} isSelected={food.id === selectedFoodId} setFoodId={setFoodId} key={food.id} />)}</div>;
}

export default FoodList;
