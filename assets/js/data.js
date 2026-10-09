/* =========================================================================
   Malle 2026 – Cala d'Or · Jungs-Trip
   Alle Texte an einem Ort, damit sie leicht angepasst werden können.
   ========================================================================= */

const TRIP = {
  // Abflug Köln/Bonn: Fr. 16.10.2026, 21:50 Uhr (CEST = UTC+2)
  arrival: "2026-10-16T21:50:00+02:00",
  // Rück-Landung Köln/Bonn: Di. 20.10.2026, 00:55 Uhr
  departure: "2026-10-20T00:55:00+02:00",
};

/* ---------- Programm (Tag für Tag) ---------- */
const ITINERARY = [
  {
    day: "Fr · 16.10.",
    title: "Abflug & Anreise",
    tag: "Anreise",
    icon: "🛫",
    text: "Niklas & Robin in Bochum einsammeln, dann gemeinsam zum Flughafen Köln/Bonn – Heiko stößt dazu. Noch entspannt am Gate vorglühen 🍺, Abflug 21:50 Uhr (Ryanair FR 9967). Landung 00:10 Uhr in Palma, vorgebuchter Transfer (~50 Min) nach Cala d'Or, spät einchecken.",
    tips: ["Fahrgemeinschaft: Niklas & Robin in Bochum", "Parken am CGN vorab buchen", "Vorglühen am Gate – aber Flug nicht verpassen 😄"]
  },
  {
    day: "Sa · 17.10.",
    title: "Ankommen & Marina",
    tag: "Strand",
    icon: "🏖️",
    text: "Ausschlafen, Frühstück im Hotel (Halbpension!), dann Strandtag an der Cala Gran direkt vor der Tür. Abends Sonnenuntergang an der Festung Es Fortí und Bar-Hopping an der Marina.",
    tips: ["Cala Gran liegt direkt am Hotel", "Sunset an Es Fortí", "Erste Hierbas an der Marina"]
  },
  {
    day: "So · 18.10.",
    title: "Der Erlebnistag 🍹",
    tag: "Highlight",
    icon: "⛵",
    text: "Das Herzstück: Bootstour ab der Marina mit Baden & Drinks an Bord – oder eine Weintour zur Bodega bei Felanitx (per Taxi). Nachmittags in eine Traumbucht, abends Tapas & Cocktails.",
    tips: ["Boot/Weintour vorab buchen", "Caló des Moro bei gutem Wetter", "Zu viert teilen = günstiger"]
  },
  {
    day: "Mo · 19.10.",
    title: "Letzter Tag & Rückflug",
    tag: "Abreise",
    icon: "🛬",
    text: "Der Flug geht erst 22:30 Uhr – also noch ein kompletter Strand- & Marina-Tag. Gepäck nach dem Check-out an der Rezeption lassen, abends Transfer zum Flughafen. ¡Adiós, Mallorca!",
    tips: ["Late Check-out / Gepäck klären", "Transfer für ~19:00 Uhr buchen", "Letzte Ensaïmada mitnehmen"]
  }
];

/* ---------- Strände & Orte (Karten mit Filter) ---------- */
const HIGHLIGHTS = [
  { cat: "Strand", icon: "🏖️", name: "Cala Gran", place: "direkt am Hotel", text: "Feiner Sand, türkises Wasser, von Pinien gesäumt – eure Haustür-Bucht." },
  { cat: "Strand", icon: "🐚", name: "Cala Ferrera", place: "~15 Min zu Fuß", text: "Gemütliche Bucht mit Strandbar, Sonnenliegen und Tretbooten." },
  { cat: "Strand", icon: "💎", name: "Cala Esmeralda", place: "~20 Min zu Fuß", text: "Smaragdgrünes Wasser, etwas ruhiger – schöner Halbtagsspot." },
  { cat: "Ausgehen", icon: "⛵", name: "Marina de Cala d'Or", place: "Cala Llonga", text: "Palmen, weiße Yachten und abends die besten Bars – euer Nightlife-Zentrum." },
  { cat: "Natur", icon: "🌅", name: "Es Fortí", place: "~15 Min zu Fuß", text: "Alte Küstenfestung und der beste Platz für den Sonnenuntergang." },
  { cat: "Strand", icon: "🏝️", name: "Caló des Moro", place: "bei Santanyí · Taxi", text: "Gilt als schönste Bucht Mallorcas – türkis zwischen Felsen. Früh dran sein!" },
  { cat: "Natur", icon: "🥾", name: "Parc Natural de Mondragó", place: "~10 km · Taxi/Bus", text: "Naturpark mit Wanderwegen und zwei naturbelassenen Traumbuchten." },
  { cat: "Ort", icon: "🚤", name: "Cala Figuera", place: "~12 km · Taxi/Bus", text: "Malerischer Fischerort mit schmaler Hafenbucht – wie aus dem Bilderbuch." },
  { cat: "Ort", icon: "🛍️", name: "Santanyí", place: "~10 km · Bus 515", text: "Hübsches Städtchen, Markt Mi & Sa vormittags, Kunsthandwerk & Cafés." },
];

