# 🍋 Sizilien 2026 – Unser interaktives Reise-Erlebnis

Eine interaktive Website, die uns bei der Planung **und** während der Reise nach
Sizilien begleitet – und uns schon vorher so richtig in Urlaubsstimmung bringt.

**Reise:** 2. – 14. August 2026 · Basis: ibis Styles Catania **Acireale** · zu zweit

## ✨ Was die Seite kann

- **Countdown** bis zur Ankunft im Hotel (live)
- **Reise-Überblick** mit allen Eckdaten der Buchung (Hotel, Kontakt, Karte)
- **Interaktiver Tag-für-Tag-Reiseplan** (12 Tage, aufklappbar) – Acireale, Ätna,
  Catania, Taormina, Syrakus, Noto, Alcantara-Schlucht u. v. m.
- **Highlights der Region** mit Kategorie-Filter (Küste, Ätna, Kultur, Natur, Genuss)
- **Kulinarische Bucket-List** zum Abhaken (Fortschritt wird gespeichert)
- **Interaktive Packliste** – Stand bleibt auf dem Gerät gespeichert
- **Snack-Liste für die Fahrt** 🚗 zum Abhaken
- **Italienisch-Sprachkarten** zum Umdrehen (mit Aussprache)
- **Praktische Tipps & Stimmungs-Bereich** (Filme, Buch, Musik)
- **Wichtige Notfallnummern** mit Direktwahl
- **Offline-fähig (PWA)** – lässt sich zum Home-Bildschirm hinzufügen und
  funktioniert auch ohne Netz (z. B. am Ätna)

## ▶️ Starten

Einfach `index.html` im Browser öffnen. Für die volle Offline-Funktion (Service
Worker) über einen kleinen lokalen Server aufrufen, z. B.:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

**Tipp fürs Handy:** Im Browser „Zum Home-Bildschirm hinzufügen" wählen – dann
startet die Seite wie eine App und ist offline verfügbar.

## 🗂️ Aufbau

```
index.html                 # Struktur der Seite
assets/css/style.css       # Design (mediterrane Farbwelt)
assets/js/data.js          # Alle Inhalte (Reiseplan, Listen, Sprache …)
assets/js/app.js           # Interaktivität (Countdown, Listen, Filter …)
manifest.webmanifest       # PWA-Manifest
sw.js                      # Service Worker (Offline-Cache)
```

Inhalte anpassen? Alles steckt zentral in `assets/js/data.js`.

_Andiamo! 🇮🇹_
