import Item from "./Item";

function ItemList({ ingredients }) {
  if (ingredients.length === 0) {
    return <div className="rounded-xl border border-dashed border-[#cfd5ce] bg-[#faf9f4] p-5 text-xs leading-6 text-[#687169]">Ingredient information is not available for this recipe.</div>;
  }

  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 max-[480px]:grid-cols-1">
      {ingredients.map((item, index) => (
        <Item item={item} key={`${item.id ?? item.name}-${index}`} />
      ))}
    </ul>
  );
}

export default ItemList;
