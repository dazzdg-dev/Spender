# TaskPulse Advisor
Financial advisor • planner • tracker — **PDF-first, offline-first**. Import FNB/Capitec **PDF statements**, auto-categorise, forecast cashflow, and get overdraft warnings (with a fixed **R500** overdraft limit baked in).

## Features
- 📥 **PDF import (on-device)** using PDF.js — no server, your data stays local.
- 🧠 **Advisor Home**: score, cash-buffer days, pace vs budget, overdraft risk, and a 7-day forecast.
- 📅 **Cashflow Calendar** with risk dots (green/amber/crimson).
- 🧾 **Rules engine** for auto-categorisation (SA-centric: electricity, airtime, fuel, subscriptions, fees).
- 💼 **Budgets (envelopes)** and simple **Goals** tracking.
- 📈 **Reports** (category pie + 6‑month cashflow bars).
- ☁️ **Optional Firebase sync** (structured data only; PDFs never sync).

## Quick Start
1. Clone or download this repo.
2. Open `index.html` in a modern browser (Chrome/Edge/Safari). It works offline.
3. Go to **Statements** → **Choose PDF** and select your bank statement.
4. Review the first 20 rows and set up rules if needed.
5. Explore **Home**, **Calendar**, **Budgets**, **Goals**, and **Reports**.

## Optional: Enable Cloud Sync
Paste your Firebase config into the `index.html` (search for `window.FIREBASE_CONFIG`) and set a **sync code** in Settings on each device.

```js
// index.html
window.FIREBASE_CONFIG = {
  apiKey: "...", authDomain: "...", databaseURL: "...",
  projectId: "...", storageBucket: "...",
  messagingSenderId: "...", appId: "..."
};
```

## PWA (Installable)
We include a simple `manifest.webmanifest` and `sw.js`. If you host on GitHub Pages or any static host over HTTPS, you can **Install** it to your phone.

## GitHub Pages
- Push the repo to GitHub.
- In **Settings → Pages**, choose the `main` branch and `/ (root)`.
- Access your app at the Pages URL.

## Privacy
- Parsing happens **in your browser**. No server is involved.
- PDFs never leave your device. If you enable Firebase, only structured data is synced.

## Known Limitations
- Bank PDFs vary; this includes a heuristic parser that works best with common **FNB/Capitec** layouts (Date | Description | Debit | Credit | Balance). Some rows may need manual fixes.
- CDN assets are used for PDF.js/Chart.js; the service worker caches the shell (index/manifest) and will re-fetch those libraries online when needed.

## License
MIT — see `LICENSE`.

### CSV Import
- Supports FNB/Capitec CSV exports with an inline column mapper (auto-detects common headers).

### Parser Assist
Use **Statements → Open Parser Assist** to switch between Heuristic/Positional modes, set column hints, and re-parse previews. Your settings are saved locally and used for future imports.

### Merchant Rename Rules
Clean descriptions automatically.
- Add rules in **Statements → Merchant rename rules**.
- Modes: **contains**, **exact**, **regex**.
- Apply to all existing transactions with one click.
