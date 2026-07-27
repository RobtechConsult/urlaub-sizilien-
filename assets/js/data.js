/* =========================================================================
   Sizilien 2026 – Inhalte / Daten
   Alle Texte an einem Ort, damit sie leicht angepasst werden können.
   ========================================================================= */

const TRIP = {
  // Check-in: 2. August 2026, 14:00 Uhr Ortszeit (CEST = UTC+2)
  arrival: "2026-08-02T14:00:00+02:00",
  departure: "2026-08-14T11:00:00+02:00",
};

/* ---------- Reiseplan (Tag für Tag) ---------- */
const ITINERARY = [
  {
    day: "So · 02.08.",
    title: "Ankunft & Ankommen",
    tag: "Ankunft",
    icon: "🛬",
    text: "Taxi vom Flughafen Catania nach Acireale, Check-in ab 14:00. Erste Runde durch die Barock-Altstadt, Piazza Duomo bestaunen und den ersten Aperitivo genießen.",
    tips: ["Erste Granita zur Belohnung", "Web-Check-in spart Zeit", "Früh schlafen – Jetlag & Vorfreude"]
  },
  {
    day: "Mo · 03.08.",
    title: "Acireale & Riviera dei Ciclopi",
    tag: "Küste",
    icon: "🌊",
    text: "Entspannter Start: Acireale erkunden, hinunter nach Santa Maria La Scala (Fischerort), baden an der Riviera dei Ciclopi. Naturreservat La Timpa für den Sonnenuntergang.",
    tips: ["Badeschuhe für die Felsküste", "Fisch-Trattoria in S. M. La Scala", "Terme di Acireale ansehen"]
  },
  {
    day: "Di · 04.08.",
    title: "Catania – Stadt aus Lava",
    tag: "Kultur",
    icon: "🐘",
    text: "Der barocke Fischmarkt „A Piscaria“, Piazza del Duomo mit dem Elefanten Liotru, die Via Etnea und Street Food ohne Ende. Nachmittags Kaffeepause im Schatten.",
    tips: ["Pasta alla Norma – hier erfunden!", "Fischmarkt am besten vormittags", "Am Stadtrand parken (ZTL!)"]
  },
  {
    day: "Mi · 05.08.",
    title: "Ätna – der Feuerberg",
    tag: "Ätna",
    icon: "🌋",
    text: "Früh los zum Rifugio Sapienza. Seilbahn oder geführte Tour zu den Kratern, die Silvestri-Krater sind auch ohne Guide begehbar. Grandiose Ausblicke über die Insel.",
    tips: ["Warme Jacke & feste Schuhe", "Tour vorab buchen", "Früh = weniger Wolken & Hitze"]
  },
  {
    day: "Do · 06.08.",
    title: "Strand & Dolce Far Niente",
    tag: "Küste",
    icon: "🏖️",
    text: "Ruhetag nach dem Vulkan. Aci Trezza mit den Faraglioni dei Ciclopi, dann Aci Castello mit der Normannenburg auf schwarzem Lavafels. Baden, lesen, Nichtstun.",
    tips: ["Schnorchelbrille mitnehmen", "Sonnenuntergang in Aci Trezza", "Gelato-Pause einplanen"]
  },
  {
    day: "Fr · 07.08.",
    title: "Taormina & Isola Bella",
    tag: "Kultur",
    icon: "🎭",
    text: "Das antike Theater mit Ätna-Kulisse, Corso Umberto zum Bummeln, hinunter zur Isola Bella. Wer mag: Abstecher hinauf nach Castelmola auf einen Mandelwein.",
    tips: ["Vormittags = weniger Menschen", "Theater-Ticket online kaufen", "Badesachen für Isola Bella"]
  },
  {
    day: "Sa · 08.08.",
    title: "Syrakus & Ortigia",
    tag: "Kultur",
    icon: "🏛️",
    text: "Archäologiepark Neapolis mit griechischem Theater und dem „Ohr des Dionysios“. Nachmittags die Insel Ortigia: Dom, Fonte Aretusa und Gassen voller Leben.",
    tips: ["Früh starten (ca. 1,5 h Fahrt)", "Markt von Ortigia am Morgen", "Sonnenuntergang am Meer"]
  },
  {
    day: "So · 09.08.",
    title: "Ätna-Weingüter & Genuss",
    tag: "Genuss",
    icon: "🍷",
    text: "Die Nordhänge des Ätna: Weinstraße rund um Linguaglossa & Randazzo. Verkostung von Etna Rosso (Nerello Mascalese). Pistazien aus Bronte nicht vergessen!",
    tips: ["Fahrer bestimmen 😉", "Weingut-Termin vorab", "Pistazien-Pesto als Souvenir"]
  },
  {
    day: "Mo · 10.08.",
    title: "Gole dell'Alcantara",
    tag: "Natur",
    icon: "🏞️",
    text: "Erfrischung gefällig? Die spektakuläre Basalt-Schlucht mit eiskaltem Flusswasser. Danach gemütlich zurück, Nachmittag am Pool oder Meer.",
    tips: ["Wasserschuhe & Handtuch", "Wasser ist wirklich kalt!", "Früh = ruhiger"]
  },
  {
    day: "Di · 11.08.",
    title: "Noto & der Barock-Süden",
    tag: "Kultur",
    icon: "⛪",
    text: "Noto, die Barock-Hauptstadt aus honigfarbenem Stein. Optional weiter nach Modica für die berühmte Schokolade. Ein Tag für Schönheit & Süßes.",
    tips: ["Modica-Schokolade probieren", "Mittagshitze im Café aussitzen", "Bequeme Schuhe"]
  },
  {
    day: "Mi · 12.08.",
    title: "Freier Tag nach Lust & Laune",
    tag: "Genuss",
    icon: "✨",
    text: "Puffer-Tag: Lieblingsort noch einmal besuchen, ausschlafen, shoppen in Catania oder einfach am Strand liegen. Was auch immer euch fehlt – heute ist Platz dafür.",
    tips: ["Souvenirs & Keramik kaufen", "Lieblings-Trattoria erneut", "Nichts müssen, alles dürfen"]
  },
  {
    day: "Do · 13.08.",
    title: "Letzter voller Tag",
    tag: "Küste",
    icon: "🌅",
    text: "Noch einmal Meer, noch einmal Granita, letzte Fotos. Abends ein festliches Abschiedsessen mit Blick aufs Wasser und einem Glas Etna Bianco.",
    tips: ["Koffer schon vorpacken", "Letzte Cannoli mitnehmen", "Sonnenuntergang genießen"]
  },
  {
    day: "Fr · 14.08.",
    title: "Abreise – Arrivederci Sicilia",
    tag: "Abschied",
    icon: "🛫",
    text: "Frühstück, Check-out, Taxi zum Flughafen Catania. Mit vollem Herzen (und Koffer voller Pistazien) nach Hause. Arrivederci – oder besser: a presto!",
    tips: ["Taxi rechtzeitig bestätigen", "Flüssigkeiten ins Aufgabegepäck", "Ci vediamo, Sicilia 🇮🇹"]
  }
];

