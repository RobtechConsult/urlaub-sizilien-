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
  timeline.innerHTML = ITINERARY.map((d, i) => `
    <article class="plan-day" data-idx="${i}">
      <button class="plan-day__head" aria-expanded="false">
        <span class="plan-day__icon">${d.icon}</span>
        <span class="plan-day__meta">
          <span class="plan-day__date">${d.day}</span>
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
    </article>
  `).join("");

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
