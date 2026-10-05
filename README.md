# Sruthi — Carnatic Music System

Sruthi is a set of static website mockups for exploring Carnatic music, with a standalone browser-based Harmonium Companion. It does not include a React application or backend.

## Pages

- `home_sruthi/code.html` — home page with an overview of the site and its instruments.
- `learn_sruthi/code.html` — learning page mockup.
- `compose_sruthi/code.html` — composition workspace mockup.
- `instruments_sruthi/code.html` — instrument selection and interaction mockup.
- `harmonium_companion/index.html` — the interactive Harmonium Companion.

The instruments planned for the project are:

- **Tanpura** — a drone instrument; the mockup includes four interactive string controls.
- **Harmonium** — a reed keyboard instrument.
- **Mridangam** — a percussion instrument.

Tanpura and Mridangam currently have visual mockups only. The Harmonium Companion is a working browser-based instrument with keyboard and MIDI input, ragas, bellows, and audio effects. Open it from the Harmonium card on the Instruments page.

## Run locally

No package installation or build step is required. Open any page's `code.html` file in a browser, or serve the repository root with Python:

```powershell
python -m http.server 8000
```

Then visit:

- Home: http://localhost:8000/home_sruthi/code.html
- Learn: http://localhost:8000/learn_sruthi/code.html
- Compose: http://localhost:8000/compose_sruthi/code.html
- Instruments: http://localhost:8000/instruments_sruthi/code.html
- Harmonium Companion: http://localhost:8000/harmonium_companion/index.html

The mockups load Tailwind CSS and fonts from external CDNs, so those resources require an internet connection. The Harmonium Companion also loads its synthesis engine from unpkg and fetches its bundled soundfont, so use a local web server and an internet connection for playback.

## Project status

These pages are design prototypes rather than a fully connected application. Lessons, composition, and Tanpura/Mridangam interactions may be incomplete or visual-only. `sruthi_shadow/DESIGN.md` describes the visual direction.

The Harmonium Companion is included under its MIT license; see `harmonium_companion/LICENSE` and `harmonium_companion/README.md` for attribution and usage notes.