/* ---------- Highlights ---------- */
const HIGHLIGHTS = [
  { cat: "Küste", icon: "🪨", name: "Faraglioni dei Ciclopi", place: "Aci Trezza", text: "Die schwarzen Felsnadeln, die der Zyklop Polyphem laut Homer nach Odysseus warf." },
  { cat: "Küste", icon: "🏰", name: "Castello di Aci", place: "Aci Castello", text: "Normannische Burg auf einem Lavafelsen direkt über dem Meer." },
  { cat: "Küste", icon: "🐟", name: "Santa Maria La Scala", place: "Acireale", text: "Winziger Fischerhafen unterhalb der Steilküste – bester Fisch der Gegend." },
  { cat: "Ätna", icon: "🌋", name: "Krater des Ätna", place: "Rifugio Sapienza", text: "Europas höchster aktiver Vulkan – Seilbahn, Jeep und Wandern zu den Gipfelkratern." },
  { cat: "Ätna", icon: "🥾", name: "Silvestri-Krater", place: "Ätna Süd", text: "Erloschene Nebenkrater, die man frei und ohne Guide erwandern kann." },
  { cat: "Kultur", icon: "🎭", name: "Teatro Antico", place: "Taormina", text: "Antikes Theater mit atemberaubender Kulisse aus Meer und Ätna." },
  { cat: "Kultur", icon: "🏛️", name: "Ortigia", place: "Syrakus", text: "Historische Insel mit Barock-Dom, Fonte Aretusa und lebendigem Markt." },
  { cat: "Kultur", icon: "🐘", name: "Piazza del Duomo", place: "Catania", text: "Der Lava-Elefant „Liotru“ – Wahrzeichen der Stadt aus schwarzem Stein." },
  { cat: "Kultur", icon: "⛪", name: "Barockstadt Noto", place: "Val di Noto", text: "UNESCO-Welterbe aus honigfarbenem Stein – der Inbegriff des sizilianischen Barock." },
  { cat: "Natur", icon: "🏞️", name: "Gole dell'Alcantara", place: "bei Taormina", text: "Enge Basaltschlucht mit eiskaltem, glasklarem Flusswasser." },
  { cat: "Natur", icon: "🌿", name: "Riserva La Timpa", place: "Acireale", text: "Naturschutzgebiet mit Pfaden entlang der grünen Steilküste." },
  { cat: "Genuss", icon: "🍇", name: "Etna-Weinstraße", place: "Linguaglossa", text: "Weingüter auf Vulkanböden – der Nerello Mascalese ist ein Muss." },
];

