# Savora — World Food Discovery

![Savora culinary experience](./@Latest/public/images/savora-hero.png)

Savora is a polished world-food discovery experience that helps home cooks explore signature dishes from different countries. It combines cultural discovery with practical cooking guidance through curated recipes, ingredient lists, step-by-step methods, country-based search, persistent favorites, and optional live Spoonacular results.

The built-in catalog works immediately without an account, API key, or network request.

## Features

- 20 complete international recipes across Europe, Asia, Africa, the Middle East, and the Americas
- Search by country, cuisine, dish, ingredient, category, or dietary preference
- Responsive recipe cards and accessible detail modals
- Complete ingredients, preparation times, servings, prices, and numbered instructions
- **Surprise Me** discovery using the current results or complete catalog
- Persistent **My Favorites** collection backed by `localStorage`
- Contact section and responsive multi-column footer
- Safe local fallback when Spoonacular is unavailable
- Mobile, tablet, and desktop layouts
- Strict TypeScript, CSS Modules, and ESLint validation

## Featured Countries

| Region | Countries |
| --- | --- |
| Middle East & North Africa | Lebanon, Morocco, Tunisia, Türkiye |
| Europe | Austria, France, Greece, Italy, Norway, Spain |
| Asia | India, Japan, South Korea, Thailand |
| Americas | Brazil, Mexico, United States |

## Technology

| Area | Technology |
| --- | --- |
| Frontend | React 18 and TypeScript |
| Build tooling | Vite 5 |
| Styling | CSS Modules and global design tokens |
| Data | Curated local catalog and optional Spoonacular API |
| Persistence | Browser `localStorage` |
| Quality | ESLint and strict TypeScript compilation |

## Getting Started

### Requirements

- Node.js 18 or newer
- npm
- A Spoonacular key only if live external search is required

### Installation

```bash
git clone https://github.com/MayaChaker/foodApp.git
cd foodApp/@Latest
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Optional Spoonacular Setup

Savora works without external configuration. To enhance search with Spoonacular, create `@Latest/.env.local` from the provided example:

```env
SPOONACULAR_API_KEY=your_spoonacular_api_key
```

Restart the development server after changing environment variables.

> [!IMPORTANT]
> Never prefix this secret with `VITE_`. Vite exposes `VITE_` variables to browser code. Savora uses a same-origin `/api/spoonacular` proxy so the key remains server-side during development and preview.

## Scripts

Run these commands from `@Latest`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Validate TypeScript and create a production bundle |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production bundle locally |

## Project Structure

```text
foodApp/
├── README.md
└── @Latest/
    ├── public/images/          # Project-owned visual assets
    ├── src/
    │   ├── components/        # UI components and CSS Modules
    │   ├── data/              # Curated international recipes
    │   ├── services/          # Spoonacular client
    │   ├── App.tsx            # Application state and modal coordination
    │   ├── index.css          # Global design system
    │   └── types.ts           # Shared strict data models
    ├── .env.example
    ├── package.json
    └── vite.config.ts         # Build and secure API proxy configuration
```

## API Security and Deployment

Browser requests use `/api/spoonacular` and never include the API key directly. During local development and Vite preview, `vite.config.ts` forwards requests and appends the server-side key.

Production deployments should implement the same route with a protected backend or serverless function. A static host cannot protect an API secret by itself. Store secrets in encrypted hosting-provider settings, restrict allowed endpoints, add rate limiting, and rotate any key that has appeared in frontend source or Git history.

## Quality Checks

```bash
cd @Latest
npm run lint
npm run build
```

## Detailed Documentation

The application directory also contains the extended technical documentation: [@Latest/README.md](./@Latest/README.md).

## Roadmap

- Dedicated country pages with cultural introductions
- Ingredient-based “What can I cook?” recommendations
- User accounts and synchronized collections
- Difficulty and nutrition filters
- Production serverless API proxy
- Arabic and additional language support
