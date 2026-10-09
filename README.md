# 🏝️ Malle 2026 – Cala d'Or · Jungs-Trip

Eine interaktive Website, die uns bei der Planung **und** während des Mallorca-Trips
begleitet – Strände, Bootstouren, Bars und gutes Essen immer griffbereit.

**Reise:** 16. – 19. Oktober 2026 · Basis: Gavimar Cala Gran Hotel, **Cala d'Or** · 4 Mann

## ✈️ Eckdaten

- **Flüge (Ryanair):** Fr 16.10. 21:50 Köln/Bonn → 00:10 Palma · Rück Mo 19.10. 22:30 → 00:55 CGN
- **Hotel:** Gavimar Cala Gran Hotel & Apartments ★★★, Halbpension
- **Crew:** Robert, Robin, Niklas & Heiko · nur Handgepäck · kein Mietwagen

## ✨ Was die Seite kann

- **Countdown** bis zum Abflug (live)
- **Überblick** mit Flügen, Hotel & Kontakt
- **Programm** Tag für Tag (aufklappbar)
- **Strände & Orte** mit Filter (Strand, Natur, Ort, Ausgehen)
- **Erlebnisse mit Drinks** – Bootstour, Weintour, Bar-Hopping, Töpfern & Co.
- **Essen & Trinken** als abhakbare Bucket-List (Fortschritt gespeichert)
- **Packliste** – zugeschnitten auf **nur Handgepäck** (40×30×20 cm)
- **Spanisch-Sprachkarten** zum Umdrehen
- **Infos & Tipps** (Transfer ohne Auto, Oktober-Wetter, Budget)
- **Notfallnummern** mit Direktwahl
- **Offline-fähig (PWA)** – zum Home-Bildschirm hinzufügen & ohne Netz nutzen

## ▶️ Starten

`index.html` im Browser öffnen, oder für die volle Offline-Funktion:

```bash
python3 -m http.server 8000
# dann http://localhost:8000
```

**Tipp fürs Handy:** „Zum Home-Bildschirm hinzufügen" → startet wie eine App, offline verfügbar.

## 🗂️ Aufbau

```
index.html                 # Struktur der Seite
assets/css/style.css       # Design (mediterrane Farbwelt)
assets/js/data.js          # Alle Inhalte (Programm, Strände, Erlebnisse, Essen …)
assets/js/app.js           # Interaktivität (Countdown, Listen, Filter …)
manifest.webmanifest       # PWA-Manifest
sw.js                      # Service Worker (Offline-Cache)
```

Inhalte anpassen? Alles steckt zentral in `assets/js/data.js`.

_¡Vamos, chicos! 🍻_
