import { curatedRecipes, findCuratedRecipes } from "../data/recipes.js";

const API_ROOT = "/api/spoonacular";

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function request(path, signal) {
  const response = await fetch(`${API_ROOT}${path}`, { signal });
  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(data.message ?? "Spoonacular could not complete this request.", response.status);
  }

  return data;
}

export async function searchRecipes(query, signal) {
  if (!query.trim()) return findCuratedRecipes("");

  try {
    const data = await request(
      `/recipes/complexSearch?query=${encodeURIComponent(query)}&number=12`,
      signal,
    );

    if (!Array.isArray(data.results)) {
      throw new ApiError(data.message ?? "The recipe service returned an invalid search response.");
    }

    return data.results.length > 0 ? data.results : findCuratedRecipes(query);
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") throw error;
    return findCuratedRecipes(query);
  }
}

export async function getRecipeDetails(id, signal) {
  const curatedRecipe = curatedRecipes.find((recipe) => recipe.id === id);
  if (curatedRecipe) return curatedRecipe;

  const data = await request(`/recipes/${id}/information`, signal);
  if (!data.id || !data.title) throw new ApiError("The recipe service returned incomplete details.");
  return data;
}
