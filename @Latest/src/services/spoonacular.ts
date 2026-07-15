import type { RecipeDetails, RecipeSummary, SearchResponse, SpoonacularError } from "../types";
import { curatedRecipes, findCuratedRecipes } from "../data/recipes";

const API_ROOT = "https://api.spoonacular.com";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY as string | undefined;

export class ApiError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = "ApiError";
  }
}

function requireApiKey() {
  if (!API_KEY) {
    throw new ApiError("Add VITE_SPOONACULAR_API_KEY to .env.local to load live recipes.");
  }
  return API_KEY;
}

async function request<T>(path: string, signal?: AbortSignal): Promise<T> {
  const separator = path.includes("?") ? "&" : "?";
  const response = await fetch(`${API_ROOT}${path}${separator}apiKey=${requireApiKey()}`, { signal });
  const data = (await response.json()) as T & SpoonacularError;

  if (!response.ok) {
    throw new ApiError(data.message ?? "Spoonacular could not complete this request.", response.status);
  }

  return data;
}

export async function searchRecipes(query: string, signal?: AbortSignal): Promise<RecipeSummary[]> {
  if (!API_KEY) return findCuratedRecipes(query);

  if (!query.trim()) return findCuratedRecipes("");

  const data = await request<SearchResponse>(
    `/recipes/complexSearch?query=${encodeURIComponent(query)}&number=12`,
    signal,
  );

  if (!Array.isArray(data.results)) {
    throw new ApiError(data.message ?? "The recipe service returned an invalid search response.");
  }

  return data.results;
}

export async function getRecipeDetails(id: number, signal?: AbortSignal): Promise<RecipeDetails> {
  const curatedRecipe = curatedRecipes.find((recipe) => recipe.id === id);
  if (curatedRecipe) return curatedRecipe;

  const data = await request<RecipeDetails>(`/recipes/${id}/information`, signal);
  if (!data.id || !data.title) throw new ApiError("The recipe service returned incomplete details.");
  return data;
}
