import { useState } from "react";

function FoodItem({ food, isSelected, setFoodId }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className={`group min-w-0 overflow-hidden rounded-[20px] border bg-[#fffdf8] shadow-[0_8px_26px_rgba(31,57,42,.055)] transition hover:-translate-y-1 hover:border-[#cbd5cb] hover:shadow-[0_8px_24px_rgba(29,49,37,.08)] ${isSelected ? "border-[#3f8a62] ring-2 ring-[rgba(63,138,98,.12)]" : "border-[#e4e1d8]"}`}>
      <div className="relative aspect-[1.35] overflow-hidden bg-[#e8ece5]">
        {food.image && !imageFailed ? (
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" src={food.image} alt={food.title} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_25%,#adc6ae,#436c50)] font-display text-[3.5rem] text-white/80" role="img" aria-label={`No image available for ${food.title}`}><span aria-hidden="true">S</span></div>
        )}
        <span className="absolute top-3 left-3 rounded-full bg-[rgba(255,253,248,.9)] px-[9px] py-1.5 text-[.62rem] font-bold tracking-[.04em] text-[#246044] uppercase backdrop-blur-sm">{isSelected ? "Selected" : "Fresh pick"}</span>
      </div>
      <div className="p-[18px]">
        <p className="mb-1.5 text-[.62rem] font-bold tracking-[.09em] text-[#dc8b3f] uppercase">{food.country ? `${food.country} · ${food.cuisine ?? "Signature dish"}` : food.cuisine ?? "World kitchen"}</p>
        <h3 className="mb-4 line-clamp-2 min-h-[2.7em] font-display text-[1.05rem] leading-[1.35] text-[#173c2c]">{food.title}</h3>
        <button className="flex min-h-[42px] w-full items-center justify-between border-0 border-t border-[#e4e1d8] bg-transparent p-0 text-xs font-bold text-[#246044]" type="button" onClick={() => setFoodId(food.id)} aria-pressed={isSelected}>
          <span>{isSelected ? "Viewing recipe" : "View recipe"}</span><span className="text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

export default FoodItem;
