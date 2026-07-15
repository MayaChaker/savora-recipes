import type { RecipeDetails } from "../types";

export const worldRecipes: RecipeDetails[] = [
  {
    id: 9020, title: "Mexico City Street Tacos", country: "Mexico", cuisine: "Mexican", category: "Street food",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=85", readyInMinutes: 35, servings: 4, vegetarian: false, vegan: false, pricePerServing: 430,
    extendedIngredients: [{ name: "flank steak", amount: 600, unit: "g" }, { name: "corn tortillas", amount: 12, unit: "small" }, { name: "white onion", amount: 1, unit: "" }, { name: "fresh cilantro", amount: 1, unit: "cup" }, { name: "limes", amount: 3, unit: "" }, { name: "salsa verde", amount: 0.5, unit: "cup" }],
    analyzedInstructions: [{ steps: [{ number: 1, step: "Marinate the steak with lime, garlic, cumin, chili, salt, and oil." }, { number: 2, step: "Sear over high heat until browned, rest briefly, then chop into small pieces." }, { number: 3, step: "Warm the tortillas in a dry pan until soft and lightly blistered." }, { number: 4, step: "Fill with steak and finish with onion, cilantro, salsa verde, and lime." }] }],
  },
  {
    id: 9021, title: "Fragrant Chicken Tagine", country: "Morocco", cuisine: "Moroccan", category: "Slow cooking",
    image: "https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?auto=format&fit=crop&w=1200&q=85", readyInMinutes: 80, servings: 6, vegetarian: false, vegan: false, pricePerServing: 520,
    extendedIngredients: [{ name: "chicken thighs", amount: 1.2, unit: "kg" }, { name: "preserved lemon", amount: 1, unit: "" }, { name: "green olives", amount: 1, unit: "cup" }, { name: "yellow onion", amount: 2, unit: "" }, { name: "ground ginger", amount: 1, unit: "tsp" }, { name: "saffron", amount: 1, unit: "pinch" }],
    analyzedInstructions: [{ steps: [{ number: 1, step: "Season chicken with ginger, turmeric, pepper, saffron, and salt." }, { number: 2, step: "Soften onions in olive oil, add the chicken, and brown gently." }, { number: 3, step: "Add water, cover, and simmer until the chicken is tender and the sauce concentrated." }, { number: 4, step: "Add preserved lemon and olives for the final 10 minutes and serve with couscous." }] }],
  },
  {
    id: 9022, title: "Colorful Bibimbap", country: "South Korea", cuisine: "Korean", category: "Rice bowl",
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=1200&q=85", readyInMinutes: 45, servings: 4, vegetarian: false, vegan: false, pricePerServing: 470,
    extendedIngredients: [{ name: "short grain rice", amount: 2, unit: "cups" }, { name: "beef strips", amount: 300, unit: "g" }, { name: "spinach", amount: 200, unit: "g" }, { name: "carrots", amount: 2, unit: "" }, { name: "eggs", amount: 4, unit: "" }, { name: "gochujang", amount: 3, unit: "tbsp" }],
    analyzedInstructions: [{ steps: [{ number: 1, step: "Cook the rice and keep it covered while preparing the toppings." }, { number: 2, step: "Season and saute each vegetable separately to preserve its color and texture." }, { number: 3, step: "Quickly sear the marinated beef and fry the eggs with soft yolks." }, { number: 4, step: "Arrange everything over rice, add gochujang, and mix at the table." }] }],
  },
  {
    id: 9023, title: "Bangkok-Style Pad Thai", country: "Thailand", cuisine: "Thai", category: "Street food",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=85", readyInMinutes: 30, servings: 3, vegetarian: false, vegan: false, pricePerServing: 450,
    extendedIngredients: [{ name: "rice noodles", amount: 300, unit: "g" }, { name: "shrimp", amount: 300, unit: "g" }, { name: "eggs", amount: 2, unit: "" }, { name: "bean sprouts", amount: 2, unit: "cups" }, { name: "tamarind paste", amount: 3, unit: "tbsp" }, { name: "roasted peanuts", amount: 0.5, unit: "cup" }],
    analyzedInstructions: [{ steps: [{ number: 1, step: "Soak the noodles until flexible but still firm, then drain well." }, { number: 2, step: "Combine tamarind, fish sauce, and palm sugar into a balanced sauce." }, { number: 3, step: "Stir-fry shrimp, add eggs, then noodles and sauce; toss over high heat." }, { number: 4, step: "Fold in sprouts and serve with peanuts, chili, and lime." }] }],
  },
  {
    id: 9024, title: "Classic Greek Moussaka", country: "Greece", cuisine: "Greek", category: "Comfort food",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85", readyInMinutes: 105, servings: 8, vegetarian: false, vegan: false, pricePerServing: 540,
    extendedIngredients: [{ name: "eggplants", amount: 3, unit: "large" }, { name: "ground lamb", amount: 700, unit: "g" }, { name: "crushed tomatoes", amount: 400, unit: "g" }, { name: "potatoes", amount: 3, unit: "" }, { name: "milk", amount: 750, unit: "ml" }, { name: "parmesan", amount: 100, unit: "g" }],
    analyzedInstructions: [{ steps: [{ number: 1, step: "Slice and salt the eggplant, pat dry, then roast until golden." }, { number: 2, step: "Cook lamb with onion, garlic, tomato, cinnamon, and oregano." }, { number: 3, step: "Make a smooth bechamel and enrich it with egg yolk and cheese." }, { number: 4, step: "Layer potatoes, eggplant, meat sauce, and bechamel; bake until browned." }] }],
  },
  {
    id: 9025, title: "Brazilian Feijoada", country: "Brazil", cuisine: "Brazilian", category: "National favorite",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=85", readyInMinutes: 150, servings: 8, vegetarian: false, vegan: false, pricePerServing: 495,
    extendedIngredients: [{ name: "black beans", amount: 500, unit: "g" }, { name: "pork shoulder", amount: 600, unit: "g" }, { name: "smoked sausage", amount: 400, unit: "g" }, { name: "bay leaves", amount: 3, unit: "" }, { name: "white rice", amount: 3, unit: "cups" }, { name: "oranges", amount: 2, unit: "" }],
    analyzedInstructions: [{ steps: [{ number: 1, step: "Soak the beans overnight, drain, and cover with fresh water." }, { number: 2, step: "Brown the pork and sausage, then add them to the beans with bay leaves." }, { number: 3, step: "Simmer slowly until the beans are creamy and the meat is tender." }, { number: 4, step: "Serve with rice, sauteed greens, cassava flour, and orange slices." }] }],
  },
  {
    id: 9026, title: "Turkish Adana Kebab", country: "Türkiye", cuisine: "Turkish", category: "Grill",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=85", readyInMinutes: 50, servings: 4, vegetarian: false, vegan: false, pricePerServing: 580,
    extendedIngredients: [{ name: "ground lamb", amount: 800, unit: "g" }, { name: "red pepper", amount: 1, unit: "" }, { name: "pul biber", amount: 2, unit: "tsp" }, { name: "flatbread", amount: 4, unit: "" }, { name: "tomatoes", amount: 4, unit: "" }, { name: "sumac onions", amount: 2, unit: "" }],
    analyzedInstructions: [{ steps: [{ number: 1, step: "Knead lamb with chopped pepper, chili, salt, and pepper until sticky." }, { number: 2, step: "Press around wide skewers and chill briefly to hold the shape." }, { number: 3, step: "Grill over very hot charcoal, turning often, until smoky and cooked through." }, { number: 4, step: "Serve over flatbread with grilled vegetables, parsley, lemon, and sumac onions." }] }],
  },
  {
    id: 9027, title: "Viennese Schnitzel", country: "Austria", cuisine: "Austrian", category: "Classic",
    image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&w=1200&q=85", readyInMinutes: 35, servings: 4, vegetarian: false, vegan: false, pricePerServing: 620,
    extendedIngredients: [{ name: "veal cutlets", amount: 4, unit: "" }, { name: "all-purpose flour", amount: 1, unit: "cup" }, { name: "eggs", amount: 3, unit: "" }, { name: "breadcrumbs", amount: 2, unit: "cups" }, { name: "clarified butter", amount: 1, unit: "cup" }, { name: "lemons", amount: 2, unit: "" }],
    analyzedInstructions: [{ steps: [{ number: 1, step: "Pound each cutlet very thin and season on both sides." }, { number: 2, step: "Coat lightly in flour, beaten egg, and breadcrumbs without pressing." }, { number: 3, step: "Shallow-fry in hot clarified butter until puffed and golden." }, { number: 4, step: "Serve immediately with lemon, parsley potatoes, and lingonberry preserve." }] }],
  },
];
