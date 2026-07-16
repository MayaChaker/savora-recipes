export const moreRecipes = [
  {
    id: 9010, title: "Lebanese Chicken Shawarma Plate", category: "National favorite", cuisine: "Lebanese", country: "Lebanon",
    image: "/images/recipes/9010.jpg",
    readyInMinutes: 55, servings: 4, vegetarian: false, vegan: false, pricePerServing: 610,
    extendedIngredients: [
      { name: "chicken thighs", image: "chicken-thighs.png", amount: 800, unit: "g" }, { name: "plain yogurt", image: "plain-yogurt.jpg", amount: 0.5, unit: "cup" },
      { name: "garlic", image: "garlic.png", amount: 4, unit: "cloves" }, { name: "lemon", image: "lemon.png", amount: 2, unit: "" },
      { name: "shawarma spice", image: "garam-masala.jpg", amount: 2, unit: "tbsp" }, { name: "pita bread", image: "pita-bread.jpg", amount: 4, unit: "" },
    ], analyzedInstructions: [{ steps: [
      { number: 1, step: "Marinate the chicken with yogurt, lemon, garlic, shawarma spices, salt, and olive oil for at least 30 minutes." },
      { number: 2, step: "Sear in a very hot skillet until deeply browned and cooked through, then rest before slicing." },
      { number: 3, step: "Whisk tahini with lemon, garlic, cold water, and salt until creamy." },
      { number: 4, step: "Serve the chicken with warm pita, pickles, tomatoes, herbs, and generous tahini sauce." },
    ] }],
  },
  {
    id: 9011, title: "Miso Sesame Noodle Bowl", category: "Quick meals", cuisine: "Japanese", country: "Japan",
    image: "/images/recipes/9011.jpg",
    readyInMinutes: 20, servings: 2, vegetarian: true, vegan: true, pricePerServing: 420,
    extendedIngredients: [
      { name: "ramen noodles", image: "ramen.jpg", amount: 250, unit: "g" }, { name: "white miso", image: "miso.jpg", amount: 2, unit: "tbsp" },
      { name: "tahini", image: "tahini.png", amount: 1, unit: "tbsp" }, { name: "soy sauce", image: "soy-sauce.jpg", amount: 2, unit: "tbsp" },
      { name: "bok choy", image: "bok-choy.jpg", amount: 2, unit: "heads" }, { name: "sesame seeds", image: "sesame-seeds.png", amount: 1, unit: "tbsp" },
    ], analyzedInstructions: [{ steps: [
      { number: 1, step: "Whisk miso, tahini, soy sauce, rice vinegar, and a splash of hot noodle water until smooth." },
      { number: 2, step: "Cook the noodles according to their package directions and blanch the bok choy in the same pot." },
      { number: 3, step: "Toss the hot noodles through the miso sauce until glossy." },
      { number: 4, step: "Top with bok choy, scallions, sesame seeds, and chili crisp." },
    ] }],
  },
  {
    id: 9012, title: "Creamy Butter Chicken", category: "National favorite", cuisine: "Indian", country: "India",
    image: "/images/recipes/9012.jpg",
    readyInMinutes: 50, servings: 4, vegetarian: false, vegan: false, pricePerServing: 575,
    extendedIngredients: [
      { name: "chicken breast", image: "chicken-breasts.png", amount: 700, unit: "g" }, { name: "tomato puree", image: "tomato-paste.jpg", amount: 400, unit: "g" },
      { name: "heavy cream", image: "fluid-cream.jpg", amount: 150, unit: "ml" }, { name: "garam masala", image: "garam-masala.jpg", amount: 2, unit: "tsp" },
      { name: "butter", image: "butter-sliced.jpg", amount: 3, unit: "tbsp" }, { name: "basmati rice", image: "rice-white-long-grain-or-basmatii-cooked.jpg", amount: 2, unit: "cups" },
    ], analyzedInstructions: [{ steps: [
      { number: 1, step: "Coat the chicken in yogurt, garam masala, turmeric, garlic, ginger, and salt." },
      { number: 2, step: "Brown the chicken in batches, then set aside while you build the sauce." },
      { number: 3, step: "Cook tomato puree with butter and spices until rich, then stir in cream and return the chicken." },
      { number: 4, step: "Simmer gently until tender and serve with basmati rice, cilantro, and warm naan." },
    ] }],
  },
  {
    id: 9013, title: "Crispy Falafel Mezze Bowl", category: "Street food", cuisine: "Levantine", country: "Lebanon",
    image: "/images/recipes/9013.png",
    readyInMinutes: 40, servings: 4, vegetarian: true, vegan: true, pricePerServing: 350,
    extendedIngredients: [
      { name: "dried chickpeas", image: "chickpeas.png", amount: 2, unit: "cups" }, { name: "fresh parsley", image: "parsley.jpg", amount: 1, unit: "cup" },
      { name: "cilantro", image: "cilantro.png", amount: 1, unit: "cup" }, { name: "cumin", image: "ground-cumin.jpg", amount: 2, unit: "tsp" },
      { name: "tahini", image: "tahini.png", amount: 0.5, unit: "cup" }, { name: "tomatoes", image: "tomato.png", amount: 3, unit: "" },
    ], analyzedInstructions: [{ steps: [
      { number: 1, step: "Soak dried chickpeas overnight, then drain thoroughly. Do not use canned chickpeas." },
      { number: 2, step: "Pulse chickpeas with herbs, onion, garlic, cumin, and coriander into a coarse mixture." },
      { number: 3, step: "Shape into small patties and shallow-fry until crisp and deep golden on both sides." },
      { number: 4, step: "Build bowls with chopped salad, hummus, pickles, falafel, and lemon tahini sauce." },
    ] }],
  },
  {
    id: 9014, title: "Dark Chocolate Olive Oil Cake", category: "Dessert", cuisine: "Spanish", country: "Spain",
    image: "/images/recipes/9014.jpg",
    readyInMinutes: 60, servings: 10, vegetarian: true, vegan: false, pricePerServing: 295,
    extendedIngredients: [
      { name: "cocoa powder", image: "cocoa-powder.png", amount: 0.75, unit: "cup" }, { name: "all-purpose flour", image: "flour.png", amount: 1.5, unit: "cups" },
      { name: "olive oil", image: "olive-oil.jpg", amount: 0.75, unit: "cup" }, { name: "eggs", image: "egg.png", amount: 3, unit: "" },
      { name: "dark chocolate", image: "dark-chocolate-pieces.jpg", amount: 120, unit: "g" }, { name: "orange", image: "orange.png", amount: 1, unit: "" },
    ], analyzedInstructions: [{ steps: [
      { number: 1, step: "Heat the oven to 175°C and line a 23 cm cake tin with parchment." },
      { number: 2, step: "Whisk cocoa with hot coffee, then whisk in olive oil, eggs, sugar, vanilla, and orange zest." },
      { number: 3, step: "Fold in flour, baking soda, salt, and chopped dark chocolate without overmixing." },
      { number: 4, step: "Bake until the center is just set. Cool fully and finish with cocoa and flaky sea salt." },
    ] }],
  },
  {
    id: 9015, title: "Green Shakshuka Brunch", category: "Breakfast", cuisine: "North African", country: "Tunisia",
    image: "/images/recipes/9015.jpg",
    readyInMinutes: 30, servings: 3, vegetarian: true, vegan: false, pricePerServing: 330,
    extendedIngredients: [
      { name: "eggs", image: "egg.png", amount: 6, unit: "" }, { name: "baby spinach", image: "spinach.jpg", amount: 300, unit: "g" },
      { name: "leek", image: "leeks.jpg", amount: 1, unit: "" }, { name: "feta", image: "feta.png", amount: 100, unit: "g" },
      { name: "fresh herbs", image: "mixed-fresh-herbs.jpg", amount: 1, unit: "cup" }, { name: "sourdough", image: "sourdough-bread.jpg", amount: 6, unit: "slices" },
    ], analyzedInstructions: [{ steps: [
      { number: 1, step: "Soften sliced leek and garlic in olive oil, then add spinach until just wilted." },
      { number: 2, step: "Blend half the greens with herbs and a splash of water, then return the sauce to the pan." },
      { number: 3, step: "Make six wells, crack in the eggs, cover, and cook until the whites set but yolks remain soft." },
      { number: 4, step: "Scatter with feta, herbs, chili flakes, and lemon zest. Serve immediately with toasted sourdough." },
    ] }],
  },
];
