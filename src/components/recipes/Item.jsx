import { useState } from "react";

function formatAmount(amount) {
  return Number.isInteger(amount) ? amount.toString() : amount.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function Item({ item }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageUrl = item.image ? `/images/ingredients/${item.image}` : "";

  return (
    <li className="flex min-w-0 items-center gap-3 rounded-xl border border-[#e4e1d8] bg-white p-[11px]">
      <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-[10px] bg-[#f1f3ed]">
        {imageUrl && !imageFailed ? (
          <img className="h-full w-full object-contain p-[5px]" src={imageUrl} alt={item.name} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <span className="text-3xl text-[#3f8a62]" aria-hidden="true">•</span>
        )}
      </div>
      <div className="grid min-w-0 gap-[3px]">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-bold text-[#173c2c] capitalize">{item.name}</span>
        <span className="text-[.68rem] text-[#687169]">{formatAmount(item.amount)} {item.unit ?? ""}</span>
      </div>
    </li>
  );
}

export default Item;
