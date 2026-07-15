export interface RecipeSummary {
  id: number;
  title: string;
  image?: string;
  imageType?: string;
  category?: string;
  cuisine?: string;
  country?: string;
}

export interface Ingredient {
  id?: number;
  name: string;
  image?: string;
  amount: number;
  unit?: string;
}

export interface InstructionStep {
  number: number;
  step: string;
}

export interface InstructionGroup {
  name?: string;
  steps: InstructionStep[];
}

export interface RecipeDetails {
  id: number;
  title: string;
  image?: string;
  readyInMinutes?: number;
  servings?: number;
  vegetarian?: boolean;
  vegan?: boolean;
  pricePerServing?: number;
  sourceName?: string;
  sourceUrl?: string;
  summary?: string;
  category?: string;
  cuisine?: string;
  country?: string;
  extendedIngredients?: Ingredient[];
  analyzedInstructions?: InstructionGroup[];
}

export interface SpoonacularError {
  status?: string;
  code?: number;
  message?: string;
}

export interface SearchResponse extends SpoonacularError {
  results?: RecipeSummary[];
  totalResults?: number;
}
