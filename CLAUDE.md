# Projekt-Hinweise für Claude

## Arbeitsweise / Workflow

- **Änderungen immer direkt nach `main` mergen.** Robert möchte jede Änderung
  sofort live sehen. Der Workflow `.github/workflows/deploy-pages.yml` deployt
  bei jedem Push auf `main` automatisch nach GitHub Pages.
  Also: auf dem Feature-Branch entwickeln, committen, **nach `main` mergen und
  `main` pushen** – nicht auf einen offenen Pull Request warten.
- Kein Pull Request nötig, außer Robert fragt ausdrücklich danach.

## Technisches

- Statische Website ohne Build-Schritt: `index.html`, `assets/css/style.css`,
  `assets/js/data.js` (Inhalte/Texte), `assets/js/app.js` (Interaktivität).
- **Bei jeder Änderung an CSS/JS die Versionsnummer hochzählen**, sonst sehen
  Nutzer wegen des Service Workers die alte Version:
  - `?v=N` in den `<link>`/`<script>`-Tags in `index.html`
  - `CACHE = "malle-2026-vN"` und die `ASSETS`-Liste in `sw.js`
- Alle Texte sind auf Deutsch.
