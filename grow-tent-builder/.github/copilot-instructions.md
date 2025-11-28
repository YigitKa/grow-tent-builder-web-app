# GroWizard - AI Coding Agent Instructions

## Project Overview
GroWizard is a React + Vite PWA for planning indoor grow tent setups. It provides a multi-step builder flow (tent → lighting → ventilation → environment → nutrients → monitoring → summary) with bilingual support (EN/TR), PPFD lighting simulation, and grow management tools.

## Architecture Patterns

### State Management via Context
All app-level state flows through React contexts in `src/context/`:
- **BuilderContext**: Manages 8-step builder flow, tent dimensions, selected equipment, and cost/power totals. Uses reducer pattern with actions like `ADD_ITEM`, `INCREMENT_ITEM`, `SET_TENT_SIZE`
- **SettingsContext**: Handles language (EN/TR), currency (USD/EUR/TRY), units (imperial/metric), and provides translation function `t()`. Syncs to localStorage
- **OnboardingContext**: Tracks first-time user experience

Example: Adding equipment recalculates totals automatically via `calculateTotals()` in reducer.

### Bilingual Routing
Routes use `/:lang/*` pattern (e.g., `/en/builder`, `/tr/olusturucu`). The `LanguageWrapper` component syncs URL param with `SettingsContext`. All user-facing text uses `t('key')` from translations in `src/utils/translations_fixed.js`.

**Critical**: When adding routes, duplicate for both languages with appropriate translations (see `App.jsx` lines 79-109).

### CSS Module Pattern
Components use CSS Modules (`.module.css`) for scoped styles. Global design tokens live in `src/styles/variables.css` (colors, spacing) and reusable patterns in `src/styles/mixins.css` (glassmorphism, hover effects).

Example: `import styles from './Component.module.css'` then `className={styles.myClass}`

## Key Components

### Builder Flow (`src/features/`)
8 sequential selection components: `TentSelection.jsx` → `LightingSelection.jsx` → ... → `SummaryView.jsx`. Each dispatches to `BuilderContext` and uses `dispatch({ type: 'NEXT_STEP' })` for navigation.

### PPFD Lighting Simulation
`LightPlacementCanvas.jsx` provides interactive light placement with real-time PPFD heatmap using HTML5 Canvas. Core calculations in `src/utils/lightingUtils.js`:
- `generatePPFDMap()`: Creates grid-based PPFD distribution
- `calculatePPFD()`: Computes intensity using inverse-square law with beam angles
- Uses `@react-three/fiber` for 3D visualizations in some tools

### Tools Suite (`src/components/Tools/`)
Standalone calculators: `CostCalculator`, `CO2Calculator`, `UnitConverter`, `PPFDHeatMapTool`, feeding schedules (`FeedingSchedule.jsx`, `AdvancedNutrientsSchedule.jsx`). Each is self-contained with own module CSS.

## Development Workflows

### Running the App
```bash
npm run dev          # Vite dev server on :5173 with HMR
npm run build        # Production build (includes sitemap generation)
npm run preview      # Preview production build
npm run lint         # ESLint check
```

### Adding Features
1. **New builder step**: Create in `src/features/`, add to `BuilderApp.jsx` switch statement, increment max step in reducer
2. **New tool**: Add to `src/components/Tools/`, register route in `App.jsx` for both `/en/tools/` and `/tr/araclar/` paths
3. **New translation key**: Add to both `en` and `tr` objects in `src/utils/translations_fixed.js`

### Environment Variables
- `VITE_GTAG_ID`: Google Analytics tracking ID (optional). Injected via `src/analytics.js`

## Critical Conventions

- **Units**: Internal calculations use feet. Convert with `formatUnit()` from SettingsContext for display
- **Equipment data**: Structured objects with `{ id, name, price, watts, quantity }`. Nutrients use complex schedules in `src/data/`
- **ESLint**: Uses `varsIgnorePattern: '^[A-Z_]'` to ignore unused constants
- **PWA**: Configured in `vite.config.js` with service worker auto-update. `UpdatePrompt.jsx` handles user notifications
- **Rolldown**: Uses `rolldown-vite` fork (see `package.json` overrides) for faster builds

## File Structure Highlights
- `src/features/` = Builder step components (selection pages)
- `src/components/` = Reusable UI (Layout, ProgressTracker, Footer)
- `src/data/` = Static data (nutrients: `biobizzProducts.js`, `advancedNutrientsData.js`)
- `src/utils/` = Pure functions (lighting calculations, cost estimation, translations)
- `public/` = Static assets (icons, sitemap, robots.txt)

## Common Tasks

**Add equipment category**: 
1. Add state to `BuilderContext` initialState
2. Create selection component in `features/`
3. Update `calculateTotals()` if affects cost/power

**Modify PPFD calculations**: Edit `src/utils/lightingUtils.js`. Parameters: beam angle (degrees), intensity (µmol/s), height (feet)

**Change theme**: Modify CSS variables in `src/styles/variables.css` (colors, radii, shadows)

**Framer Motion**: Only used in feeding schedule tools for animations. Import via `framer-motion` package.
