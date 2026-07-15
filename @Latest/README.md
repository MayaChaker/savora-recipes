# Savora Recipe Explorer

Savora is a responsive world-food discovery interface built with React, TypeScript, and Vite. It includes 20 complete recipes representing famous dishes from countries across Europe, Asia, Africa, the Middle East, North America, and South America. It works immediately with optional Spoonacular search enhancement, saved favorites, ingredients, and guided cooking steps.

## Requirements

- Node.js 18 or newer
- A [Spoonacular API](https://spoonacular.com/food-api) key (optional)

## Setup

Install dependencies:

```bash
npm install
```

The built-in catalog requires no setup. To enhance search with Spoonacular, copy `.env.example` to `.env.local`, then add your API key:

```env
VITE_SPOONACULAR_API_KEY=your_spoonacular_api_key
```

Start development:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run code-quality checks:

```bash
npm run lint
```

## Architecture

- `src/services/spoonacular.ts` owns Spoonacular requests and response validation.
- `src/types.ts` contains shared strict API models.
- `src/components/Search.tsx` debounces search input and cancels obsolete requests.
- `src/components/FoodList.tsx` renders loading, error, empty, and result states.
- `src/components/FoodDetails.tsx` loads the selected recipe independently and safely renders optional API data.
- Component-specific presentation remains in CSS Modules; global design tokens and accessibility defaults live in `src/index.css`.

## API-key note

Vite exposes `VITE_` variables to browser code. `.env.local` keeps the key out of source control, but it does not make the key secret from application users. A production deployment should call Spoonacular through a protected backend or serverless proxy.
