import type { RecipeDetails, RecipeSummary, SearchResponse, SpoonacularError } from "../types";
import { curatedRecipes, findCuratedRecipes } from "../data/recipes";

const API_ROOT = "/api/spoonacular";

export class ApiError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${API_ROOT}${path}`, { signal });
  const data = (await response.json()) as T & SpoonacularError;

  if (!response.ok) {
    throw new ApiError(data.message ?? "Spoonacular could not complete this request.", response.status);
  }

  return data;
}

export async function searchRecipes(query: string, signal?: AbortSignal): Promise<RecipeSummary[]> {
  if (!query.trim()) return findCuratedRecipes("");

  try {
    const data = await request<SearchResponse>(
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

export async function getRecipeDetails(id: number, signal?: AbortSignal): Promise<RecipeDetails> {
  const curatedRecipe = curatedRecipes.find((recipe) => recipe.id === id);
  if (curatedRecipe) return curatedRecipe;

  const data = await request<RecipeDetails>(`/recipes/${id}/information`, signal);
  if (!data.id || !data.title) throw new ApiError("The recipe service returned incomplete details.");
  return data;
}
