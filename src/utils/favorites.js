const FAVORITES_STORAGE_KEY = "savora-favorites";

export const FAVORITES_CHANGE_EVENT = "savora-favorites-change";

export function getFavoriteRecipeIds() {
  try {
    const storedValue = localStorage.getItem(FAVORITES_STORAGE_KEY);
    const recipeIds = JSON.parse(storedValue ?? "[]");
    return Array.isArray(recipeIds) ? recipeIds : [];
  } catch {
    return [];
  }
}

export function saveFavoriteRecipeIds(recipeIds) {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(recipeIds));
  window.dispatchEvent(
    new CustomEvent(FAVORITES_CHANGE_EVENT, { detail: recipeIds }),
  );
}