/* ---------- Erlebnisse mit Drinks (Karten) ---------- */
const ERLEBNISSE = [
  { cat: "Boot", icon: "⛵", name: "Bootstour mit Drinks", place: "ab Marina · vorab buchen", text: "Privat-Törn entlang der Buchten (z. B. Vita Bel / Click&Boat), Baden & Getränke an Bord. Ab ca. 305 € bis 7 Personen – zu viert gut teilbar." },
  { cat: "Boot", icon: "🌅", name: "Sunset-Katamaran", place: "mit Hotel-Abholung", text: "Nachmittags/Abends raus aufs Meer mit Musik, Snacks und Drinks – der entspannteste Programmpunkt des Trips." },
  { cat: "Wein", icon: "🍷", name: "Weintour / Bodega", place: "Felanitx ~15 km · Taxi", text: "Die Weinregion liegt gleich um die Ecke. Verkostung auf einem Weingut – ohne Auto am besten per Taxi/Transfer oder geführter Tour." },
  { cat: "Bar", icon: "🍸", name: "Marina-Bar-Hopping", place: "Cala d'Or · zu Fuß", text: "Cocktails mit Hafenblick: Dugan's Irish Pub, Cheeki Tiki, Mabu-Hay & The Dubliner. Die meisten bis ca. 1 Uhr offen." },
  { cat: "Bar", icon: "🎤", name: "Karaoke-Nacht", place: "Betty's Music Bar", text: "Pflichtprogramm für Jungs-Trips: Mikro schnappen, Hierbas kippen, Gröhlen erlaubt." },
  { cat: "Genuss", icon: "🌿", name: "Hierbas-Tasting + Tapas", place: "Cala d'Or · zu Fuß", text: "Mallorcas Kräuterlikör in süß/trocken durchprobieren, dazu Tapas – authentisch und günstig." },
  { cat: "Kreativ", icon: "🏺", name: "Töpfern & Trinken", place: "Santanyí/Palma · anfragen", text: "„Sip & Paint“/Keramik-Workshop mit Getränk – eure Random-Idee! In der Region per Transfer; vorher Verfügbarkeit (Okt) anfragen." },
  { cat: "Aktiv", icon: "🛶", name: "Kajak & Schnorcheln", place: "ab Cala d'Or", text: "Sportlich in die Calas paddeln, schnorcheln – und danach das kühle Bier doppelt verdient." },
];

/* ---------- Weiter weg: Tagesausflüge (Bus & Taxi) ---------- */
const DAYTRIPS = [
  { cat: "~60 km · 1 h", icon: "🏛️", name: "Palma de Mallorca", place: "🚌 Bus 515e (Apr–Okt) · 🚕 Taxi ~90 €", text: "Die Hauptstadt: Kathedrale La Seu, Altstadtgassen, Hafen, Tapas & richtig gute Bars. Lohnt einen ganzen Tag." },
  { cat: "~57–60 km · 1 h", icon: "🍺", name: "Ballermann / Playa de Palma", place: "🚕 Taxi ~90 € je Strecke · 🚌 515e → Palma, dann Linie 23", text: "Megapark & Bierkönig – DER Partystrand. Ehrlich: von Cala d'Or weit weg, am besten als bewusster Tages-/Nachtausflug (oder Taxi teilen & spät zurück)." },
  { cat: "~25 km · 35 Min", icon: "🕳️", name: "Coves del Drac & Porto Cristo", place: "🚌 Bus 428 · 🚕 Taxi ~35–40 €", text: "Beeindruckende Tropfsteinhöhlen mit unterirdischem See und kleinem Bootskonzert. Danach Hafenstädtchen Porto Cristo." },
  { cat: "~30–35 km · 40 Min", icon: "🏝️", name: "Es Trenc & Colònia de Sant Jordi", place: "🚕 Taxi ~45–55 € · 🚢 oder Bootstour", text: "Karibik-Feeling: langer, naturbelassener Sandstrand mit türkisem Wasser. Ohne Auto am ehesten per Taxi oder geführter Tour/Boot." },
  { cat: "~15–18 km · 25 Min", icon: "🍇", name: "Felanitx & Sant Salvador", place: "🚕 Taxi ~25–30 €", text: "Weingut-Verkostung in der Region Felanitx plus das Bergkloster Sant Salvador mit grandiosem Rundumblick." },
];

