/* =========================================================================
   Malle 2026 (Cala d'Or) – Interaktivität
   ========================================================================= */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const store = {
    get: (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch (e) { return def; } },
    set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------------- Navigation ---------------- */
  const nav = $("#nav");
  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));

  // Sticky nav shadow + scroll progress
  const progress = $("#scrollProgress");
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle("is-scrolled", y > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = h > 0 ? (y / h * 100) + "%" : "0%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  $("#backTop").addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------------- Countdown ---------------- */
  const target = new Date(TRIP.arrival).getTime();
  const departure = new Date(TRIP.departure).getTime();
  const cd = {
    days: $('[data-cd="days"]'), hours: $('[data-cd="hours"]'),
    mins: $('[data-cd="mins"]'), secs: $('[data-cd="secs"]')
  };
  const note = $("#countdownNote");
  const pad = n => String(n).padStart(2, "0");
  // Setzt den Wert und löst bei Änderung eine kurze "Pop"-Animation aus
  const setNum = (el, val) => {
    const str = String(val);
    if (el.textContent === str) return;
    el.textContent = str;
    el.classList.remove("cd--pop");
    void el.offsetWidth; // Reflow erzwingen, damit die Animation neu startet
    el.classList.add("cd--pop");
  };

  function tickCountdown() {
    const now = Date.now();
    let diff = target - now;

    if (diff <= 0) {
      if (now < departure) {
        cd.days.textContent = "0"; cd.hours.textContent = "00";
        cd.mins.textContent = "00"; cd.secs.textContent = "00";
        note.innerHTML = "🏝️ <b>¡Vamos! Ihr seid auf Malle – genießt es!</b>";
        return;
      }
      cd.days.textContent = "∞"; cd.hours.textContent = "♥";
      cd.mins.textContent = "♥"; cd.secs.textContent = "♥";
      note.innerHTML = "Der Trip ist vorbei – aber was für ein Wochenende! 🍻";
      return;
    }
    const d = Math.floor(diff / 86400000); diff -= d * 86400000;
    const h = Math.floor(diff / 3600000); diff -= h * 3600000;
    const m = Math.floor(diff / 60000); diff -= m * 60000;
    const s = Math.floor(diff / 1000);
    cd.days.textContent = d;
    setNum(cd.hours, pad(h));
    setNum(cd.mins, pad(m));
    setNum(cd.secs, pad(s));
  }
  tickCountdown();
  setInterval(tickCountdown, 1000);

  /* ---------------- Reiseplan ---------------- */
  const timeline = $("#planTimeline");
  // Heutiges Datum (mit ?heute=JJJJ-MM-TT Override zum Testen/Vorschauen)
  const TODAY_ISO = (function () {
    try {
      const m = location.search.match(/[?&]heute=(\d{4}-\d{2}-\d{2})/);
      if (m) return m[1];
    } catch (e) {}
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  })();
  timeline.innerHTML = ITINERARY.map((d, i) => {
    const today = d.date && d.date === TODAY_ISO;
    return `
    <article class="plan-day${today ? " is-today" : ""}" data-idx="${i}" data-date="${d.date || ""}">
      <button class="plan-day__head" aria-expanded="false">
        <span class="plan-day__icon">${d.icon}</span>
        <span class="plan-day__meta">
          <span class="plan-day__date">${d.day}${today ? ' <span class="plan-day__today">Heute</span>' : ""}</span>
          <span class="plan-day__title">${d.title}</span>
        </span>
        <span class="plan-day__tag">${d.tag}</span>
        <span class="plan-day__chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="plan-day__body">
        <div class="plan-day__body-inner">
          <p>${d.text}</p>
          <ul class="plan-day__tips">
            ${d.tips.map(t => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      </div>
    </article>`;
  }).join("");

  $$(".plan-day__head", timeline).forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.closest(".plan-day");
      const open = day.classList.contains("is-open");
      $$(".plan-day", timeline).forEach(x => {
        x.classList.remove("is-open");
        $(".plan-day__head", x).setAttribute("aria-expanded", "false");
      });
      if (!open) {
        day.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Heutigen Tag automatisch aufklappen
  (function () {
    const todayEl = $(".plan-day.is-today", timeline);
    if (todayEl) {
      todayEl.classList.add("is-open");
      $(".plan-day__head", todayEl).setAttribute("aria-expanded", "true");
    }
  })();

  /* ---------------- "Heute"-Live-Modus (Tages-Karte) ---------------- */
  (function () {
    const box = $("#todayBox");
    if (!box) return;
    const WD = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const idx = ITINERARY.findIndex(d => d.date === TODAY_ISO);
    // Tag vor Abreise: Vorfreude-Hinweis
    const first = ITINERARY[0] && ITINERARY[0].date;
    const dayBefore = first ? new Date(new Date(first + "T12:00:00").getTime() - 86400000) : null;
    const dayBeforeISO = dayBefore ? `${dayBefore.getFullYear()}-${String(dayBefore.getMonth()+1).padStart(2,"0")}-${String(dayBefore.getDate()).padStart(2,"0")}` : null;

    if (idx < 0) {
      if (TODAY_ISO === dayBeforeISO) {
        box.hidden = false;
        box.innerHTML = '<div class="today-box__inner"><span class="today-box__badge">Morgen geht\'s los</span><h3 class="today-box__title">Koffer… äh, Handgepäck packen! ✈️🍻</h3><p class="today-box__text">Morgen früh sammeln wir Pieth &amp; Robin in Bochum ein. Check-in, Vorglühen, los!</p></div>';
      }
      return; // vor/nach der Reise: keine Tages-Karte
    }

    const d = ITINERARY[idx];
    const dt = new Date(TODAY_ISO + "T12:00:00");
    box.hidden = false;
    box.innerHTML = `<div class="today-box__inner">
        <span class="today-box__badge">Heute · ${WD[dt.getDay()]}, ${d.day.split("·")[1].trim()}</span>
        <h3 class="today-box__title">${d.icon} ${d.title}</h3>
        <p class="today-box__text">${d.text}</p>
        <div class="today-box__wx" id="todayWx"></div>
      </div>`;

    // Heutiges Wetter + Sonnenuntergang laden
    const url = "https://api.open-meteo.com/v1/forecast?latitude=39.375&longitude=3.232"
      + "&daily=weathercode,temperature_2m_max,temperature_2m_min,sunset&timezone=Europe%2FMadrid"
      + "&start_date=" + TODAY_ISO + "&end_date=" + TODAY_ISO;
    const WMO = { 0:"☀️",1:"🌤️",2:"⛅",3:"☁️",45:"🌫️",48:"🌫️",51:"🌦️",53:"🌦️",55:"🌦️",61:"🌧️",63:"🌧️",65:"🌧️",80:"🌦️",81:"🌦️",82:"⛈️",95:"⛈️",96:"⛈️",99:"⛈️" };
    fetch(url).then(r => r.ok ? r.json() : Promise.reject()).then(j => {
      const dd = j && j.daily; if (!dd || !dd.time || !dd.time.length) return;
      const icon = WMO[dd.weathercode[0]] || "🌡️";
      const max = Math.round(dd.temperature_2m_max[0]);
      const min = Math.round(dd.temperature_2m_min[0]);
      const sunset = dd.sunset[0] ? dd.sunset[0].slice(11, 16) : null;
      const wx = $("#todayWx");
      if (wx) wx.innerHTML = `<span>${icon} ${max}° / ${min}°</span>` + (sunset ? `<span>🌇 Sonnenuntergang ${sunset}</span>` : "");
    }).catch(() => {});
  })();

  /* ---------------- Highlights + Filter ---------------- */
  const cats = ["Alle", ...Array.from(new Set(HIGHLIGHTS.map(h => h.cat)))];
  const filterbar = $("#highlightFilters");
  const grid = $("#highlightsGrid");
  let activeCat = "Alle";

  filterbar.innerHTML = cats.map(c =>
    `<button class="chip${c === "Alle" ? " is-active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");

  function renderHighlights() {
    const list = activeCat === "Alle" ? HIGHLIGHTS : HIGHLIGHTS.filter(h => h.cat === activeCat);
    grid.innerHTML = list.map(h => `
      <article class="hl-card">
        <div class="hl-card__top"><span class="hl-card__icon">${h.icon}</span><span class="hl-card__cat">${h.cat}</span></div>
        <h3 class="hl-card__name">${h.name}</h3>
        <p class="hl-card__place">📍 ${h.place}</p>
        <p class="hl-card__text">${h.text}</p>
      </article>
    `).join("");
  }
  filterbar.addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeCat = btn.dataset.cat;
    $$(".chip", filterbar).forEach(c => c.classList.toggle("is-active", c === btn));
    renderHighlights();
  });
  renderHighlights();

  /* ---------------- Generischer Checklist-Renderer ---------------- */
  function buildChecklist(cfg) {
    const { data, gridEl, barEl, labelEl, storageKey, verb } = cfg;
    const state = store.get(storageKey, {});
    const el = $(gridEl);

    let total = 0;
    el.innerHTML = Object.entries(data).map(([group, items]) => `
      <div class="cl-group">
        <h3 class="cl-group__title">${group}</h3>
        <ul class="cl-list">
          ${items.map(item => {
            const id = storageKey + ":" + item;
            total++;
            const checked = state[id] ? " is-checked" : "";
            return `
              <li class="cl-item${checked}">
                <label>
                  <input type="checkbox" data-id="${id}" ${state[id] ? "checked" : ""} />
                  <span class="cl-box" aria-hidden="true"></span>
                  <span class="cl-text">${item}</span>
                </label>
              </li>`;
          }).join("")}
        </ul>
      </div>
    `).join("");

    function updateProgress() {
      const s = store.get(storageKey, {});
      const done = Object.values(s).filter(Boolean).length;
      const pct = total ? Math.round(done / total * 100) : 0;
      $(barEl).style.width = pct + "%";
      $(labelEl).textContent = `${done} von ${total} ${verb}`;
    }

    el.addEventListener("change", e => {
      const box = e.target;
      if (box.type !== "checkbox") return;
      const s = store.get(storageKey, {});
      s[box.dataset.id] = box.checked;
      store.set(storageKey, s);
      box.closest(".cl-item").classList.toggle("is-checked", box.checked);
      updateProgress();
    });

    updateProgress();
    return { updateProgress };
  }

  const packCl = buildChecklist({
    data: PACKING, gridEl: "#packGrid", barEl: "#packProgress",
    labelEl: "#packProgressLabel", storageKey: "malle_pack", verb: "gepackt"
  });

  function resetList(storageKey, gridSel, cl) {
    store.set(storageKey, {});
    $$(`${gridSel} input[type="checkbox"]`).forEach(cb => {
      cb.checked = false;
      cb.closest(".cl-item").classList.remove("is-checked");
    });
    cl.updateProgress();
  }
  $("#packReset").addEventListener("click", () => resetList("malle_pack", "#packGrid", packCl));

  /* ---------------- Erlebnisse & Ausflüge (Karten) ---------------- */
  const cardHTML = e => `
      <article class="hl-card">
        <div class="hl-card__top"><span class="hl-card__icon">${e.icon}</span><span class="hl-card__cat">${e.cat}</span></div>
        <h3 class="hl-card__name">${e.name}</h3>
        <p class="hl-card__place">📍 ${e.place}</p>
        <p class="hl-card__text">${e.text}</p>
      </article>`;
  const expGrid = $("#erlebnisseGrid");
  if (expGrid && typeof ERLEBNISSE !== "undefined") {
    expGrid.innerHTML = ERLEBNISSE.map(cardHTML).join("");
  }
  const tripGrid = $("#daytripsGrid");
  if (tripGrid && typeof DAYTRIPS !== "undefined") {
    tripGrid.innerHTML = DAYTRIPS.map(cardHTML).join("");
  }
  const eatGrid = $("#restaurantGrid");
  if (eatGrid && typeof RESTAURANTS !== "undefined") {
    eatGrid.innerHTML = RESTAURANTS.map(r => `
      <a class="hl-card hl-card--link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.maps)}" target="_blank" rel="noopener">
        <div class="hl-card__top"><span class="hl-card__icon">${r.icon}</span><span class="hl-card__cat">${r.cat}</span></div>
        <h3 class="hl-card__name">${r.name}</h3>
        <p class="hl-card__text">${r.note}</p>
        <p class="hl-card__place">📍 In Google Maps öffnen ↗</p>
      </a>`).join("");
  }
  const bookGrid = $("#bookableGrid");
  if (bookGrid && typeof BOOKABLE !== "undefined") {
    bookGrid.innerHTML = BOOKABLE.map(a => `
      <a class="hl-card hl-card--link" href="${a.url}" target="_blank" rel="noopener">
        <div class="hl-card__top"><span class="hl-card__icon">${a.icon}</span><span class="hl-card__cat">${a.cat}</span></div>
        <h3 class="hl-card__name">${a.name}</h3>
        <p class="book-meta"><span class="book-price">💶 ${a.price}</span> · <span class="book-access">${a.access}</span></p>
        <p class="hl-card__text">${a.note}</p>
        <p class="hl-card__place">🎟️ Jetzt buchen ↗</p>
      </a>`).join("");
  }

  /* ---------------- Kulinarische Bucket-List ---------------- */
  const foodGrid = $("#foodGrid");
  const foodState = store.get("malle_food", {});
  foodGrid.innerHTML = FOOD.map(f => {
    const id = "food:" + f.name;
    const on = foodState[id] ? " is-tried" : "";
    return `
      <button class="food-card${on}" data-id="${id}" aria-pressed="${!!foodState[id]}">
        <span class="food-card__icon">${f.icon}</span>
        <span class="food-card__name">${f.name}</span>
        <span class="food-card__note">${f.note}</span>
        <span class="food-card__stamp" aria-hidden="true">✓ probiert</span>
      </button>`;
  }).join("");

  function updateFoodProgress() {
    const s = store.get("malle_food", {});
    const done = Object.values(s).filter(Boolean).length;
    const pct = FOOD.length ? Math.round(done / FOOD.length * 100) : 0;
    $("#foodProgress").style.width = pct + "%";
    $("#foodProgressLabel").textContent = `${done} von ${FOOD.length} probiert`;
  }
  foodGrid.addEventListener("click", e => {
    const card = e.target.closest(".food-card");
    if (!card) return;
    const s = store.get("malle_food", {});
    const id = card.dataset.id;
    s[id] = !s[id];
    store.set("malle_food", s);
    card.classList.toggle("is-tried", s[id]);
    card.setAttribute("aria-pressed", String(!!s[id]));
    updateFoodProgress();
  });
  updateFoodProgress();

  /* ---------------- Sprachkarten (flip) ---------------- */
  const phrasesGrid = $("#phrasesGrid");
  phrasesGrid.innerHTML = PHRASES.map(p => `
    <button class="phrase" aria-label="${p.de} auf Spanisch">
      <span class="phrase__inner">
        <span class="phrase__face phrase__front">
          <span class="phrase__de">${p.de}</span>
          <span class="phrase__hint">antippen →</span>
        </span>
        <span class="phrase__face phrase__back">
          <span class="phrase__it">${p.it}</span>
          <span class="phrase__pron">[${p.pron}]</span>
        </span>
      </span>
    </button>
  `).join("");
  phrasesGrid.addEventListener("click", e => {
    const card = e.target.closest(".phrase");
    if (card) card.classList.toggle("is-flipped");
  });

  /* ---------------- Scroll-Reveal ---------------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    $$(".section, .fact, .hl-card, .plan-day").forEach(el => {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  /* ---------------- Interaktive Karten (Leaflet) ---------------- */
  function initMaps() {
    if (typeof L === "undefined" || typeof GEO === "undefined") return;
    [["map-mallorca", GEO.mallorca], ["map-calador", GEO.calador]].forEach(([id, cfg]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const map = L.map(el, { scrollWheelZoom: false, zoomControl: true }).setView(cfg.center, cfg.zoom);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19, attribution: "&copy; OpenStreetMap"
      }).addTo(map);

      const pts = cfg.points;
      (cfg.routes || []).forEach(r => {
        const a = pts[r.from], b = pts[r.to];
        L.polyline([[a.lat, a.lng], [b.lat, b.lng]], {
          color: r.type === "taxi" ? "#c65332" : "#0a5c73",
          weight: 3.5, opacity: .75, dashArray: r.type === "taxi" ? "2 9" : "4 10"
        }).addTo(map);
      });

      const bounds = [];
      pts.forEach(pt => {
        const icon = L.divIcon({
          className: "mkr-wrap",
          html: `<span class="mkr${pt.us ? " mkr--us" : ""}">${pt.n}</span>`,
          iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, -14]
        });
        const url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(pt.maps);
        L.marker([pt.lat, pt.lng], { icon })
          .addTo(map)
          .bindPopup(`<b>${pt.name}</b><br><a href="${url}" target="_blank" rel="noopener">In Google Maps öffnen ↗</a>`);
        bounds.push([pt.lat, pt.lng]);
      });

      const fit = () => { map.invalidateSize(); if (bounds.length) map.fitBounds(bounds, { padding: [34, 34], maxZoom: cfg.fitMaxZoom || 16 }); };
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { fit(); io.disconnect(); } }));
        io.observe(el);
      }
      setTimeout(fit, 500);
    });
  }
  initMaps();

  /* ---------------- Dark Mode ---------------- */
  (function () {
    const btn = $("#themeToggle");
    if (!btn) return;
    const meta = document.querySelector('meta[name="theme-color"]');
    const apply = mode => {
      document.documentElement.setAttribute("data-theme", mode);
      btn.textContent = mode === "dark" ? "☀️" : "🌙";
      btn.setAttribute("aria-pressed", String(mode === "dark"));
      if (meta) meta.setAttribute("content", mode === "dark" ? "#0f1a22" : "#0a5c73");
    };
    let cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    apply(cur);
    btn.addEventListener("click", () => {
      cur = cur === "dark" ? "light" : "dark";
      try { localStorage.setItem("malle_theme", cur); } catch (e) {}
      apply(cur);
    });
  })();

  /* ---------------- Live-Wetter (open-meteo, kein API-Key) ---------------- */
  (function () {
    const el = $("#weather");
    if (!el) return;
    const WMO = {
      0: ["☀️", "Sonnig"], 1: ["🌤️", "Meist sonnig"], 2: ["⛅", "Teils bewölkt"], 3: ["☁️", "Bewölkt"],
      45: ["🌫️", "Nebel"], 48: ["🌫️", "Nebel"], 51: ["🌦️", "Nieseln"], 53: ["🌦️", "Nieseln"], 55: ["🌦️", "Nieseln"],
      61: ["🌧️", "Regen"], 63: ["🌧️", "Regen"], 65: ["🌧️", "Starkregen"], 71: ["🌨️", "Schnee"],
      80: ["🌦️", "Schauer"], 81: ["🌦️", "Schauer"], 82: ["⛈️", "Starke Schauer"],
      95: ["⛈️", "Gewitter"], 96: ["⛈️", "Gewitter"], 99: ["⛈️", "Gewitter"]
    };
    const WD = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
    const hhmm = s => (s && s.length >= 16) ? s.slice(11, 16) : "–";
    const fallback = '<p class="weather__note">🌤️ Vorhersage noch nicht verfügbar (erscheint ~2 Wochen vor Abreise – und nur online). Oktober-Mittel: tagsüber ~22–24 °C, Wasser ~21 °C, abends kühler.</p>';
    const url = "https://api.open-meteo.com/v1/forecast?latitude=39.375&longitude=3.232"
      + "&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset"
      + "&timezone=Europe%2FMadrid&start_date=2026-10-16&end_date=2026-10-19";
    fetch(url)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(d => {
        const dd = d && d.daily;
        if (!dd || !dd.time || !dd.time.length) throw 0;
        const cards = dd.time.map((t, i) => {
          const dt = new Date(t + "T12:00:00");
          const code = dd.weathercode[i];
          const w = WMO[code] || ["🌡️", "–"];
          const max = Math.round(dd.temperature_2m_max[i]);
          const min = Math.round(dd.temperature_2m_min[i]);
          const rain = dd.precipitation_probability_max ? dd.precipitation_probability_max[i] : null;
          return `
            <div class="wcard">
              <div class="wcard__day">${WD[dt.getDay()]} · ${String(dt.getDate()).padStart(2,"0")}.${String(dt.getMonth()+1).padStart(2,"0")}.</div>
              <div class="wcard__icon" title="${w[1]}">${w[0]}</div>
              <div class="wcard__temp">${max}° <span>/ ${min}°</span></div>
              <div class="wcard__meta">${rain != null ? "💧 " + rain + "%" : ""}</div>
              <div class="wcard__sun">🌅 ${hhmm(dd.sunrise[i])} · 🌇 ${hhmm(dd.sunset[i])}</div>
            </div>`;
        }).join("");
        el.innerHTML = '<p class="weather__cap">Vorhersage für Cala d\'Or · Quelle: open-meteo</p><div class="weather__grid">' + cards + "</div>";
      })
      .catch(() => { el.innerHTML = fallback; });
  })();

  /* ---------------- Geteilte Kasse (synchron über alle Geräte) ---------------- */
  (function () {
    const form = $("#budgetForm");
    if (!form) return;
    const MEMBERS = ["Robert", "Robin", "Pieth", "Heiko"], PERS = MEMBERS.length;
    const STATE_KEY = "malle_kitty_state", ID_KEY = "malle_kitty_id", PAYER_KEY = "malle_kitty_payer";
    const API = "https://jsonblob.com/api/jsonBlob";
    const fmt0 = n => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
    const fmt2 = n => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
    const esc = s => String(s).replace(/[<>&"]/g, c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]));

    function normalize(d) {
      if (!d || typeof d !== "object") d = {};
      if (typeof d.total !== "number") d.total = 2000;
      if (!Array.isArray(d.items)) d.items = [];
      if (typeof d.updatedAt !== "number") d.updatedAt = 0;
      d.items = d.items.filter(i => i && i.id).map(i => ({ id: i.id, name: String(i.name || ""), amount: +i.amount || 0, payer: MEMBERS.indexOf(i.payer) >= 0 ? i.payer : MEMBERS[0], ts: +i.ts || 0 }));
      return d;
    }
    let state = normalize(store.get(STATE_KEY, null));
    let potId = null;
    try {
      const m = location.hash.match(/kasse=([A-Za-z0-9\-]+)/);
      potId = (m && m[1]) || store.get(ID_KEY, null);
    } catch (e) { potId = store.get(ID_KEY, null); }
    const saveLocal = () => store.set(STATE_KEY, state);

    // --- Remote-Helfer (jsonblob, ohne Account) ---
    async function remoteGet(id) {
      const r = await fetch(API + "/" + id, { headers: { "Accept": "application/json" } });
      if (!r.ok) throw new Error("get " + r.status);
      return normalize(await r.json());
    }
    async function remotePut(id, obj) {
      const r = await fetch(API + "/" + id, { method: "PUT", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(obj) });
      if (!r.ok) throw new Error("put " + r.status);
    }
    async function remoteCreate(obj) {
      const r = await fetch(API, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(obj) });
      if (!r.ok) throw new Error("create " + r.status);
      let loc = r.headers.get("Location") || r.headers.get("X-jsonblob");
      if (!loc) throw new Error("no-id");
      return loc.split("/").pop();
    }

    function setSync(txt, cls) {
      const el = $("#kittySync"); if (!el) return;
      el.textContent = txt || "";
      el.className = "kitty-sync" + (cls ? " " + cls : "");
    }
    function updateBar() {
      const st = $("#kittyStatus"), start = $("#kittyStart"), share = $("#kittyShare");
      if (potId) {
        st.textContent = "● Gemeinsame Kasse aktiv";
        st.classList.add("is-live");
        start.hidden = true; share.hidden = false;
      } else {
        st.textContent = "● Kasse nur auf diesem Gerät";
        st.classList.remove("is-live");
        start.hidden = false; share.hidden = true;
      }
    }

    // Wendet eine Mutation lokal an, pusht gemergt aufs Remote (concurrent-sicher)
    async function mutate(fn) {
      fn(state); state.updatedAt = Date.now(); saveLocal(); render();
      if (!potId) return;
      setSync("synchronisiere …");
      try {
        let base = await remoteGet(potId).catch(() => null);
        if (!base) base = { total: state.total, items: [], updatedAt: 0 };
        fn(base); base.updatedAt = Date.now();
        await remotePut(potId, base);
        state = normalize(base); saveLocal(); render();
        setSync("✓ synchron", "ok");
      } catch (e) { setSync("⚠ offline – lokal gesichert", "warn"); }
    }
    async function pull() {
      if (!potId) return;
      try {
        const remote = await remoteGet(potId);
        if (remote.updatedAt >= state.updatedAt) { state = remote; saveLocal(); render(); }
        setSync("✓ synchron", "ok");
      } catch (e) { setSync("⚠ offline", "warn"); }
    }

    function settle() {
      const paid = {}; MEMBERS.forEach(m => paid[m] = 0);
      state.items.forEach(i => { paid[i.payer] = (paid[i.payer] || 0) + i.amount; });
      const spent = state.items.reduce((s, i) => s + i.amount, 0);
      const share = spent / PERS;
      const bal = MEMBERS.map(m => ({ m, paid: paid[m], bal: paid[m] - share }));
      // Transfer-Vorschläge (greedy)
      const deb = bal.filter(b => b.bal < -0.01).map(b => ({ m: b.m, v: -b.bal })).sort((a, b) => b.v - a.v);
      const cre = bal.filter(b => b.bal > 0.01).map(b => ({ m: b.m, v: b.bal })).sort((a, b) => b.v - a.v);
      const tx = []; let di = 0, ci = 0;
      while (di < deb.length && ci < cre.length) {
        const amt = Math.min(deb[di].v, cre[ci].v);
        tx.push({ from: deb[di].m, to: cre[ci].m, amt });
        deb[di].v -= amt; cre[ci].v -= amt;
        if (deb[di].v < 0.01) di++; if (cre[ci].v < 0.01) ci++;
      }
      return { bal, share, spent, tx };
    }

    function render() {
      const spent = state.items.reduce((s, i) => s + i.amount, 0);
      const left = state.total - spent, over = left < 0;
      $("#bTotal").textContent = fmt0(state.total);
      $("#bPerPerson").textContent = fmt0(state.total / PERS) + " / Mann";
      $("#bSpent").textContent = fmt0(spent);
      $("#bSpentPP").textContent = fmt0(spent / PERS) + " / Mann";
      $("#bLeft").textContent = fmt0(left);
      $("#bLeftPP").textContent = fmt0(left / PERS) + " / Mann";
      $("#bLeft").classList.toggle("is-over", over);
      const pct = state.total > 0 ? Math.round(spent / state.total * 100) : 0;
      const bar = $("#bBar");
      bar.style.width = Math.min(100, pct) + "%";
      bar.classList.toggle("is-over", over);
      $("#bBarLabel").textContent = over ? `${pct} % – ${fmt0(-left)} über Budget!` : `${pct} % ausgegeben`;

      const list = $("#budgetList");
      list.innerHTML = state.items.length
        ? state.items.map(i => `<li class="bitem"><span class="bitem__payer">${esc(i.payer)}</span><span class="bitem__name">${esc(i.name)}</span><span class="bitem__amt">${fmt2(i.amount)}</span><button class="bitem__del" data-id="${i.id}" aria-label="Löschen">×</button></li>`).join("")
        : '<li class="bitem bitem--empty">Noch keine Ausgaben eingetragen.</li>';

      const s = settle(), se = $("#settle");
      if (!state.items.length) {
        se.innerHTML = '<p class="settle__hint">Sobald Ausgaben da sind, seht ihr hier, wer wem was schuldet.</p>';
      } else {
        const rows = s.bal.map(b => {
          const cls = b.bal > 0.01 ? "pos" : (b.bal < -0.01 ? "neg" : "");
          const note = b.bal > 0.01 ? "bekommt " + fmt2(b.bal) : (b.bal < -0.01 ? "schuldet " + fmt2(-b.bal) : "ausgeglichen");
          return `<div class="settle__row"><span class="settle__name">${b.m}</span><span class="settle__paid">bezahlt ${fmt2(b.paid)}</span><span class="settle__bal ${cls}">${note}</span></div>`;
        }).join("");
        const tx = s.tx.length
          ? '<div class="settle__tx"><b>Ausgleich:</b><ul>' + s.tx.map(t => `<li>${t.from} → <b>${t.to}</b>: ${fmt2(t.amt)}</li>`).join("") + "</ul></div>"
          : '<div class="settle__tx">Alles ausgeglichen 🎉</div>';
        se.innerHTML = `<p class="settle__hint">Fairer Anteil pro Mann: <b>${fmt2(s.share)}</b> (von ${fmt2(s.spent)} gesamt)</p>${rows}${tx}`;
      }
      const edit = $("#bEditTotal");
      if (edit && edit !== document.activeElement) edit.value = state.total;
    }

    // --- Events ---
    try { const lp = store.get(PAYER_KEY, null); if (lp && MEMBERS.indexOf(lp) >= 0) $("#bPayer").value = lp; } catch (e) {}
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = $("#bName").value.trim();
      const amt = parseFloat($("#bAmount").value);
      const payer = $("#bPayer").value;
      if (!name || isNaN(amt) || amt < 0) return;
      const item = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), name, amount: amt, payer, ts: Date.now() };
      store.set(PAYER_KEY, payer);
      mutate(s => s.items.push(item));
      form.reset(); $("#bPayer").value = payer; $("#bName").focus();
    });
    $("#budgetList").addEventListener("click", e => {
      const b = e.target.closest(".bitem__del"); if (!b) return;
      const id = b.dataset.id;
      mutate(s => { s.items = s.items.filter(i => i.id !== id); });
    });
    $("#bEditTotal").addEventListener("change", e => {
      const v = parseFloat(e.target.value);
      if (!isNaN(v) && v >= 0) mutate(s => { s.total = v; });
    });
    $("#bReset").addEventListener("click", () => mutate(s => { s.items = []; }));

    $("#kittyStart").addEventListener("click", async () => {
      setSync("Kasse wird erstellt …");
      try {
        state.updatedAt = Date.now();
        const id = await remoteCreate(state);
        potId = id; store.set(ID_KEY, id);
        try { history.replaceState(null, "", "#kasse=" + id); } catch (e) {}
        updateBar(); setSync("✓ Kasse aktiv – jetzt Link teilen!", "ok");
        startPolling();
      } catch (e) { setSync("⚠ Konnte Kasse nicht erstellen (online nötig)", "warn"); }
    });
    $("#kittyShare").addEventListener("click", async () => {
      const link = location.origin + location.pathname + "#kasse=" + potId;
      try { await navigator.clipboard.writeText(link); setSync("🔗 Link kopiert – in die Gruppe posten!", "ok"); }
      catch (e) { setSync(link, "ok"); }
    });

    let polling = false;
    function startPolling() {
      if (polling) return; polling = true;
      setInterval(pull, 12000);
      document.addEventListener("visibilitychange", () => { if (!document.hidden) pull(); });
      window.addEventListener("focus", pull);
    }

    // --- Init ---
    render(); updateBar();
    if (potId) { store.set(ID_KEY, potId); pull(); startPolling(); }
  })();

  /* ---------------- Service Worker (offline) ---------------- */
  if ("serviceWorker" in navigator) {
    // Wenn ein neuer SW die Kontrolle uebernimmt, Seite genau einmal neu laden,
    // damit eine aktualisierte Version sofort sichtbar ist (kein alter Cache).
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
