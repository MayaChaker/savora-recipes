# Savora — World Food Discovery

![Savora culinary experience](./public/images/savora-hero.png)

Savora is a polished world-food discovery experience that helps home cooks explore the signature dishes of different countries. The application combines cultural discovery with practical cooking guidance through curated recipes, ingredient lists, step-by-step methods, country-based search, persistent favorites, and optional live Spoonacular results.

The built-in catalog works immediately without an account, API key, or network request.

## Highlights

- **20 complete international recipes** representing Europe, Asia, Africa, the Middle East, North America, and South America
- **Country-first discovery** by country, cuisine, dish, ingredient, dietary preference, or category
- **Detailed recipe modals** with preparation time, servings, estimated price, ingredients, and numbered instructions
- **Surprise Me** discovery that opens a different recipe from the active results
- **Persistent favorites** stored locally with a dedicated favorites modal
- **Resilient built-in catalog** that keeps the product useful when the external API is unavailable
- **Optional Spoonacular enhancement** through a same-origin server proxy
- **Responsive design** for mobile, tablet, and desktop
- **Accessible interactions** including semantic structure, focus styles, keyboard controls, Escape-to-close, and reduced-motion support
- **Strict TypeScript** models and component-scoped CSS Modules

## Featured Countries

Savora currently includes dishes inspired by:

| Region | Countries |
| --- | --- |
| Middle East & North Africa | Lebanon, Morocco, Tunisia, Türkiye |
| Europe | Austria, France, Greece, Italy, Norway, Spain |
| Asia | India, Japan, South Korea, Thailand |
| Americas | Brazil, Mexico, United States |

## Technology

| Area | Technology |
| --- | --- |
| UI | React 18 |
| Language | TypeScript |
| Build tooling | Vite 5 |
| Styling | CSS Modules and global design tokens |
| Data | Curated local catalog and optional Spoonacular API |
| Persistence | Browser `localStorage` |
| Quality | ESLint and strict TypeScript compilation |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A [Spoonacular API key](https://spoonacular.com/food-api) only if live external search is required

### Installation

Clone the repository and enter the application directory:

```bash
git clone https://github.com/MayaChaker/foodApp.git
cd foodApp/@Latest
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in a browser.

## Optional Spoonacular Configuration

Savora works without Spoonacular by using its bundled catalog. To enable live recipe search, copy the example environment file:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Add a newly generated API key to `.env.local`:

```env
SPOONACULAR_API_KEY=your_spoonacular_api_key
```

Restart the development server after changing environment variables.

> [!IMPORTANT]
> Never prefix this secret with `VITE_`. Vite exposes `VITE_` variables to browser code. The existing same-origin proxy keeps `SPOONACULAR_API_KEY` on the server side during development and preview.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement |
| `npm run build` | Run strict TypeScript compilation and create a production bundle |
| `npm run lint` | Analyze the project with ESLint |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
@Latest/
├── public/
│   └── images/                 # Project-owned visual assets
├── src/
│   ├── components/             # UI components and CSS Modules
│   │   ├── Contact.tsx
│   │   ├── FavoritesModal.tsx
│   │   ├── FoodDetails.tsx
│   │   ├── FoodItem.tsx
│   │   ├── FoodList.tsx
│   │   ├── Footer.tsx
│   │   ├── Nav.tsx
│   │   ├── RecipeModal.tsx
│   │   └── Search.tsx
│   ├── data/                   # Curated international recipe catalog
│   ├── services/               # Spoonacular client and response validation
│   ├── App.tsx                 # Application state and modal coordination
│   ├── index.css               # Global reset, tokens, and accessibility rules
│   ├── main.tsx                # React entry point
│   └── types.ts                # Shared strict data models
├── .env.example                # Safe environment-variable template
├── vite.config.ts              # Vite and secure API-proxy configuration
└── package.json
```

## Architecture

### Data strategy

The curated catalog is the primary experience and guarantees that the application remains useful without external services. Searches can be matched locally by country, cuisine, category, ingredient, and dietary preference. When Spoonacular is configured, non-empty searches can be enhanced with live results and safely fall back to the local catalog if the request fails.

### UI state

`App.tsx` coordinates search results, recipe selection, favorites, and modal visibility. Recipe details and favorites are presented in independent accessible dialogs. Obsolete API requests are cancelled with `AbortController`, while search input is debounced to avoid unnecessary requests.

### Favorites

Favorite recipe IDs are stored in `localStorage` under `savora-favorites`. A small browser event keeps the recipe detail view, navigation counter, and favorites modal synchronized immediately.

## API Security and Deployment

Browser requests use `/api/spoonacular` and never include the API key directly. During development and Vite preview, `vite.config.ts` forwards the request to Spoonacular and appends the server-side `SPOONACULAR_API_KEY`.

For production, deploy behind a server or serverless function that implements the same `/api/spoonacular` route. A static host cannot protect an API secret by itself. Recommended production safeguards include:

- Store the key in the hosting provider's encrypted environment settings
- Allow only the required Spoonacular endpoints
- Validate and encode all incoming query parameters
- Add rate limiting and request timeouts
- Avoid logging secrets or complete upstream URLs containing credentials
- Rotate any key that has previously appeared in frontend source or Git history

## Quality Checks

Before opening a pull request or deploying:

```bash
npm run lint
npm run build
```

The build command performs strict TypeScript validation before generating the optimized Vite bundle.

## Roadmap

- Country directory with dedicated cultural introductions
- Ingredient-based “What can I cook?” recommendations
- User accounts and cloud-synchronized collections
- Recipe difficulty and nutrition filters
- Production serverless Spoonacular proxy
- Localization for Arabic and additional languages

## Repository

[github.com/MayaChaker/foodApp](https://github.com/MayaChaker/foodApp)
