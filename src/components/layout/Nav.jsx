function Nav({ onSurprise, onFavorites, favoriteCount }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e4e1d8db] bg-[#fffdf8e6] shadow-[0_5px_25px_rgba(23,60,44,.04)] backdrop-blur-2xl">
      <nav className="mx-auto flex min-h-[76px] max-w-[1240px] items-center justify-between gap-8 px-[clamp(20px,5vw,56px)] max-sm:min-h-[66px] max-sm:gap-3" aria-label="Primary navigation">
        <a className="flex items-center gap-3 font-display text-[1.42rem] font-bold text-[#173c2c] no-underline max-sm:text-xl" href="#top" aria-label="Savora home">
          <span className="relative grid size-[34px] rotate-[-8deg] place-items-center rounded-[50%_50%_46%_54%] bg-[#246044] before:absolute before:ml-[-9px] before:h-4 before:w-0.5 before:rotate-[8deg] before:rounded-sm before:bg-[#fffdf8] before:content-[''] after:absolute after:ml-[9px] after:h-4 after:w-0.5 after:rotate-[8deg] after:rounded-sm after:bg-[#fffdf8] after:content-[''] max-sm:size-[31px]" aria-hidden="true">
            <span className="h-[19px] w-0.5 rotate-[8deg] rounded-sm bg-[#fffdf8]" />
          </span>
          <span className="max-[410px]:hidden">Savora</span>
        </a>

        <div className="flex items-center gap-[clamp(20px,3vw,38px)] max-[850px]:hidden">
          {[["#top", "Discover"], ["#recipes", "Recipes"], ["#contact", "Contact"]].map(([href, label]) => (
            <a className="relative text-sm font-semibold text-[#4e5850] no-underline after:absolute after:right-full after:bottom-[-8px] after:left-0 after:h-0.5 after:bg-[#3f8a62] after:transition-all after:content-[''] hover:after:right-0" href={href} key={href}>{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="relative flex min-h-10 items-center gap-2 rounded-full border border-[#e4e1d8] bg-white px-3 text-xs font-bold text-[#246044] max-sm:size-10 max-sm:justify-center max-sm:px-0" type="button" onClick={onFavorites} aria-label={`Open ${favoriteCount} saved recipes`}>
            <span className="text-base" aria-hidden="true">♡</span>
            <span className="max-sm:hidden">My Favorites</span>
            {favoriteCount > 0 && <strong className="grid h-[18px] min-w-[18px] place-items-center rounded-full bg-[#dc8b3f] px-1 text-[.6rem] text-[#30271f] max-sm:absolute max-sm:-top-1 max-sm:-right-1">{favoriteCount}</strong>}
          </button>
          <button className="group flex min-h-10 items-center gap-2 rounded-full border-0 bg-[#173c2c] px-4 text-xs font-bold text-white transition hover:-translate-y-px hover:bg-[#246044] max-sm:px-3" type="button" onClick={onSurprise}>
            <span className="text-sm text-[#f4b66f] transition-transform duration-300 group-hover:rotate-20 group-hover:scale-115" aria-hidden="true">✦</span>
            Surprise me
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
