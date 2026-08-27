Sruthi — React frontend + Flask backend conversion

For the actual local startup steps, see RUN_GUIDE.md.

What I changed/added:

frontend/
- index.html — Vite-style entry that includes Tailwind CDN and font imports
- package.json — minimal scripts for vite
- src/main.jsx — React entry
- src/index.css — small helper styles and font import
- src/App.jsx — app shell with client-side navigation state
- src/components/Header.jsx, Footer.jsx — header and footer converted from HTML
- src/pages/Home.jsx, Learn.jsx, Compose.jsx, Instruments.jsx — converted pages as React components. Compose uses fetch to save/load compositions from the backend.

backend/
- app.py — Flask app exposing /api/status and /api/compositions (GET, POST)
- database.py — SQLite helper and schema
- requirements.txt — backend python deps

Notes on styling & functionality:
- Tailwind is included via CDN in index.html and configured there so the same class-based approach is used.
- Interactive behaviors (play/pause, fret click ripple) are implemented with React state and lightweight handlers.
- Compositions are persisted in SQLite (backend/sruthi.db) when the Save button is used.

Development behavior:
- The frontend currently points directly to the backend with http://127.0.0.1:5000 for simple local development.
- The Flask backend also includes CORS headers so the React app on http://localhost:5173 can talk to it during local development.

How the frontend communicates with the backend
- GET /api/compositions — returns saved compositions
- POST /api/compositions — save a composition with JSON {name, content}
- GET /api/status — simple health/status check
