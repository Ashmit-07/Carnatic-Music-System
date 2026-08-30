# Sruthi — Carnatic Music System

This project is being built as a simple website with three main areas:

1. Learning
2. Compose
3. Instruments

The current version is an early working prototype. The learning section is intentionally left empty for now, and the compose/instruments sections are still in the research and design phase.

Important: Update this file after each feature added.

## What is done so far

### Frontend
- Converted the original mock/static website into a beginner-friendly React + Tailwind frontend.
- Kept the same visual style and layout as closely as possible.
- Created a simple page-based navigation system:
  - Home
  - Learn
  - Compose
  - Instruments
- Added working interactive elements for the main buttons and state changes.
- Kept the project structure simple and easy to understand.

### Backend
- Set up a minimal Flask backend.
- Added a simple SQLite database layer for saved compositions.
- Added API endpoints for basic functionality:
  - health/status check
  - save and load compositions
- Added CORS support for local React-to-Flask development.

### Project files
- frontend/
  - src/App.jsx
  - src/main.jsx
  - src/pages/Home.jsx
  - src/pages/Learn.jsx
  - src/pages/Compose.jsx
  - src/pages/Instruments.jsx
  - src/components/Header.jsx
  - src/components/Footer.jsx
- backend/
  - app.py
  - database.py
  - requirements.txt
- run guide and docs
  - RUN_GUIDE.md
  - README.md

## What is still to be done

### 1. Learning section
- This part remains empty for now as requested.
- Later, we will add structured lesson cards, lesson pages, and progression tracking.
- Lessons will be added one by one after the core product structure is stable.

### 2. Compose section
- This area is only a basic prototype for now.
- The actual music-sheet composition workflow still needs deeper research.
- Future work may include:
  - note selection and melody building
  - raga/tala logic
  - saving richer composition data
  - timeline or notation-inspired layout

### 3. Instruments section
- This section is also a placeholder for future research.
- Later, we will define which instruments are included and what behavior each one should have.
- Possible future work:
  - instrument-specific controls
  - audio playback or simulation
  - visual instrument interaction

### 4. Cleanup and improvements
- Review the app for polish and consistency.
- Improve the empty states and placeholder screens.
- Add more realistic functionality once the product direction is clearer.
- Improve documentation as features are added.

## Current status

This is still a foundation project, not a final product. The core app structure, UI conversion, and basic backend connection are working, but the major feature areas (lessons, real composition features, instruments) are intentionally left for future development.

## Local startup

For the setup and run instructions, see [RUN_GUIDE.md](RUN_GUIDE.md).

## Notes
- The frontend and backend are kept separate for clarity.
- SQLite is used only where needed, mainly for saved compositions.
- The project intentionally avoids unnecessary complexity and extra libraries.

## Update policy

Update this file after each feature added.
