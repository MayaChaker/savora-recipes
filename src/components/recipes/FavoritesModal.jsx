import useModalDialog from "../../hooks/useModalDialog";

function FavoritesModal({ recipes, onClose, onSelect }) {
  const closeButtonRef = useModalDialog(onClose);

  return (
    <div className="fixed inset-0 z-[110] grid place-items-center bg-[rgba(10,27,19,.76)] p-[clamp(14px,4vw,42px)] backdrop-blur-[10px] max-[760px]:place-items-end max-[760px]:p-0" role="presentation" onMouseDown={onClose}>
      <section className="max-h-[calc(100vh-clamp(28px,8vw,84px))] w-full max-w-[1000px] overflow-y-auto rounded-[30px] bg-[#f7f4ec] shadow-[0_30px_90px_rgba(0,0,0,.35)] max-[760px]:max-h-[94vh] max-[760px]:max-w-none max-[760px]:rounded-t-[24px] max-[760px]:rounded-b-none" role="dialog" aria-modal="true" aria-labelledby="favorites-heading" onMouseDown={(event) => event.stopPropagation()}>
        <header className="sticky top-0 z-[2] flex items-center justify-between border-b border-[#e4e1d8] bg-[rgba(247,244,236,.94)] px-7 py-6 backdrop-blur-xl max-[430px]:p-5">
          <div><span className="text-[.65rem] font-bold tracking-[.13em] text-[#3f8a62] uppercase">Your collection</span><h2 className="mt-[3px] font-display text-[2rem] text-[#173c2c]" id="favorites-heading">My Favorites</h2></div>
          <button className="size-[42px] rounded-full border border-[#e4e1d8] bg-white text-2xl text-[#173c2c]" ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close favorites">×</button>
        </header>
        {recipes.length > 0 ? (
          <div className="grid grid-cols-2 gap-[18px] p-7 max-[760px]:grid-cols-1 max-[430px]:p-4">
            {recipes.map((recipe) => (
              <article className="grid min-w-0 grid-cols-[145px_1fr] overflow-hidden rounded-[18px] border border-[#e4e1d8] bg-[#fffdf8] shadow-[0_7px_24px_rgba(23,60,44,.06)] max-[430px]:grid-cols-[105px_1fr]" key={recipe.id}>
                <img className="h-full min-h-[180px] w-full bg-[#dfe7df] object-cover max-[430px]:min-h-[165px]" src={recipe.image} alt={recipe.title} />
                <div className="min-w-0 p-[19px] max-[430px]:p-[14px]">
                  <span className="text-[.62rem] font-bold tracking-[.08em] text-[#dc8b3f] uppercase">{recipe.country ?? recipe.cuisine ?? "World kitchen"}</span>
                  <h3 className="my-2 font-display text-[1.18rem] leading-tight text-[#173c2c] max-[430px]:text-base">{recipe.title}</h3>
                  <p className="text-[.7rem] text-[#687169]">{recipe.readyInMinutes ?? "—"} min · Serves {recipe.servings ?? "—"}</p>
                  <button className="flex w-full justify-between border-0 border-t border-[#e4e1d8] bg-transparent pt-3 text-[.72rem] font-bold text-[#246044]" type="button" onClick={() => onSelect(recipe.id)}>View recipe <span aria-hidden="true">→</span></button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid min-h-[430px] place-items-center content-center p-10 text-center">
            <span className="grid size-[60px] place-items-center rounded-full bg-[#e8f1e9] text-3xl text-[#246044]" aria-hidden="true">♡</span>
            <h3 className="mt-[18px] mb-2 font-display text-2xl text-[#173c2c]">Your collection is waiting</h3>
            <p className="max-w-[350px] text-sm leading-6 text-[#687169]">Open any recipe and tap the heart to save it here for later.</p>
            <button className="rounded-full border-0 bg-[#173c2c] px-[18px] py-3 text-xs font-bold text-white" type="button" onClick={onClose}>Explore recipes</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default FavoritesModal;