/* ---------- Kulinarische Bucket-List ---------- */
const FOOD = [
  { icon: "🍧", name: "Granita & Brioche", note: "Mandel oder Pistazie – das echte Frühstück" },
  { icon: "🍚", name: "Arancino", note: "Frittierter Reisball, Catania sagt „arancino“" },
  { icon: "🥧", name: "Cannolo", note: "Knusprig, frisch gefüllt mit Ricotta" },
  { icon: "🍝", name: "Pasta alla Norma", note: "Aubergine, Tomate, Ricotta salata" },
  { icon: "🐟", name: "Pesce spada", note: "Frischer Schwertfisch vom Grill" },
  { icon: "🍆", name: "Caponata", note: "Süß-saures Auberginen-Gemüse" },
  { icon: "🥜", name: "Pistacchio di Bronte", note: "Das grüne Gold vom Ätna" },
  { icon: "🍫", name: "Cioccolato di Modica", note: "Körnige Azteken-Schokolade" },
  { icon: "🎂", name: "Cassata siciliana", note: "Ricotta-Torte mit Marzipan" },
  { icon: "🍋", name: "Granita al limone", note: "Erfrischung pur an heißen Tagen" },
  { icon: "🍷", name: "Etna Rosso DOC", note: "Vulkanwein aus Nerello Mascalese" },
  { icon: "☕", name: "Caffè al bar", note: "Espresso im Stehen wie die Locals" },
];

/* ---------- Packliste ---------- */
const PACKING = {
  "📄 Dokumente & Geld": [
    "Personalausweis / Reisepass", "Führerschein (für Mietwagen)", "Buchungsbestätigung Hotel",
    "Flugtickets / Boarding-Pässe", "Kreditkarte & etwas Bargeld", "EU-Krankenkassenkarte (EHIC)", "Reiseversicherung"
  ],
  "👕 Kleidung": [
    "Leichte Sommerkleidung", "1 schickeres Outfit fürs Abendessen", "Badesachen (2×)", "Sonnenhut / Kappe",
    "Sonnenbrille", "Leichte Jacke (Ätna & Abende)", "Bequeme Wanderschuhe", "Sandalen & Badeschuhe"
  ],
  "🏖️ Strand & Ätna": [
    "Sonnencreme LSF 50", "After-Sun / Aloe Vera", "Strandtuch (Mikrofaser)", "Trinkflasche",
    "Schnorchelbrille", "Tagesrucksack", "Powerbank für Ausflüge"
  ],
  "🔌 Technik": [
    "Handy & Ladekabel", "Kamera", "Kopfhörer", "Adapter (in Italien nicht nötig, EU-Stecker)", "Offline-Karten geladen"
  ],
  "💊 Gesundheit": [
    "Persönliche Medikamente", "Kleine Reiseapotheke", "Mückenschutz", "Pflaster & Blasenpflaster",
    "Elektrolyte / Magnesium", "Reisetabletten (Serpentinen)"
  ]
};

/* ---------- Snack-Liste für die Fahrt ---------- */
const SNACKS = {
  "💧 Getränke": [
    "Viel Wasser (still)", "Kalter Espresso / Kaffee to go", "Isogetränk / Schorle", "Kleine Saftpäckchen"
  ],
  "🍎 Frisch & gesund": [
    "Trauben & Äpfel", "Bananen", "Gemüsesticks (Karotte, Gurke, Paprika)", "Cherrytomaten", "Käsewürfel"
  ],
  "🥨 Herzhaft": [
    "Salzstangen / Cracker", "Nüsse & Studentenfutter", "Trockenfleisch / Salami-Sticks", "Panini / belegte Brötchen", "Grissini"
  ],
  "🍫 Süß & Energie": [
    "Müsli-/Nussriegel", "Pistazien (Bronte!)", "Traubenzucker", "Bonbons / Kaugummi (gegen Kurven)", "Kekse"
  ],
  "🧰 Nicht vergessen": [
    "Kühltasche", "Feuchttücher & Papiertücher", "Müllbeutel", "Wiederverschließbare Dosen", "Taschenmesser"
  ]
};

/* ---------- Italienisch-Sprachkarten ---------- */
const PHRASES = [
  { de: "Guten Morgen", it: "Buongiorno", pron: "bwon-DSCHOR-no" },
  { de: "Danke / Bitte", it: "Grazie / Prego", pron: "GRAA-tsije / PREH-go" },
  { de: "Einen Kaffee, bitte", it: "Un caffè, per favore", pron: "un kaf-FEH per fa-VOO-re" },
  { de: "Zwei Granita mit Mandel", it: "Due granite alla mandorla", pron: "DUU-e gra-NII-te alla MAN-dor-la" },
  { de: "Die Rechnung, bitte", it: "Il conto, per favore", pron: "il KON-to per fa-VOO-re" },
  { de: "Wo ist…?", it: "Dov'è…?", pron: "do-VEH" },
  { de: "Wie viel kostet das?", it: "Quanto costa?", pron: "KWAN-to KOS-ta" },
  { de: "Sehr lecker!", it: "Buonissimo!", pron: "bwo-NIS-si-mo" },
  { de: "Prost!", it: "Salute! / Cin cin!", pron: "sa-LUU-te / tschin tschin" },
  { de: "Entschuldigung", it: "Mi scusi", pron: "mi SKUU-si" },
  { de: "Sprechen Sie Englisch?", it: "Parla inglese?", pron: "PAR-la in-GLEE-se" },
  { de: "Auf Wiedersehen", it: "Arrivederci", pron: "ar-ri-ve-DER-tschi" },
];
