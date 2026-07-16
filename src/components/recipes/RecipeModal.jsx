import useModalDialog from "../../hooks/useModalDialog";
import FoodDetails from "./FoodDetails";

function RecipeModal({ foodId, onClose }) {
  const closeButtonRef = useModalDialog(onClose);

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[rgba(10,27,19,.76)] p-[clamp(12px,3vw,32px)] backdrop-blur-[10px] max-sm:place-items-end max-sm:p-0" role="presentation" onMouseDown={onClose}>
      <div
        className="relative max-h-[calc(100vh-clamp(24px,6vw,64px))] w-full max-w-[860px] overflow-y-auto rounded-[30px] shadow-[0_30px_90px_rgba(0,0,0,.35)] [scrollbar-color:#aeb9af_transparent] [scrollbar-width:thin] max-sm:max-h-[94vh] max-sm:max-w-none max-sm:rounded-t-[24px] max-sm:rounded-b-none"
        role="dialog"
        aria-modal="true"
        aria-label="Recipe details"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button ref={closeButtonRef} className="sticky top-[15px] z-[5] ml-auto mr-[15px] mb-[-59px] grid size-11 place-items-center rounded-full border border-white/65 bg-[rgba(255,253,248,.94)] text-[1.65rem] leading-none text-[#173c2c] shadow-[0_8px_24px_rgba(29,49,37,.08)] transition hover:rotate-[4deg] hover:scale-105 hover:bg-white max-sm:top-3 max-sm:mr-3 max-sm:mb-[-56px]" type="button" onClick={onClose} aria-label="Close recipe details">
          <span aria-hidden="true">×</span>
        </button>
        <FoodDetails foodId={foodId} />
      </div>
    </div>
  );
}

export default RecipeModal;
