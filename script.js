/* ===== ModuleX VB Rental — script.js ===== */

(function () {
  "use strict";

  const translations = {
    sr: {
      "nav.equipment": "Oprema",
      "nav.info": "Informacije",
      "nav.usecases": "Namena",
      "nav.notes": "Napomene",
      "nav.contact": "Kontakt",

      "hero.eyebrow": "MODULEX VB RENTAL",
      "hero.headline": "Profesionalna oprema za događaje i gradilišta",
      "hero.sub": "Pouzdana rental rešenja za festivale, koncerte, sportske događaje, sajmove, privatne proslave i gradilišta.",
      "hero.cta": "Kontaktirajte nas",
      "hero.cta2": "Pogledajte opremu",

      "benefits.quality": "Vrhunski kvalitet",
      "benefits.setup": "Brza montaža",
      "benefits.delivery": "Sigurna dostava",
      "benefits.partner": "Pouzdan partner",

      "equipment.eyebrow": "Oprema",
      "equipment.title": "Naša oprema za iznajmljivanje",

      "p1.title": "Kontejner WC / muško / ženski sa lavaboom",
      "p1.b1": "Odvojene jedinice za muškarce i žene",
      "p1.b2": "Lavabo sa više slavina",
      "p1.b3": "Kvalitetna sanitarna oprema",
      "p1.b4": "Brza i jednostavna montaža",
      "p1.b5": "Priključak za vodu i kanalizaciju",
      "p1.dim": "Dimenzije: 605 × 243 × 259 cm (D × Š × V)",
      "p1.cap": "Kapacitet: do 150 osoba",

      "p2.title": "Kontejner kupatilo",
      "p2.subtitle": "3 kabine tuš / 3 kabine WC",
      "p2.b1": "3 kabine tuš sa toplom vodom",
      "p2.b2": "3 kabine WC",
      "p2.b3": "Bojler kapaciteta 100L",
      "p2.b4": "Ventilacija i osvetljenje",
      "p2.b5": "Brza i jednostavna montaža",
      "p2.dim": "Dimenzije: 605 × 243 × 259 cm (D × Š × V)",

      "p3a.title": "Niske Heras ograde (policijske)",
      "p3a.b1": "Visina: 110 cm",
      "p3a.b2": "Dužina: 250 cm",
      "p3a.b3": "Materijal: pocinkovani čelik",
      "p3a.b4": "Povezivanje: kuka / žaba sistem",
      "p3a.b5": "Idealno za događaje, manifestacije i kontrolu pristupa",

      "p3b.title": "Visoke Heras ograde",
      "p3b.b1": "Visina: 200 cm",
      "p3b.b2": "Dužina: 350 cm",
      "p3b.b3": "Materijal: pocinkovani čelik",
      "p3b.b4": "Ispuna: žičana mreža",
      "p3b.b5": "Stabilna i sigurna",
      "p3b.b6": "Idealno za gradilišta, ograđivanje i zaštitu privatnosti",

      "p4.title": "Lavaboi / stanice za pranje ruku",
      "p4.b1": "Kapacitet: 4–6 slavina",
      "p4.b2": "Priključak za vodu",
      "p4.b3": "Odvod za otpadnu vodu",
      "p4.b4": "Higijenski i izdržljivi",
      "p4.b5": "Idealno rešenje za događaje, gradilišta i javne površine",

      "p5.title": "WC kabine (mišje WC)",
      "p5.b1": "Higijensko rešenje",
      "p5.b2": "Laka i praktična za postavljanje",
      "p5.b3": "Idealno za događaje i gradilišta",

      "price.onrequest": "Cena na upit",

      "info.eyebrow": "Informacije",
      "info.title": "Dodatne informacije",
      "info.transport.title": "Transport",
      "info.transport.text": "Prevoz i postavljanje se obračunavaju dodatno.",
      "info.install.title": "Montaža / demontaža",
      "info.install.text": "Brza i profesionalna ekipa.",
      "info.conn.title": "Priključci",
      "info.conn.text": "Obezbeđujemo sve neophodne priključke za vodu i struju.",

      "usecases.eyebrow": "Namena",
      "usecases.title": "Gde koristimo našu opremu",
      "usecases.festivals": "Festivali",
      "usecases.concerts": "Koncerti",
      "usecases.sports": "Sportski događaji",
      "usecases.fairs": "Sajmovi",
      "usecases.private": "Privatne proslave",
      "usecases.sites": "Gradilišta",

      "notes.eyebrow": "Napomene",
      "notes.title": "Napomene o iznajmljivanju",
      "notes.n1": "Minimalan period zakupa: 1 dan",
      "notes.n2": "PDV nije uključen",
      "notes.n3": "Transport i postavljanje se obračunavaju dodatno",
      "notes.n4": "Dostupnost i cena su na upit",

      "contact.title": "Kontakt",
      "contact.phone": "Telefon",
      "contact.email": "Email",
      "contact.location": "Lokacija",
      "contact.locationValue": "Novi Sad, Srbija",

      "footer.rights": "Sva prava zadržana."
    },

    en: {
      "nav.equipment": "Equipment",
      "nav.info": "Information",
      "nav.usecases": "Use Cases",
      "nav.notes": "Notes",
      "nav.contact": "Contact",

      "hero.eyebrow": "MODULEX VB RENTAL",
      "hero.headline": "Professional equipment for events and construction sites",
      "hero.sub": "Reliable rental solutions for festivals, concerts, sports events, fairs, private celebrations, and construction sites.",
      "hero.cta": "Contact us",
      "hero.cta2": "View equipment",

      "benefits.quality": "Top quality",
      "benefits.setup": "Fast setup",
      "benefits.delivery": "Safe delivery",
      "benefits.partner": "Reliable partner",

      "equipment.eyebrow": "Equipment",
      "equipment.title": "Our rental equipment",

      "p1.title": "WC container / male / female with washbasin",
      "p1.b1": "Separate units for men and women",
      "p1.b2": "Multi-faucet washbasin",
      "p1.b3": "High-quality sanitary equipment",
      "p1.b4": "Quick and easy setup",
      "p1.b5": "Water and sewage connection",
      "p1.dim": "Dimensions: 605 × 243 × 259 cm (L × W × H)",
      "p1.cap": "Capacity: up to 150 people",

      "p2.title": "Bathroom container",
      "p2.subtitle": "3 shower cabins / 3 WC cabins",
      "p2.b1": "3 shower cabins with hot water",
      "p2.b2": "3 WC cabins",
      "p2.b3": "100L boiler",
      "p2.b4": "Ventilation and lighting",
      "p2.b5": "Quick and easy setup",
      "p2.dim": "Dimensions: 605 × 243 × 259 cm (L × W × H)",

      "p3a.title": "Low Heras fences (crowd control / police barriers)",
      "p3a.b1": "Height: 110 cm",
      "p3a.b2": "Length: 250 cm",
      "p3a.b3": "Material: galvanized steel",
      "p3a.b4": "Connection: hook / clamp system",
      "p3a.b5": "Ideal for events, public gatherings, and access control",

      "p3b.title": "High Heras fences",
      "p3b.b1": "Height: 200 cm",
      "p3b.b2": "Length: 350 cm",
      "p3b.b3": "Material: galvanized steel",
      "p3b.b4": "Infill: wire mesh",
      "p3b.b5": "Stable and secure",
      "p3b.b6": "Ideal for construction sites, fencing, and privacy protection",

      "p4.title": "Hand-washing units",
      "p4.b1": "Capacity: 4–6 taps",
      "p4.b2": "Water connection",
      "p4.b3": "Wastewater drainage",
      "p4.b4": "Hygienic and durable",
      "p4.b5": "Ideal solution for events, construction sites, and public areas",

      "p5.title": "Portable WC cabins",
      "p5.b1": "Hygienic solution",
      "p5.b2": "Easy and practical to place",
      "p5.b3": "Ideal for events and construction sites",

      "price.onrequest": "Price on request",

      "info.eyebrow": "Information",
      "info.title": "Additional information",
      "info.transport.title": "Transport",
      "info.transport.text": "Transport and setup are charged additionally.",
      "info.install.title": "Installation / dismantling",
      "info.install.text": "Fast and professional team.",
      "info.conn.title": "Connections",
      "info.conn.text": "We provide all necessary water and power connections.",

      "usecases.eyebrow": "Use Cases",
      "usecases.title": "Where we're used",
      "usecases.festivals": "Festivals",
      "usecases.concerts": "Concerts",
      "usecases.sports": "Sports events",
      "usecases.fairs": "Fairs",
      "usecases.private": "Private celebrations",
      "usecases.sites": "Construction sites",

      "notes.eyebrow": "Notes",
      "notes.title": "Rental information",
      "notes.n1": "Minimum rental period: 1 day",
      "notes.n2": "VAT not included",
      "notes.n3": "Transport and setup are charged additionally",
      "notes.n4": "Availability and pricing are on request",

      "contact.title": "Contact",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.location": "Location",
      "contact.locationValue": "Novi Sad, Serbia",

      "footer.rights": "All rights reserved."
    }
  };

  const STORAGE_KEY = "modulexvb_lang";
  const root = document.documentElement;

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.sr;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    root.setAttribute("lang", lang);
    document.title =
      lang === "en"
        ? "ModuleX VB Rental — Professional equipment for events and construction sites"
        : "ModuleX VB Rental — Profesionalna oprema za događaje i gradilišta";
  }

  function setLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  function initLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initial = saved === "en" || saved === "sr" ? saved : "sr";
    applyLanguage(initial);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
  });

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  initLanguage();
})();