/* ---------- Essen & Trinken – Bucket-List ---------- */
const FOOD = [
  { icon: "🥐", name: "Ensaïmada", note: "Fluffiges Schmalzgebäck – das Mallorca-Frühstück" },
  { icon: "🍅", name: "Pa amb oli", note: "Brot mit Öl, Tomate, Käse/Schinken" },
  { icon: "🌶️", name: "Sobrassada", note: "Streichbare Paprika-Rohwurst" },
  { icon: "🍆", name: "Tumbet", note: "Mallorquinisches Gemüse-Schichtgericht" },
  { icon: "🍳", name: "Frit mallorquí", note: "Deftige Pfanne mit Kartoffeln & Gemüse" },
  { icon: "🥗", name: "Trampó", note: "Frischer Sommersalat mit Tomate & Paprika" },
  { icon: "🦐", name: "Gambas al ajillo", note: "Knoblauch-Garnelen aus der Pfanne" },
  { icon: "🥘", name: "Arròs brut / Paella", note: "Herzhafter Reis – perfekt zum Teilen" },
  { icon: "🍷", name: "Vi de Mallorca", note: "Inselwein aus Felanitx/Binissalem" },
  { icon: "🌿", name: "Hierbas", note: "Kräuterlikör – süß oder trocken" },
  { icon: "🍹", name: "Sangría / Tinto de verano", note: "Der Klassiker für den Strandtag" },
  { icon: "☕", name: "Café con hielo", note: "Espresso auf Eis gegen die Mittagshitze" },
];

/* ---------- Packliste (NUR Handgepäck 40×30×20 cm!) ---------- */
const PACKING = {
  "📄 Doku & Geld": [
    "Personalausweis / Reisepass", "Boarding-Pass (Handy + Screenshot)", "Hotel-Voucher (Gavimar Cala Gran)",
    "Transfer-Buchung Flughafen ↔ Hotel", "Kreditkarte & Bargeld", "EU-Krankenkassenkarte (EHIC)"
  ],
  "🧴 Handgepäck-Regeln (wichtig!)": [
    "Nur 1 kleine Tasche: 40 × 30 × 20 cm", "Flüssigkeiten ≤ 100 ml im 1-Liter-Beutel",
    "Powerbank in die Kabine (nie einchecken)", "Keine scharfen Gegenstände / Rasierer prüfen",
    "Deo/Parfüm als Mini oder fest", "Sonnencreme klein – oder vor Ort kaufen"
  ],
  "👕 Klamotten (3 Tage, leicht)": [
    "3× T-Shirt", "1 schickeres Ausgeh-Shirt", "Kurze Hosen", "1 lange Hose/Chino",
    "Unterwäsche & Socken", "Badeshorts", "Leichte Jacke/Pulli (Okt-Abende)", "Sneaker + Flip-Flops"
  ],
  "🏖️ Strand & Sonne": [
    "Sonnenbrille", "Cap / Hut", "Mikrofaser-Handtuch", "Leere Trinkflasche (durch Security)",
    "Kleiner Tagesrucksack / Beutel"
  ],
  "🔌 Technik": [
    "Handy & Ladekabel", "Powerbank (in die Kabine!)", "Kopfhörer", "Kein Adapter nötig (Spanien = EU-Stecker)"
  ],
  "💊 Kleinkram & Kater-Kit": [
    "Kopfschmerztabletten", "Elektrolyte / Magnesium", "Pflaster & Blasenpflaster",
    "After-Sun / Aloe Vera", "Kaugummi & Feuchttücher"
  ]
};

/* ---------- Spanisch-Sprachkarten ---------- */
const PHRASES = [
  { de: "Hallo", it: "¡Hola!", pron: "OH-la" },
  { de: "Danke / Bitte", it: "Gracias / Por favor", pron: "GRA-thias / por fa-WOR" },
  { de: "Vier Bier, bitte", it: "Cuatro cervezas, por favor", pron: "KWA-tro ther-WE-thas por fa-WOR" },
  { de: "Prost!", it: "¡Salud!", pron: "sa-LUD" },
  { de: "Noch zwei Bier", it: "Dos cervezas más", pron: "dos ther-WE-thas mas" },
  { de: "Die Rechnung, bitte", it: "La cuenta, por favor", pron: "la KWEN-ta por fa-WOR" },
  { de: "Wo ist…?", it: "¿Dónde está…?", pron: "DON-de es-TA" },
  { de: "Was kostet das?", it: "¿Cuánto cuesta?", pron: "KWAN-to KWES-ta" },
  { de: "Sehr lecker!", it: "¡Qué rico!", pron: "ke RII-ko" },
  { de: "Entschuldigung", it: "Perdón", pron: "per-DON" },
  { de: "Sprichst du Englisch?", it: "¿Hablas inglés?", pron: "AB-las in-GLES" },
  { de: "Tschüss", it: "¡Adiós!", pron: "a-DYOS" },
];
