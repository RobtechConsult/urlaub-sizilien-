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
    text: "Nach der langen Fahrt aus Stuttgart (über die Alpen & Fähre Villa San Giovanni–Messina) endlich da! Auto kostenlos am Hotel parken, Check-in ab 14:00. Erste Runde durch die Barock-Altstadt und den ersten Aperitivo genießen.",
    tips: ["Erste Granita zur Belohnung", "Web-Check-in spart Zeit", "Auto abstellen & durchatmen"],
    baby: "Nach der Durchfahrt seid ihr alle drei durch. Heute nichts mehr vornehmen: Zimmer kühlen, Reisebett aufbauen, dem Baby Zeit zum Ankommen geben. Der erste Abend darf komplett unspektakulär sein – Aperitivo geht auch morgen."
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
    tips: ["Pasta alla Norma – hier erfunden!", "Fischmarkt am besten vormittags", "Am Stadtrand parken (ZTL!)"],
    baby: "Trage statt Kinderwagen – Kopfsteinpflaster und Gedränge auf dem Fischmarkt. Vormittags losziehen und spätestens gegen 12 Uhr zurück ins kühle Zimmer."
  },
  {
    day: "Mi · 05.08.",
    title: "Ätna – der Feuerberg",
    tag: "Ätna",
    icon: "🌋",
    text: "Früh los zum Rifugio Sapienza. Seilbahn oder geführte Tour zu den Kratern, die Silvestri-Krater sind auch ohne Guide begehbar. Grandiose Ausblicke über die Insel.",
    tips: ["Warme Jacke & feste Schuhe", "Tour vorab buchen", "Früh = weniger Wolken & Hitze"],
    baby: "Mit dem Baby nur bis zum Rifugio Sapienza (1.900 m) und zu den Silvestri-Kratern – Seilbahn (2.500 m) und Jeep-Tour (2.900 m) sind für einen Säugling zu hoch. Alternativ wechselt ihr euch ab: einer fährt hoch, einer bleibt unten. Warm anziehen, es ist windig und kühl."
  },
  {
    day: "Do · 06.08.",
    title: "Strand & Dolce Far Niente",
    tag: "Küste",
    icon: "🏖️",
    text: "Ruhetag nach dem Vulkan. Aci Trezza mit den Faraglioni dei Ciclopi, dann Aci Castello mit der Normannenburg auf schwarzem Lavafels. Baden, lesen, Nichtstun.",
    tips: ["Schnorchelbrille mitnehmen", "Sonnenuntergang in Aci Trezza", "Gelato-Pause einplanen"],
    baby: "Perfekter Baby-Tag. Strandmuschel aufstellen, früh morgens oder ab 17 Uhr ans Wasser. Lavafelsen vorher mit der Hand auf Hitze testen."
  },
  {
    day: "Fr · 07.08.",
    title: "Taormina & Isola Bella",
    tag: "Kultur",
    icon: "🎭",
    text: "Das antike Theater mit Ätna-Kulisse, Corso Umberto zum Bummeln, hinunter zur Isola Bella. Wer mag: Abstecher hinauf nach Castelmola auf einen Mandelwein.",
    tips: ["Vormittags = weniger Menschen", "Theater-Ticket online kaufen", "Badesachen für Isola Bella"],
    baby: "Taormina hat viele Treppen und Steigungen – Trage mitnehmen. Der Abstieg zur Isola Bella ist steil; die Seilbahn spart Kraft. Im Theater gibt es kaum Schatten, also früh hin."
  },
  {
    day: "Sa · 08.08.",
    title: "Syrakus & Ortigia",
    tag: "Kultur",
    icon: "🏛️",
    text: "Archäologiepark Neapolis mit griechischem Theater und dem „Ohr des Dionysios“. Nachmittags die Insel Ortigia: Dom, Fonte Aretusa und Gassen voller Leben.",
    tips: ["Früh starten (ca. 1,5 h Fahrt)", "Markt von Ortigia am Morgen", "Sonnenuntergang am Meer"],
    baby: "Langer Tag mit 1,5 h Fahrt pro Richtung – überlegt, ob ihr nur Ortigia macht und den Archäologiepark weglasst. Dort gibt es fast keinen Schatten."
  },
  {
    day: "So · 09.08.",
    title: "Ätna-Weingüter & Genuss",
    tag: "Genuss",
    icon: "🍷",
    text: "Die Nordhänge des Ätna: Weinstraße rund um Linguaglossa & Randazzo. Verkostung von Etna Rosso (Nerello Mascalese). Pistazien aus Bronte nicht vergessen!",
    tips: ["Fahrer bestimmen 😉", "Weingut-Termin vorab", "Pistazien-Pesto als Souvenir"],
    baby: "Weingüter am Nordhang sind schattig und entspannt – ein guter Baby-Tag. Beim Termin kurz erwähnen, dass ihr ein Baby dabeihabt."
  },
  {
    day: "Mo · 10.08.",
    title: "Gole dell'Alcantara",
    tag: "Natur",
    icon: "🏞️",
    text: "Erfrischung gefällig? Die spektakuläre Basalt-Schlucht mit eiskaltem Flusswasser. Danach gemütlich zurück, Nachmittag am Pool oder Meer.",
    tips: ["Wasserschuhe & Handtuch", "Wasser ist wirklich kalt!", "Früh = ruhiger"],
    baby: "Das Wasser hat nur ~6 °C – nichts fürs Baby. Die Schlucht ist aber angenehm schattig und kühl. Der Abstieg geht über viele Stufen, also Trage statt Wagen."
  },
  {
    day: "Di · 11.08.",
    title: "Noto & der Barock-Süden",
    tag: "Kultur",
    icon: "⛪",
    text: "Noto, die Barock-Hauptstadt aus honigfarbenem Stein. Optional weiter nach Modica für die berühmte Schokolade. Ein Tag für Schönheit & Süßes.",
    tips: ["Modica-Schokolade probieren", "Mittagshitze im Café aussitzen", "Bequeme Schuhe"],
    baby: "Noto <b>oder</b> Modica – beides an einem Tag ist mit Baby zu viel Fahrerei. Der helle Barockstein blendet stark, Sonnenhut nicht vergessen."
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
    text: "Frühstück, Check-out und ab aufs Auto Richtung Heimat (Fähre & Alpen zurück). Mit vollem Herzen und Kofferraum voller Pistazien nach Stuttgart. Arrivederci – oder besser: a presto!",
    tips: ["Snacks & Kühlbox neu bestücken", "Tank voll & Reifendruck checken", "Ci vediamo, Sicilia 🇮🇹"],
    baby: "Auch zurück derselbe Rhythmus: große Pause alle 3–4 Stunden, dazwischen ein kurzer Stopp aus der Schale. Windeln, Wasser und Pre-Nahrung für die Rückfahrt vorher neu auffüllen – unterwegs bekommt ihr die gewohnte Marke oft nicht."
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
    "Personalausweis / Reisepass", "Führerschein", "Buchungsbestätigung Hotel",
    "Kreditkarte & etwas Bargeld", "EU-Krankenkassenkarte (EHIC)", "Reiseversicherung / Schutzbrief"
  ],
  "👶 Baby: Dokumente & Vorbereitung": [
    "Kinderreisepass oder Personalausweis fürs Baby (Pflicht – kein Eintrag im Elternpass mehr!)",
    "EU-Krankenkassenkarte (EHIC) fürs Baby",
    "Auslands-Krankenversicherung fürs Baby geprüft",
    "Gelbes U-Heft & Impfpass",
    "Hotel über das Baby informiert",
    "Babybett / Reisebett beim Hotel angefragt",
    "Kinderarzt-Nummer für Rückfragen notiert",
    "Zäpfchen-Dosierung vom Kinderarzt erfragt",
    "Hotel-Adressen entlang der A1 als Plan B notiert",
    "Späte Ankunft beim Hotel angekündigt"
  ],
  "🚗 Baby: Sicherheit im Auto": [
    "Babyschale Gruppe 0+ / i-Size, rückwärts gerichtet",
    "Beifahrer-Airbag deaktiviert (falls Schale vorne)",
    "Einbau & Gurtführung vorab geprüft",
    "Rücksitzspiegel zum Beobachten",
    "Sonnenschutz-Rollos an den hinteren Scheiben",
    "Spielbogen / Kuscheltier an der Schale",
    "Mobile Wickelunterlage griffbereit",
    "Wechselkleidung fürs Baby im Innenraum (nicht im Kofferraum!)"
  ],
  "🍼 Baby: Ernährung unterwegs": [
    "Pre-Nahrung – Vorrat für die ganze Reise (deutsche Marke gibt's dort evtl. nicht)",
    "Fläschchen (mind. 4) & Ersatzsauger",
    "Flaschenbürste & Spülmittel",
    "Sterilisationsbeutel für die Mikrowelle",
    "12V-Flaschenwärmer fürs Auto",
    "Thermoskanne mit abgekochtem Wasser",
    "Stilles, natriumarmes Wasser („per l'alimentazione dei neonati“)",
    "Milchpulver-Portionierer",
    "Spucktücher – mehr als ihr denkt",
    "Stillkissen / Stilltuch (falls gestillt)"
  ],
  "🧷 Baby: Wickeln & Pflege": [
    "Windeln: Tagesbedarf × Reisetage + Reserve",
    "Feuchttücher (mehrere Packungen)",
    "Wickeltasche & mobile Wickelunterlage",
    "Wundschutzcreme",
    "Baby-Waschlotion & Shampoo",
    "Kapuzenhandtuch",
    "Babynagelschere / Nagelfeile",
    "Windel- & Müllbeutel",
    "Handdesinfektion für die Eltern"
  ],
  "👕 Baby: Kleidung (Hitze beachten!)": [
    "Dünne Baumwoll-Bodys kurzarm (8–10 Stück)",
    "Langarm-Bodys für klimatisierte Räume",
    "Leichte Strampler & Hosen",
    "Sonnenhut mit Nackenschutz",
    "UV-Schutzkleidung UPF 50+",
    "Dünne Söckchen",
    "Warme Jacke & Mütze (Ätna & kühle Abende)",
    "Leichte Decke fürs Auto",
    "Dünner Sommerschlafsack",
    "Reichlich Wechselkleidung – es geht schneller als gedacht"
  ],
  "☀️ Baby: Sonne, Hitze & Strand": [
    "UV-Strandmuschel oder Sonnenschirm (UPF 50+)",
    "Kinderwagen mit luftigem Sonnenverdeck",
    "Babytrage / Tragetuch für Altstadtgassen & Treppen",
    "Mullwindeln als flexibler Sonnenschutz",
    "Handventilator & Sprühflasche zum Abkühlen",
    "Kühlpads für die Wickeltasche",
    "Schwimmwindeln & Badehandtuch",
    "Sonnencreme erst ab 6 Monaten – bis dahin nur Schatten & Kleidung"
  ],
  "😴 Baby: Schlafen": [
    "Reisebett (falls Hotel keines stellt)",
    "Vertrautes Spannbettlaken von zu Hause",
    "Schnuller – mehrere",
    "Kuscheltier / Einschlafhilfe",
    "Babyphone",
    "Verdunklung fürs Fenster (Rollo oder Tuch)",
    "White-Noise-Gerät oder App"
  ],
  "💊 Baby: Reiseapotheke": [
    "Fieberthermometer",
    "Fieberzäpfchen (Dosis nach Gewicht – vorher Kinderarzt fragen)",
    "Nasensauger & Kochsalz-Ampullen",
    "Elektrolytlösung gegen Austrocknung",
    "Wundschutz & Wunddesinfektion",
    "Moskitonetz für Bett & Kinderwagen (statt Chemie)",
    "Baby-tauglichen Mückenschutz in der Apotheke erfragen",
    "Zahnungsgel, falls es früh losgeht"
  ],
  "🚗 Auto: Papiere & Maut": [
    "Fahrzeugschein (Zulassung Teil I)", "Grüne Versicherungskarte", "ADAC-/Pannendienst-Nummer",
    "Vignette Österreich (digital/Kleber)", "Brenner-Maut eingeplant", "Bargeld/Karte für Autobahn-Maut Italien",
    "Fährticket Villa San Giovanni ↔ Messina", "Navi + Offline-Karten geladen", "Handyhalterung fürs Auto"
  ],
  "🛟 Auto: Sicherheit (Pflicht in IT)": [
    "2× Warnweste (griffbereit im Innenraum!)", "Warndreieck", "Verbandskasten (nicht abgelaufen)",
    "Ersatz-Glühbirnen-Set", "Starthilfekabel", "Reifenpannenset / Ersatzrad",
    "Reifendruck & Öl vorab geprüft", "Frostschutz Scheibenwasser aufgefüllt"
  ],
  "😌 Auto: Komfort für die lange Fahrt": [
    "Nackenkissen", "Leichte Decke", "Sonnenschutz-Rollos für die Scheiben",
    "12V-Kühlbox", "Ladekabel & USB-Adapter / Powerbank", "Müllbeutel & Feuchttücher",
    "Parkscheibe", "Wechsel-Shirt griffbereit"
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

/* ---------- Snack-Liste für die lange Fahrt (Stuttgart → Sizilien, ~1.900 km) ---------- */
const SNACKS = {
  "💧 Getränke (reichlich!)": [
    "Wasser – am besten eine ganze Kiste", "Apfel- & Saftschorlen", "Kalter, ungesüßter Tee",
    "Thermoskanne Kaffee für den Fahrer", "1 Energydrink als Notfall-Wachmacher"
  ],
  "🍫 Süß & Nervennahrung": [
    "Amicelli (in die Kühlbox – schmilzt sonst!)", "Waffeln (z. B. Manner-Schnitten)",
    "Prinzenrolle & Butterkekse", "Müsli-/Nussriegel", "Traubenzucker (Dextro)",
    "Gummibärchen", "Schokoriegel – ab in die Kühlbox"
  ],
  "🥪 Herzhaft & sättigend": [
    "Belegte Vollkorn-Brötchen / Sandwiches", "Wraps mit Frischkäse & Gemüse",
    "Landjäger / Salami-Sticks", "Käsewürfel & Babybel", "Hartgekochte Eier",
    "TUC-Cracker & Salzstangen", "Grissini"
  ],
  "🍎 Frisch & leicht": [
    "Weintrauben (kernlos)", "Äpfel & Bananen", "Snack-Gurken & Kirschtomaten",
    "Karotten-Sticks", "Mandarinen / Clementinen", "Studentenfutter"
  ],
  "🧊 Fürs Auto nicht vergessen": [
    "12V-Kühlbox befüllt (Eisakkus!)", "Feuchttücher & Küchenrolle", "Müllbeutel",
    "Kaugummi & Pfefferminz (wach bleiben)", "Wiederverschließbare Dosen", "Brotzeit-Messer"
  ],
  "👶 Fürs Baby an Bord": [
    "Abgekochtes Wasser in der Thermoskanne",
    "Pre-Nahrung portioniert im Milchpulver-Behälter",
    "Fläschchen & Ersatzsauger griffbereit",
    "12V-Flaschenwärmer angeschlossen",
    "Extra viel Wasser für die stillende Mama",
    "Snacks, die sich einhändig essen lassen",
    "Spucktücher & Feuchttücher in Reichweite"
  ]
};

/* ---------- Unterwegs mit dem 4 Monate alten Baby ---------- */
const BABY = [
  {
    icon: "🚗",
    title: "Euer Pausen-Rhythmus",
    items: [
      "Euer Plan: <b>durchfahren mit einer größeren Pause alle 3–4 Stunden.</b> Das funktioniert – mit einer Ergänzung.",
      "<b>Schiebt zwischen die großen Pausen je einen kurzen Stopp ein</b> (10–15 Min., also etwa alle 2 Stunden), bei dem das Baby aus der Schale kommt. Länger als 1,5–2 Stunden am Stück sollte ein Säugling nicht in der halb liegenden Position bleiben – sie belastet Atmung und Wirbelsäule.",
      "Die großen Pausen fallen ohnehin mit den Mahlzeiten zusammen: mit vier Monaten will das Baby etwa alle 3–4 Stunden trinken.",
      "In der Pause das Baby <b>flach hinlegen</b> und strampeln lassen – nicht in der Schale füttern.",
      "Babyschale <b>rückwärts gerichtet</b>. Wenn sie vorne steht: unbedingt den Beifahrer-Airbag deaktivieren.",
      "Wenn möglich sitzt ein Erwachsener hinten neben dem Baby.",
      "Klimaanlage nie direkt auf das Baby richten.",
      "Das Baby <b>niemals allein im Auto lassen</b> – im Sommer wird es binnen Minuten lebensgefährlich heiß.",
      "Fahrerwechsel konsequent durchziehen – 1.900 km in einem Zug sind auch für die Eltern hart."
    ]
  },
  {
    icon: "🗺️",
    title: "Durchfahrt: der realistische Zeitplan",
    items: [
      "1.900 km und ~19 Std. reine Fahrzeit. <b>Mit allen Pausen landet ihr bei etwa 24–27 Stunden</b> – also gut ein Tag am Stück.",
      "Grobe Etappen: Stuttgart → Brenner (~3 h) → Gardasee (~2,5 h) → Bologna/Florenz (~2,5 h) → Rom (~3,5 h) → Salerno (~2,5 h) → Villa San Giovanni (~4,5 h) → Fähre → Acireale (~1,5 h).",
      "Damit ihr am 2. August eincheckt: <b>Abfahrt am 1. August, früher Nachmittag.</b>",
      "Die <b>Nachtetappe durch Italien</b> hat zwei Vorteile: es ist kühl und das Baby schläft sowieso. Dafür braucht der Fahrerwechsel Disziplin.",
      "Die Fähre Villa San Giovanni–Messina dauert nur ~20 Min. – perfekt, um das Baby aus dem Sitz zu nehmen und zu wickeln.",
      "Italienische Autogrill-Raststätten sind gut ausgebaut und haben meist Wickelmöglichkeiten.",
      "<b>Plan B im Kopf behalten:</b> wenn das Baby die Fahrt schlecht verträgt, unterwegs spontan ein Hotel nehmen. Ein paar Adressen entlang der A1 vorab notieren.",
      "Dem Hotel eine späte Ankunft ankündigen, falls es länger dauert als gedacht."
    ]
  },
  {
    icon: "🥵",
    title: "Hitze & Sonne – der wichtigste Punkt",
    items: [
      "Babys unter 6 Monaten gehören <b>gar nicht in die direkte Sonne</b> – Schatten, Kleidung und Hut statt Sonnencreme.",
      "Sizilien hat im August oft 30–38 °C. Plant <b>11–17 Uhr als Siesta</b> im kühlen Zimmer ein.",
      "Babys überhitzen viel schneller als Erwachsene und können noch nicht gut schwitzen.",
      "Häufiger stillen bzw. Fläschchen geben – der Flüssigkeitsbedarf steigt deutlich.",
      "Warnzeichen: hochroter oder auffällig blasser Kopf, heiße trockene Haut, Trinkverweigerung, ungewohnte Schlappheit, deutlich weniger nasse Windeln.",
      "Kinderwagen <b>nie mit einem Tuch abdecken</b> – darunter staut sich die Hitze. Lieber ein spezielles UV-Verdeck.",
      "Lauwarme Bäder und feuchte Waschlappen kühlen sanft herunter."
    ]
  },
  {
    icon: "🌋",
    title: "Ätna & Ausflüge mit Baby",
    items: [
      "<b>Nicht mit dem Baby auf über ~2.000 m.</b> Seilbahn (2.500 m) und Jeeps (2.900 m) sind für einen Säugling nichts – zu schneller Höhenanstieg.",
      "Bis zum Rifugio Sapienza (1.900 m) und zu den Silvestri-Kratern ist es dagegen machbar – warm anziehen, es ist windig und deutlich kühler.",
      "Alternative: Einer bleibt mit dem Baby unten im Café, der andere fährt hoch – dann tauschen.",
      "In Catania, Taormina und Noto ist die <b>Trage besser als der Kinderwagen</b>: Kopfsteinpflaster, Treppen und enge Gassen.",
      "Tagesausflüge wie Syrakus oder Noto (1,5 h Fahrt) lieber halbieren oder auf zwei Tage verteilen.",
      "Gole dell'Alcantara: das Wasser ist eiskalt – nichts fürs Baby, aber schattig und angenehm zum Tragen.",
      "Plant pro Tag <b>einen</b> Programmpunkt, nicht drei. Der Rest ist Bonus."
    ]
  },
  {
    icon: "🏖️",
    title: "Strand & Wasser",
    items: [
      "Immer eine <b>UV-Strandmuschel oder einen Schirm</b> dabei – Schatten gibt es an der Riviera dei Ciclopi kaum.",
      "Früh morgens oder ab 17 Uhr an den Strand, nicht mittags.",
      "Die Lavafelsen heizen sich extrem auf – vorher mit der Hand testen.",
      "Nur kurz ins Wasser (wenige Minuten), danach abtrocknen und anziehen. Auch 27 °C kühlen ein Baby schnell aus.",
      "Sandstrände sind mit Baby angenehmer als die Felsküste – z. B. rund um Catania.",
      "Schwimmwindeln nicht vergessen."
    ]
  },
  {
    icon: "😴",
    title: "Schlaf & Rhythmus",
    items: [
      "Ein 4 Monate altes Baby schläft noch mehrmals am Tag – der Tagesplan richtet sich danach, nicht umgekehrt.",
      "Vertrautes von zu Hause hilft: eigenes Bettlaken, Schnuller, Kuscheltier, gleiches Einschlafritual.",
      "Zimmer abdunkeln – in Sizilien wird es spät dunkel und früh hell.",
      "Klimaanlage auf ca. 24–26 °C, nie direkt auf das Bett gerichtet.",
      "Italienisches Abendessen ab 20:30 passt selten zum Babyrhythmus: früher essen gehen, draußen sitzen oder etwas mitnehmen.",
      "Rechnet mit ein paar unruhigen Nächten durch Hitze und fremde Umgebung – das gibt sich."
    ]
  },
  {
    icon: "🍼",
    title: "Füttern & Hygiene",
    items: [
      "Nehmt <b>die gewohnte Pre-Nahrung in ausreichender Menge mit</b> – deutsche Marken sind vor Ort oft nicht zu bekommen.",
      "Für Fläschchen abgekochtes oder ausgewiesen säuglingsgeeignetes Wasser verwenden: „adatta per l'alimentazione dei neonati“.",
      "Kein Leitungswasser für die Flasche.",
      "Fertige Fläschchen bei der Hitze nicht stehen lassen – frisch zubereiten oder gekühlt transportieren.",
      "Stillen ist in Italien völlig unproblematisch und wird freundlich aufgenommen.",
      "Stillende Mütter brauchen bei der Hitze <b>deutlich mehr zu trinken</b> – immer eine Flasche Wasser dabei."
    ]
  },
  {
    icon: "🏥",
    title: "Gesundheit & Notfall",
    items: [
      "Notruf <b>112</b> (europaweit) und <b>118</b> (Rettungsdienst) gelten auch für Kinder.",
      "Kinder-Notaufnahme heißt <b>„Pronto Soccorso Pediatrico“</b> – in Catania gibt es mehrere Kliniken.",
      "Für kleinere Sorgen: <b>„Guardia Medica Turistica“</b> – ärztlicher Bereitschaftsdienst für Reisende.",
      "Apotheke = <b>„Farmacia“</b>, Notdienste hängen an der Tür aus.",
      "Die Hotelrezeption hilft beim Arztkontakt – Adresse und Telefonnummer habt ihr im Notfall-Bereich.",
      "Bei Fieber, Trinkverweigerung oder auffälliger Schlappheit lieber einmal zu früh zum Arzt.",
      "EHIC-Karte des Babys immer dabei haben."
    ]
  },
  {
    icon: "🏨",
    title: "Hotel & Organisation",
    items: [
      "<b>Meldet das Baby unbedingt vorab beim Hotel an</b> – die Buchung läuft aktuell auf zwei Personen.",
      "Babybett (<b>„culla“</b> oder „lettino per neonato“) rechtzeitig anfragen, sonst braucht ihr ein Reisebett.",
      "Nach Wasserkocher oder Mikrowelle fragen – praktisch fürs Sterilisieren.",
      "Kühlschrank im Zimmer für Milch und Medikamente erfragen.",
      "Klimaanlage ist mit Baby im August faktisch Pflicht – vorab bestätigen lassen.",
      "Ein Zimmer weg von Straße und Bar bringt ruhigere Nächte."
    ]
  }
];

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
