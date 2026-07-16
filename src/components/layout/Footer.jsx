const footerGroups = [
  { title: "Explore", links: [["#top", "Discover"], ["#recipes", "All recipes"], ["#contact", "Suggest a recipe"]] },
  { title: "Collections", links: [["#recipes", "Quick meals"], ["#recipes", "Plant based"], ["#recipes", "Weekend cooking"]] },
  { title: "Connect", links: [["mailto:hello@savora.example", "Email"], ["#contact", "Contact"], ["#top", "Back to top"]] },
];

function Footer() {
  return (
    <footer className="bg-[#112f22] px-[clamp(20px,5vw,56px)] pt-[65px] pb-6 text-[#dce7de]">
      <div className="mx-auto mb-[52px] grid max-w-[1240px] grid-cols-[.9fr_1.1fr] gap-[70px] max-[760px]:grid-cols-1 max-[760px]:gap-[38px]">
        <div>
          <a className="inline-flex items-center gap-2.5 font-display text-[1.6rem] font-bold text-white no-underline" href="#top"><span className="grid size-[34px] place-items-center rounded-full bg-[#dc8b3f] text-base text-[#253026]" aria-hidden="true">S</span>Savora</a>
          <p className="mt-4 max-w-[360px] text-xs leading-7 text-[#9db3a4]">Thoughtful recipes, dependable guidance, and more joy around the table.</p>
        </div>
        <div className="grid grid-cols-3 gap-7 max-[500px]:grid-cols-2">
          {footerGroups.map((group, index) => (
            <div className={index === 2 ? "max-[500px]:col-span-2" : ""} key={group.title}>
              <h3 className="mb-4 text-xs font-bold tracking-[.08em] text-white uppercase">{group.title}</h3>
              {group.links.map(([href, label]) => <a className="my-2.5 block w-fit text-xs text-[#9db3a4] no-underline transition hover:text-white" href={href} key={label}>{label}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1240px] justify-between gap-5 border-t border-white/10 pt-5 text-[.67rem] text-[#779281] max-[500px]:flex-col max-[500px]:items-center max-[500px]:text-center"><span>© {new Date().getFullYear()} Savora Kitchen</span><span>Made for curious home cooks</span></div>
    </footer>
  );
}

export default Footer;
