import { moreRecipes } from "./moreRecipes.js";
import { worldRecipes } from "./worldRecipes.js";

const coreRecipes = [
  {
    id: 9001,
    title: "Sunlit Tomato & Burrata Pasta",
    category: "Quick meals", cuisine: "Italian", country: "Italy",
    image: "/images/recipes/9001.jpg",
    readyInMinutes: 30, servings: 4, vegetarian: true, vegan: false, pricePerServing: 485,
    sourceName: "Savora Kitchen",
    extendedIngredients: [
      { id: 1, name: "tagliatelle", image: "tagliatelle.jpg", amount: 400, unit: "g" },
      { id: 2, name: "cherry tomatoes", image: "cherry-tomatoes.png", amount: 500, unit: "g" },
      { id: 3, name: "burrata", image: "burrata.png", amount: 250, unit: "g" },
      { id: 4, name: "fresh basil", image: "fresh-basil.jpg", amount: 1, unit: "handful" },
      { id: 5, name: "garlic", image: "garlic.png", amount: 3, unit: "cloves" },
      { id: 6, name: "extra virgin olive oil", image: "olive-oil.jpg", amount: 3, unit: "tbsp" },
    ],
    analyzedInstructions: [{ steps: [
      { number: 1, step: "Bring a large pot of well-salted water to a rolling boil and cook the pasta until just al dente." },
      { number: 2, step: "Warm olive oil in a wide pan. Add sliced garlic and tomatoes, then cook until the tomatoes blister and release their juices." },
      { number: 3, step: "Add the drained pasta with a splash of cooking water. Toss vigorously until the sauce turns glossy and coats every strand." },
      { number: 4, step: "Fold through torn basil, season generously, and finish with burrata, cracked pepper, and a final drizzle of olive oil." },
    ] }],
  },
  {
    id: 9002, title: "Herb-Roasted Salmon Bowl", category: "High protein", cuisine: "Nordic", country: "Norway",
    image: "/images/recipes/9002.jpg",
    readyInMinutes: 35, servings: 2, vegetarian: false, vegan: false, pricePerServing: 720,
    sourceName: "Savora Kitchen",
    extendedIngredients: [
      { name: "salmon fillets", image: "salmon.png", amount: 2, unit: "fillets" }, { name: "brown rice", image: "rice-white-long-grain-or-basmatii-cooked.jpg", amount: 1, unit: "cup" },
      { name: "avocado", image: "avocado.jpg", amount: 1, unit: "" }, { name: "cucumber", image: "cucumber.jpg", amount: 1, unit: "" },
      { name: "lemon", image: "lemon.png", amount: 1, unit: "" }, { name: "fresh dill", image: "dill.jpg", amount: 2, unit: "tbsp" },
    ],
    analyzedInstructions: [{ steps: [
      { number: 1, step: "Heat the oven to 210°C. Pat the salmon dry and season with salt, pepper, lemon zest, and chopped dill." },
      { number: 2, step: "Roast for 10–12 minutes, until the center is just opaque and flakes easily." },
      { number: 3, step: "Divide warm rice between bowls and arrange sliced cucumber and avocado alongside it." },
      { number: 4, step: "Add the salmon and spoon over a quick dressing of lemon juice, olive oil, dill, and a pinch of salt." },
    ] }],
  },
  {
    id: 9003, title: "Garden Harvest Crunch Salad", category: "Plant based", cuisine: "Californian", country: "United States",
    image: "/images/recipes/9003.jpg",
    readyInMinutes: 20, servings: 4, vegetarian: true, vegan: true, pricePerServing: 315,
    sourceName: "Savora Kitchen",
    extendedIngredients: [
      { name: "romaine lettuce", image: "romaine.jpg", amount: 2, unit: "heads" }, { name: "chickpeas", image: "chickpeas.png", amount: 1, unit: "can" },
      { name: "radishes", image: "radishes.jpg", amount: 6, unit: "" }, { name: "cucumber", image: "cucumber.jpg", amount: 1, unit: "" },
      { name: "pumpkin seeds", image: "pumpkin-seeds.jpg", amount: 3, unit: "tbsp" }, { name: "lemon", image: "lemon.png", amount: 1, unit: "" },
    ],
    analyzedInstructions: [{ steps: [
      { number: 1, step: "Rinse and thoroughly dry the greens, then tear them into generous bite-sized pieces." },
      { number: 2, step: "Drain the chickpeas and toast them in a skillet with olive oil, smoked paprika, and salt until crisp." },
      { number: 3, step: "Whisk lemon juice, olive oil, mustard, maple syrup, salt, and pepper into a bright dressing." },
      { number: 4, step: "Toss the greens and vegetables with dressing. Top with warm chickpeas and pumpkin seeds just before serving." },
    ] }],
  },
  {
    id: 9004, title: "Wood-Fired Margherita Pizza", category: "National favorite", cuisine: "Italian", country: "Italy",
    image: "/images/recipes/9004.jpg",
    readyInMinutes: 45, servings: 2, vegetarian: true, vegan: false, pricePerServing: 390,
    sourceName: "Savora Kitchen",
    extendedIngredients: [
      { name: "pizza dough", image: "pizza-dough.jpg", amount: 450, unit: "g" }, { name: "crushed tomatoes", image: "tomatoes-canned.png", amount: 1, unit: "cup" },
      { name: "fresh mozzarella", image: "mozzarella.png", amount: 200, unit: "g" }, { name: "fresh basil", image: "fresh-basil.jpg", amount: 12, unit: "leaves" },
      { name: "olive oil", image: "olive-oil.jpg", amount: 2, unit: "tbsp" }, { name: "semolina", image: "cornmeal.png", amount: 2, unit: "tbsp" },
    ],
    analyzedInstructions: [{ steps: [
      { number: 1, step: "Heat the oven and pizza stone as high as possible for at least 30 minutes." },
      { number: 2, step: "Stretch the dough by hand on a semolina-dusted surface, keeping a slightly thicker rim." },
      { number: 3, step: "Spread with tomatoes, add torn mozzarella, and drizzle lightly with olive oil." },
      { number: 4, step: "Bake until blistered and deeply golden. Finish with fresh basil and flaky salt." },
    ] }],
  },
  {
    id: 9005, title: "Silky Roasted Pumpkin Soup", category: "Plant based", cuisine: "French", country: "France",
    image: "/images/recipes/9005.jpg",
    readyInMinutes: 50, servings: 6, vegetarian: true, vegan: true, pricePerServing: 260,
    sourceName: "Savora Kitchen",
    extendedIngredients: [
      { name: "pumpkin", image: "pumpkin.png", amount: 1.5, unit: "kg" }, { name: "vegetable stock", image: "chicken-broth.png", amount: 1, unit: "L" },
      { name: "yellow onion", image: "brown-onion.png", amount: 1, unit: "large" }, { name: "garlic", image: "garlic.png", amount: 4, unit: "cloves" },
      { name: "coconut milk", image: "coconut-milk.png", amount: 200, unit: "ml" }, { name: "thyme", image: "thyme.jpg", amount: 4, unit: "sprigs" },
    ],
    analyzedInstructions: [{ steps: [
      { number: 1, step: "Roast pumpkin, onion, and garlic with olive oil and thyme at 200°C until caramelized and tender." },
      { number: 2, step: "Transfer the vegetables to a pot, add hot stock, and simmer gently for 10 minutes." },
      { number: 3, step: "Blend until completely smooth, then stir through coconut milk and adjust the seasoning." },
      { number: 4, step: "Serve with toasted seeds, thyme leaves, black pepper, and a swirl of coconut milk." },
    ] }],
  },
  {
    id: 9006, title: "Sunday Berry Ricotta Pancakes", category: "Breakfast", cuisine: "American", country: "United States",
    image: "/images/recipes/9006.jpg",
    readyInMinutes: 25, servings: 4, vegetarian: true, vegan: false, pricePerServing: 340,
    sourceName: "Savora Kitchen",
    extendedIngredients: [
      { name: "all-purpose flour", image: "flour.png", amount: 1.5, unit: "cups" }, { name: "ricotta", image: "ricotta.png", amount: 1, unit: "cup" },
      { name: "eggs", image: "egg.png", amount: 2, unit: "" }, { name: "milk", image: "milk.png", amount: 0.75, unit: "cup" },
      { name: "mixed berries", image: "berries-mixed.jpg", amount: 2, unit: "cups" }, { name: "maple syrup", image: "maple-syrup.png", amount: 4, unit: "tbsp" },
    ],
    analyzedInstructions: [{ steps: [
      { number: 1, step: "Whisk flour, baking powder, and a pinch of salt in a large bowl." },
      { number: 2, step: "Whisk ricotta, eggs, milk, lemon zest, and vanilla separately, then fold into the dry ingredients." },
      { number: 3, step: "Cook small ladlefuls in a lightly buttered skillet until bubbles appear; flip and cook until golden." },
      { number: 4, step: "Stack while warm and finish with berries, maple syrup, and a spoonful of ricotta." },
    ] }],
  },
];

export const curatedRecipes = [...coreRecipes, ...moreRecipes, ...worldRecipes];

export function findCuratedRecipes(query) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return curatedRecipes;
  const matches = curatedRecipes.filter((recipe) => {
    const text = `${recipe.title} ${recipe.country ?? ""} ${recipe.category ?? ""} ${recipe.cuisine ?? ""} ${recipe.vegetarian ? "vegetarian" : ""} ${recipe.vegan ? "vegan plant based" : ""} ${recipe.extendedIngredients?.map((item) => item.name).join(" ")}`.toLowerCase();
    return words.some((word) => text.includes(word));
  });
  return matches.length ? matches : curatedRecipes;
}
