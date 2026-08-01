/**
 * Cinnamon desktop preview — interactive shell
 * Layout modelled on Linux Mint Cinnamon + Mint-Y-Dark-Orange
 */

/* ---------- App / category data ---------- */

/** Menu sidebar places (above favorites) — matches live Cinnamon menu */
const MENU_PLACES = [
  { id: "desktop", name: "Desktop", icon: "assets/places/user-desktop.png", place: "desktop" },
  { id: "downloads", name: "Downloads", icon: "assets/places/folder-download.png", place: "downloads" },
];

/** Menu sidebar favorites — live system defaults */
const FAVORITES = [
  { id: "calculator", name: "Calculator", icon: "assets/apps/calculator.svg" },
  { id: "calendar", name: "Calendar", icon: "assets/apps/calendar.svg" },
  { id: "editor", name: "Text Editor", icon: "assets/mimetypes/text-x-generic.png" },
  { id: "software", name: "Software Manager", icon: "assets/apps/software-manager.svg" },
  { id: "settings", name: "System Settings", icon: "assets/menu/preferences-desktop.svg" },
];

/** Categories — order matches live Cinnamon 6 menu */
const CATEGORIES = [
  { id: "all", name: "All Applications", icon: "grid" },
  { id: "accessories", name: "Accessories", icon: "assets/menu/applications-accessories.svg" },
  { id: "graphics", name: "Graphics", icon: "assets/menu/applications-graphics.svg" },
  { id: "internet", name: "Internet", icon: "assets/menu/applications-internet.svg" },
  { id: "office", name: "Office", icon: "assets/menu/applications-office.svg" },
  { id: "multimedia", name: "Sound & Video", icon: "assets/menu/applications-multimedia.svg" },
  { id: "prefs", name: "Preferences", icon: "assets/menu/preferences-desktop.svg" },
  { id: "admin", name: "Administration", icon: "assets/menu/cs-cat-admin.svg" },
  { id: "favorites", name: "Favorites", icon: "star" },
  { id: "recent", name: "Recent Files", icon: "recent" },
];

const APPS = [
  {
    id: "firefox",
    name: "Firefox Web Browser",
    desc: "Browse the World Wide Web",
    icon: "assets/apps/firefox.svg",
    categories: ["internet", "all"],
  },
  {
    id: "files",
    name: "Files",
    desc: "Access and organize files",
    icon: "assets/apps/nemo.png",
    categories: ["accessories", "all"],
  },
  {
    id: "terminal",
    name: "Terminal",
    desc: "Use the command line",
    icon: "assets/apps/terminal.svg",
    categories: ["accessories", "all"],
  },
  {
    id: "software",
    name: "Software Manager",
    desc: "Install and manage applications",
    icon: "assets/apps/software-manager.svg",
    categories: ["admin", "all"],
  },
  {
    id: "updates",
    name: "Update Manager",
    desc: "Show and install available updates",
    icon: "assets/apps/update-manager.svg",
    categories: ["admin", "all"],
  },
  {
    id: "calculator",
    name: "Calculator",
    desc: "Perform arithmetic, scientific or financial calculations",
    icon: "assets/apps/calculator.svg",
    categories: ["accessories", "all"],
  },
  {
    id: "calendar",
    name: "Calendar",
    desc: "Calendar application",
    icon: "assets/apps/calendar.svg",
    categories: ["office", "all"],
  },
  {
    id: "editor",
    name: "Text Editor",
    desc: "Edit text files",
    icon: "assets/mimetypes/text-x-generic.png",
    categories: ["accessories", "all"],
  },
  {
    id: "settings",
    name: "System Settings",
    desc: "Cinnamon desktop settings",
    icon: "assets/menu/preferences-desktop.svg",
    categories: ["prefs", "all"],
  },
  {
    id: "a11y",
    name: "Accessibility",
    desc: "Configure accessibility features",
    icon: "assets/menu/preferences-desktop.svg",
    categories: ["prefs", "all"],
  },
  {
    id: "account",
    name: "Account details",
    desc: "Change your user preferences and password",
    icon: "assets/status/emblem-system.png",
    categories: ["prefs", "all"],
  },
  {
    id: "libreoffice",
    name: "LibreOffice",
    desc: "The office productivity suite",
    icon: "assets/apps/org.libreoffice.LibreOffice.startcenter.png",
    categories: ["office", "all"],
  },
  {
    id: "writer",
    name: "LibreOffice Writer",
    desc: "Create and edit text documents",
    icon: "assets/apps/org.libreoffice.LibreOffice.writer.png",
    categories: ["office", "all"],
  },
  {
    id: "calc",
    name: "LibreOffice Calc",
    desc: "Perform calculations, analyze information",
    icon: "assets/apps/org.libreoffice.LibreOffice.calc.png",
    categories: ["office", "all"],
  },
  {
    id: "impress",
    name: "LibreOffice Impress",
    desc: "Create and edit presentations",
    icon: "assets/apps/org.libreoffice.LibreOffice.impress.png",
    categories: ["office", "all"],
  },
  {
    id: "draw",
    name: "LibreOffice Draw",
    desc: "Create and edit drawings",
    icon: "assets/apps/org.libreoffice.LibreOffice.draw.png",
    categories: ["office", "graphics", "all"],
  },
  {
    id: "video",
    name: "Videos",
    desc: "Play movies",
    icon: "assets/apps/video-player.svg",
    categories: ["multimedia", "all"],
  },
  {
    id: "music",
    name: "Rhythmbox",
    desc: "Play and organize your music collection",
    icon: "assets/apps/audio-player.svg",
    categories: ["multimedia", "all"],
  },
  {
    id: "network-prefs",
    name: "Network",
    desc: "Network settings",
    icon: "assets/apps/network-prefs.svg",
    categories: ["prefs", "all"],
  },
];

const PLACES_APPS = [
  { id: "place-home", name: "Home", desc: "Personal folder", icon: "assets/places/user-home.png", place: "home" },
  { id: "place-desktop", name: "Desktop", desc: "Desktop folder", icon: "assets/places/user-desktop.png", place: "desktop" },
  { id: "place-docs", name: "Documents", desc: "Documents folder", icon: "assets/places/folder-documents.png", place: "documents" },
  { id: "place-dl", name: "Downloads", desc: "Downloads folder", icon: "assets/places/folder-download.png", place: "downloads" },
  { id: "place-music", name: "Music", desc: "Music folder", icon: "assets/places/folder-music.png", place: "music" },
  { id: "place-pics", name: "Pictures", desc: "Pictures folder", icon: "assets/places/folder-pictures.png", place: "pictures" },
  { id: "place-vids", name: "Videos", desc: "Videos folder", icon: "assets/places/folder-videos.png", place: "videos" },
  { id: "place-trash", name: "Trash", desc: "Deleted items", icon: "assets/places/user-trash.png", place: "trash" },
];

const RECENT_FILES = [
  { id: "rec1", name: "notes.txt", desc: "~/Documents", icon: "assets/mimetypes/text-x-generic.png" },
  { id: "rec2", name: "budget.ods", desc: "~/Documents", icon: "assets/apps/org.libreoffice.LibreOffice.calc.png" },
  { id: "rec3", name: "photo.jpg", desc: "~/Pictures", icon: "assets/thumbnails/photo.jpg" },
];

const FS = {
  home: {
    label: "Home",
    icon: "assets/places/user-home.png",
    items: [
      { name: "Desktop", icon: "assets/places/user-desktop.png", type: "folder", place: "desktop", size: "—", modified: "Today" },
      { name: "Documents", icon: "assets/places/folder-documents.png", type: "folder", place: "documents", size: "—", modified: "Yesterday" },
      { name: "Downloads", icon: "assets/places/folder-download.png", type: "folder", place: "downloads", size: "—", modified: "Today" },
      { name: "Music", icon: "assets/places/folder-music.png", type: "folder", place: "music", size: "—", modified: "12 Jul 2026" },
      { name: "Pictures", icon: "assets/places/folder-pictures.png", type: "folder", place: "pictures", size: "—", modified: "10 Jul 2026" },
      { name: "Public", icon: "assets/places/folder-publicshare.png", type: "folder", place: "public", size: "—", modified: "1 Jul 2026" },
      { name: "Templates", icon: "assets/places/folder-templates.png", type: "folder", place: "templates", size: "—", modified: "1 Jul 2026" },
      { name: "Videos", icon: "assets/places/folder-videos.png", type: "folder", place: "videos", size: "—", modified: "5 Jul 2026" },
    ],
  },
  desktop: {
    label: "Desktop",
    icon: "assets/places/user-desktop.png",
    items: [
      { name: "Home", icon: "assets/places/user-home.png", type: "folder", place: "home", size: "—", modified: "Today" },
    ],
  },
  documents: {
    label: "Documents",
    icon: "assets/places/folder-documents.png",
    items: [
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.png", type: "file", size: "2.1 kB", modified: "Today" },
      { name: "budget.ods", icon: "assets/apps/org.libreoffice.LibreOffice.calc.png", type: "file", size: "48 kB", modified: "Yesterday" },
      { name: "report.odt", icon: "assets/apps/org.libreoffice.LibreOffice.writer.png", type: "file", size: "112 kB", modified: "8 Jul 2026" },
    ],
  },
  downloads: {
    label: "Downloads",
    icon: "assets/places/folder-download.png",
    items: [
      { name: "linuxmint.iso", icon: "assets/places/drive-harddisk.png", type: "file", size: "2.8 GB", modified: "Today" },
      { name: "readme.pdf", icon: "assets/mimetypes/application-pdf.png", type: "file", size: "340 kB", modified: "Yesterday" },
    ],
  },
  music: {
    label: "Music",
    icon: "assets/places/folder-music.png",
    items: [
      { name: "Playlist", icon: "assets/places/folder.png", type: "folder", size: "—", modified: "1 Jun 2026" },
    ],
  },
  pictures: {
    label: "Pictures",
    icon: "assets/places/folder-pictures.png",
    items: [
      { name: "Vacation", icon: "assets/places/folder.png", type: "folder", size: "—", modified: "20 Jun 2026" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file", size: "3.4 MB", modified: "10 Jul 2026" },
    ],
  },
  videos: {
    label: "Videos",
    icon: "assets/places/folder-videos.png",
    items: [],
  },
  public: {
    label: "Public",
    icon: "assets/places/folder-publicshare.png",
    items: [],
  },
  templates: {
    label: "Templates",
    icon: "assets/places/folder-templates.png",
    items: [],
  },
  trash: {
    label: "Trash",
    icon: "assets/places/user-trash.png",
    items: [],
  },
  computer: {
    label: "Computer",
    icon: "assets/places/drive-harddisk.png",
    items: [
      { name: "Filesystem", icon: "assets/places/drive-harddisk.png", type: "folder", place: "home", size: "—", modified: "—" },
    ],
  },
};

/** Nemo sidebar — symbolic place emblems (GTK/Nemo style, not full-color icons) */
const NEMO_MY_COMPUTER = [
  { id: "home", label: "Home", icon: "assets/places/user-home-symbolic.svg" },
  { id: "desktop", label: "Desktop", icon: "assets/places/user-desktop-symbolic.svg" },
  { id: "documents", label: "Documents", icon: "assets/places/folder-documents-symbolic.svg" },
  { id: "music", label: "Music", icon: "assets/places/folder-music-symbolic.svg" },
  { id: "pictures", label: "Pictures", icon: "assets/places/folder-pictures-symbolic.svg" },
  { id: "videos", label: "Videos", icon: "assets/places/folder-videos-symbolic.svg" },
  { id: "downloads", label: "Downloads", icon: "assets/places/folder-download-symbolic.svg" },
  { id: "recent", label: "Recent", icon: "assets/places/document-open-recent-symbolic.svg" },
  { id: "computer", label: "File System", icon: "assets/places/drive-harddisk-symbolic.svg" },
  { id: "trash", label: "Trash", icon: "assets/places/user-trash-symbolic.svg" },
];

const NEMO_NETWORK = [
  { id: "network", label: "Network", icon: "assets/places/network-workgroup-symbolic.svg" },
];

/* ---------- DOM ---------- */

const desktop = document.getElementById("desktop");
const menuBtn = document.getElementById("menu-btn");
const appMenu = document.getElementById("app-menu");
const menuSearch = document.getElementById("menu-search");
const menuFavorites = document.getElementById("menu-favorites");
const menuPlaces = document.getElementById("menu-places");
const menuCategories = document.getElementById("menu-categories");
const menuApps = document.getElementById("menu-apps");
const menuEmpty = document.getElementById("menu-empty");

const clockBtn = document.getElementById("clock-btn");
const clockText = document.getElementById("clock-text");
const calendarPopover = document.getElementById("calendar-popover");
const calWeekday = document.getElementById("cal-weekday");
const calFullDate = document.getElementById("cal-full-date");
const calMonthLabel = document.getElementById("cal-month-label");
const calGrid = document.getElementById("cal-grid");
const calPrev = document.getElementById("cal-prev");
const calNext = document.getElementById("cal-next");

const soundBtn = document.getElementById("sound-btn");
const soundPopover = document.getElementById("sound-popover");
const volumeSlider = document.getElementById("volume-slider");
const volumePct = document.getElementById("volume-pct");

const netBtn = document.getElementById("net-btn");
const netPopover = document.getElementById("net-popover");
const powerBtn = document.getElementById("power-btn");
const powerPopover = document.getElementById("power-popover");
const localsendBtn = document.getElementById("localsend-btn");
const localsendPopover = document.getElementById("localsend-popover");
const bluetoothBtn = document.getElementById("bluetooth-btn");
const bluetoothPopover = document.getElementById("bluetooth-popover");
const brightnessSlider = document.getElementById("brightness-slider");

const panelFiles = document.getElementById("panel-files");
const windowList = document.getElementById("window-list");
const showDesktopBtn = document.getElementById("show-desktop-btn");

const nemoWindow = document.getElementById("nemo-window");
const nemoClose = document.getElementById("nemo-close");
const nemoTitle = document.getElementById("nemo-title");
const nemoPathLabel = document.getElementById("nemo-path-label");
const nemoContent = document.getElementById("nemo-content");
const nemoSidebar = document.getElementById("nemo-sidebar");
const nemoStatus = document.getElementById("nemo-status");
const nemoSearchBtn = document.getElementById("nemo-search-btn");
const nemoSearchBar = document.getElementById("nemo-search-bar");
const nemoSearchInput = document.getElementById("nemo-search-input");
const nemoViewIcons = document.getElementById("nemo-view-icons");
const nemoViewList = document.getElementById("nemo-view-list");
const nemoBack = document.getElementById("nemo-back");
const nemoForward = document.getElementById("nemo-forward");
const nemoUp = document.getElementById("nemo-up");

let selectedCategory = "all";
let viewYear;
let viewMonth;
let nemoPlace = "home";
let nemoHistory = ["home"];
let nemoHistIndex = 0;
let nemoViewMode = "icons";
// desktopHidden declared with var near OPEN_WINDOWS for cross-script access

/* ---------- Clock (Cinnamon: time only by default on panel) ---------- */

function formatPanelClock(date) {
  const weekday = date.toLocaleDateString(undefined, { weekday: "short" });
  const time = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `${weekday} ${time}`;
}

function tickClock() {
  clockText.textContent = formatPanelClock(new Date());
}

tickClock();
setInterval(tickClock, 15_000);

/* ---------- Calendar (Sunday-first like Cinnamon default en_US) ---------- */

function setViewToToday() {
  const now = new Date();
  viewYear = now.getFullYear();
  viewMonth = now.getMonth();
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function buildCalendar() {
  const now = new Date();
  const todayY = now.getFullYear();
  const todayM = now.getMonth();
  const todayD = now.getDate();

  calWeekday.textContent = now.toLocaleDateString(undefined, { weekday: "long" });
  calFullDate.textContent = now.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const labelDate = new Date(viewYear, viewMonth, 1);
  calMonthLabel.textContent = labelDate.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  const firstDow = new Date(viewYear, viewMonth, 1).getDay(); // Sun=0
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();

  calGrid.innerHTML = "";
  const TOTAL = 42;

  for (let i = 0; i < TOTAL; i++) {
    const dayOffset = i - firstDow;
    const el = document.createElement("div");

    if (dayOffset < 0) {
      el.className = "cal-day muted";
      el.textContent = String(daysInPrev + dayOffset + 1);
    } else if (dayOffset < daysInMonth) {
      const d = dayOffset + 1;
      const isToday = d === todayD && viewMonth === todayM && viewYear === todayY;
      el.className = "cal-day" + (isToday ? " today" : "");
      el.textContent = String(d);
    } else {
      el.className = "cal-day muted";
      el.textContent = String(dayOffset - daysInMonth + 1);
    }
    calGrid.appendChild(el);
  }
}

setViewToToday();

/* ---------- Menu rendering ---------- */

function catIconHtml(cat) {
  if (cat.icon === "grid") {
    return `<span class="cat-glyph" aria-hidden="true">▦</span>`;
  }
  if (cat.icon === "star") {
    return `<img src="assets/places/starred-symbolic.svg" class="sym" alt="" draggable="false" />`;
  }
  if (cat.icon === "folder") {
    return `<img src="assets/places/folder-documents.png" alt="" draggable="false" />`;
  }
  if (cat.icon === "recent") {
    return `<img src="assets/places/folder-recent.png" alt="" draggable="false" />`;
  }
  return `<img src="${cat.icon}" alt="" draggable="false" />`;
}

function makeSideBtn(item, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "appmenu-side-btn";
  btn.title = item.name;
  btn.innerHTML = `<img src="${item.icon}" alt="" draggable="false" /><span>${item.name}</span>`;
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    onClick(item);
  });
  return btn;
}

function renderMenuPlaces() {
  if (!menuPlaces) return;
  menuPlaces.innerHTML = "";
  for (const place of MENU_PLACES) {
    menuPlaces.appendChild(
      makeSideBtn(place, (p) => {
        closeMenu();
        openNemo(p.place || "home");
      })
    );
  }
}

function renderFavorites() {
  menuFavorites.innerHTML = "";
  for (const fav of FAVORITES) {
    menuFavorites.appendChild(
      makeSideBtn(fav, (f) => {
        launchApp(f.id);
      })
    );
  }
}

function renderCategories() {
  menuCategories.innerHTML = "";
  for (const cat of CATEGORIES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "appmenu-cat" + (cat.id === selectedCategory ? " selected" : "");
    btn.dataset.category = cat.id;
    btn.setAttribute("role", "listitem");
    btn.innerHTML = `${catIconHtml(cat)}<span>${cat.name}</span>`;
    btn.addEventListener("mouseenter", () => {
      // Cinnamon default: category-hover switches category
      if (menuSearch.value.trim()) return;
      selectCategory(cat.id);
    });
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selectCategory(cat.id);
    });
    menuCategories.appendChild(btn);
  }
}

function selectCategory(id) {
  selectedCategory = id;
  menuCategories.querySelectorAll(".appmenu-cat").forEach((el) => {
    el.classList.toggle("selected", el.dataset.category === id);
  });
  renderMenuApps();
}

function getAppsForCategory(catId, filter = "") {
  const q = filter.trim().toLowerCase();

  if (catId === "favorites") {
    let list = FAVORITES.map((f) => {
      const app = APPS.find((a) => a.id === f.id);
      return app || { id: f.id, name: f.name, icon: f.icon, desc: "", categories: [] };
    });
    if (q) {
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          (a.desc && a.desc.toLowerCase().includes(q))
      );
    }
    return list;
  }
  if (catId === "recent") {
    let list = RECENT_FILES;
    if (q) list = list.filter((a) => a.name.toLowerCase().includes(q));
    return list.map((a) => ({ ...a, isRecent: true }));
  }

  let list = APPS.filter((a) => a.categories.includes(catId === "all" ? "all" : catId));
  if (q) {
    list = APPS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        (a.desc && a.desc.toLowerCase().includes(q))
    );
  }
  if (catId === "all" || q) {
    list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  }
  return list;
}

function renderMenuApps(filter) {
  const q = filter !== undefined ? filter : menuSearch.value;
  const list = getAppsForCategory(selectedCategory, q);

  menuApps.innerHTML = "";
  menuEmpty.hidden = list.length > 0;

  for (const app of list) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "appmenu-app";
    btn.setAttribute("role", "listitem");
    btn.title = app.name;
    btn.innerHTML = `
      <img src="${app.icon}" alt="" draggable="false" />
      <span class="appmenu-app-text">
        <span class="appmenu-app-name">${app.name}</span>
        ${app.desc ? `<span class="appmenu-app-desc">${app.desc}</span>` : ""}
      </span>
    `;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (app.isPlace) {
        closeMenu();
        openNemo(app.place || "home");
        return;
      }
      if (app.isRecent) {
        closeMenu();
        return;
      }
      launchApp(app.id);
    });
    menuApps.appendChild(btn);
  }
}

function launchApp(id) {
  closeMenu();
  if (id === "files") {
    openNemo("home");
    return;
  }
  if (id === "software") {
    openSoftware();
    return;
  }
  if (id === "settings") {
    openSettings();
    return;
  }
  // Visual feedback only for other apps
  const panelApp = document.querySelector(`.panel-app[data-app="${id}"]`);
  if (panelApp) {
    panelApp.classList.add("running");
    setTimeout(() => {
      if (id !== "files") panelApp.classList.remove("running");
    }, 400);
  }
}

/* ---------- Panel popovers ---------- */

function setExpanded(btn, open) {
  if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
}

function closeMenu() {
  appMenu.hidden = true;
  appMenu.classList.remove("open");
  setExpanded(menuBtn, false);
  menuSearch.value = "";
  selectedCategory = "all";
  renderCategories();
  renderMenuApps("");
}

function openMenu() {
  closeApplets();
  appMenu.hidden = false;
  appMenu.classList.add("open");
  setExpanded(menuBtn, true);
  selectedCategory = "all";
  renderCategories();
  renderMenuApps("");
  requestAnimationFrame(() => menuSearch.focus());
}

function toggleMenu() {
  if (appMenu.hidden || !appMenu.classList.contains("open")) openMenu();
  else closeMenu();
}

function closeApplets() {
  calendarPopover.hidden = true;
  soundPopover.hidden = true;
  netPopover.hidden = true;
  powerPopover.hidden = true;
  if (localsendPopover) localsendPopover.hidden = true;
  if (bluetoothPopover) bluetoothPopover.hidden = true;
  setExpanded(clockBtn, false);
  setExpanded(soundBtn, false);
  setExpanded(netBtn, false);
  setExpanded(powerBtn, false);
  setExpanded(localsendBtn, false);
  setExpanded(bluetoothBtn, false);
}

function closeAll() {
  closeMenu();
  closeApplets();
}

function togglePopover(popover, btn) {
  const wasOpen = !popover.hidden;
  closeMenu();
  closeApplets();
  if (!wasOpen) {
    popover.hidden = false;
    setExpanded(btn, true);
    if (popover === calendarPopover) {
      setViewToToday();
      buildCalendar();
    }
  }
}

/* ---------- Nemo ---------- */

/** Open app windows for the panel window-list */
const OPEN_WINDOWS = {
  files: {
    el: () => nemoWindow,
    title: () => FS[nemoPlace]?.label || "Home",
    icon: "assets/apps/nemo.png",
  },
  software: {
    el: () => document.getElementById("software-window"),
    title: () => "Software Manager",
    icon: "assets/apps/software-manager.svg",
  },
  settings: {
    el: () => document.getElementById("settings-window"),
    title: () => "System Settings",
    icon: "assets/menu/preferences-desktop.svg",
  },
};

// var so software-settings.js (separate classic script) can read/write it
var focusedWindowId = null;
var desktopHidden = false;

function focusWindow(id) {
  focusedWindowId = id;
  Object.keys(OPEN_WINDOWS).forEach((key) => {
    const el = OPEN_WINDOWS[key].el();
    if (!el) return;
    el.classList.toggle("is-focused", key === id && !el.hidden);
  });
  updateWindowList();
}

function updateWindowList() {
  windowList.innerHTML = "";
  if (panelFiles) panelFiles.classList.remove("running", "active");

  for (const [id, meta] of Object.entries(OPEN_WINDOWS)) {
    const el = meta.el();
    if (!el || el.hidden) continue;
    const minimized = el.style.visibility === "hidden";
    const active = focusedWindowId === id && !minimized;

    if (id === "files" && panelFiles) {
      panelFiles.classList.add("running");
      if (active) panelFiles.classList.add("active");
    }

    const item = document.createElement("button");
    item.type = "button";
    item.className = "window-list-item" + (active ? " active" : "");
    item.innerHTML = `
      <img src="${meta.icon}" alt="" draggable="false" />
      <span>${meta.title()}</span>
    `;
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      if (minimized) {
        el.style.visibility = "";
        focusWindow(id);
      } else if (focusedWindowId === id) {
        el.style.visibility = "hidden";
        focusedWindowId = null;
        updateWindowList();
      } else {
        focusWindow(id);
      }
    });
    windowList.appendChild(item);
  }
}

function makeNemoSideSection(title, items) {
  const sec = document.createElement("div");
  sec.className = "nemo-side-section";

  const heading = document.createElement("button");
  heading.type = "button";
  heading.className = "nemo-side-heading";
  heading.innerHTML = `<span class="nemo-tree-twist" aria-hidden="true">▾</span><span>${title}</span>`;
  heading.addEventListener("click", (e) => {
    e.stopPropagation();
    sec.classList.toggle("collapsed");
  });
  sec.appendChild(heading);

  const list = document.createElement("div");
  list.className = "nemo-side-items";
  for (const p of items) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nemo-side-item" + (p.id === nemoPlace ? " active" : "");
    btn.innerHTML = `<img src="${p.icon}" alt="" draggable="false" /><span>${p.label}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (p.id === "network" || p.id === "recent") return;
      navigateNemo(p.id, true);
    });
    list.appendChild(btn);
  }
  sec.appendChild(list);
  return sec;
}

function renderNemoSidebar() {
  nemoSidebar.innerHTML = "";
  nemoSidebar.appendChild(makeNemoSideSection("My Computer", NEMO_MY_COMPUTER));
  nemoSidebar.appendChild(makeNemoSideSection("Network", NEMO_NETWORK));
}

function renderNemoContent(filter = "") {
  const folder = FS[nemoPlace] || FS.home;
  const q = filter.trim().toLowerCase();
  let items = folder.items || [];
  if (q) items = items.filter((i) => i.name.toLowerCase().includes(q));

  // Preserve list header
  const header = nemoContent.querySelector(".nemo-list-header");
  nemoContent.innerHTML = "";
  if (header) nemoContent.appendChild(header);
  else {
    const h = document.createElement("div");
    h.className = "nemo-list-header";
    h.setAttribute("aria-hidden", "true");
    h.innerHTML = "<span></span><span>Name</span><span>Size</span><span>Modified</span>";
    nemoContent.appendChild(h);
  }

  for (const item of items) {
    const el = document.createElement("div");
    el.className = "nemo-item";
    el.setAttribute("role", "listitem");
    el.tabIndex = 0;
    el.innerHTML = `
      <img src="${item.icon}" alt="" draggable="false" />
      <span class="nemo-item-name">${item.name}</span>
      <span class="nemo-item-meta">${item.size || "—"}</span>
      <span class="nemo-item-meta">${item.modified || "—"}</span>
    `;
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      nemoContent.querySelectorAll(".nemo-item").forEach((n) => n.classList.remove("selected"));
      el.classList.add("selected");
    });
    el.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      if (item.type === "folder" && item.place) {
        navigateNemo(item.place, true);
      }
    });
    nemoContent.appendChild(el);
  }

  const count = items.length;
  nemoStatus.textContent = count === 1 ? "1 item" : `${count} items`;
  if (count === 0 && folder.items?.length === 0) {
    nemoStatus.textContent = "Empty folder";
  }
}

function updateNemoNav() {
  const folder = FS[nemoPlace] || FS.home;
  nemoTitle.textContent = folder.label;
  nemoPathLabel.textContent = folder.label;
  const titleIcon = nemoWindow.querySelector(".nemo-title-icon");
  if (titleIcon) titleIcon.src = folder.icon;
  const crumbIcon = nemoWindow.querySelector(".nemo-crumb img");
  if (crumbIcon) crumbIcon.src = folder.icon;

  nemoBack.disabled = nemoHistIndex <= 0;
  nemoForward.disabled = nemoHistIndex >= nemoHistory.length - 1;
  nemoUp.disabled = nemoPlace === "home" || nemoPlace === "computer";

  renderNemoSidebar();
  renderNemoContent(nemoSearchInput.value);
  updateWindowList();
}

function navigateNemo(place, pushHistory) {
  if (!FS[place]) place = "home";
  nemoPlace = place;
  if (pushHistory) {
    nemoHistory = nemoHistory.slice(0, nemoHistIndex + 1);
    nemoHistory.push(place);
    nemoHistIndex = nemoHistory.length - 1;
  }
  updateNemoNav();
}

function openNemo(place = "home") {
  closeAll();
  nemoWindow.hidden = false;
  nemoWindow.style.visibility = "";
  desktopHidden = false;
  nemoWindow.classList.remove("maximized");
  if (place !== nemoPlace || nemoHistory.length === 0) {
    nemoHistory = [place];
    nemoHistIndex = 0;
    nemoPlace = place;
  }
  updateNemoNav();
  focusWindow("files");
}

function closeNemo() {
  nemoWindow.hidden = true;
  nemoWindow.style.visibility = "";
  nemoWindow.classList.remove("maximized");
  if (focusedWindowId === "files") focusedWindowId = null;
  updateWindowList();
}

function toggleNemo() {
  if (nemoWindow.hidden) openNemo(nemoPlace || "home");
  else if (nemoWindow.style.visibility === "hidden") {
    nemoWindow.style.visibility = "";
    updateWindowList();
  } else closeNemo();
}

function setNemoView(mode) {
  nemoViewMode = mode;
  nemoContent.classList.toggle("view-icons", mode === "icons");
  nemoContent.classList.toggle("view-list", mode === "list");
  nemoViewIcons.classList.toggle("active", mode === "icons");
  nemoViewList.classList.toggle("active", mode === "list");
  nemoViewIcons.setAttribute("aria-pressed", mode === "icons" ? "true" : "false");
  nemoViewList.setAttribute("aria-pressed", mode === "list" ? "true" : "false");
}

/* ---------- Volume ---------- */

function updateVolumeFill() {
  if (!volumeSlider) return;
  const pct = Number(volumeSlider.value);
  volumeSlider.style.setProperty("--fill", `${pct}%`);
  if (volumePct) volumePct.textContent = `${pct}%`;
  const icon = document.getElementById("sound-panel-icon");
  const popIcon = soundPopover?.querySelector(".sound-icon");
  const muted = pct === 0;
  const src = muted
    ? "assets/status/popover/audio-volume-muted.png"
    : "assets/status/panel-sound.png";
  if (icon) icon.src = muted ? src : "assets/status/panel-sound.png";
  if (popIcon) popIcon.src = muted ? "assets/status/popover/audio-volume-muted.png" : "assets/status/popover/audio-volume-medium.png";
}

function updateBrightnessFill() {
  if (!brightnessSlider) return;
  const pct = Number(brightnessSlider.value);
  brightnessSlider.style.setProperty("--fill", `${pct}%`);
}

/* ---------- Event wiring ---------- */

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

appMenu.addEventListener("click", (e) => e.stopPropagation());

menuSearch.addEventListener("input", () => {
  if (menuSearch.value.trim()) {
    // Search across all apps
    selectedCategory = "all";
    menuCategories.querySelectorAll(".appmenu-cat").forEach((el) => {
      el.classList.toggle("selected", el.dataset.category === "all");
    });
  }
  renderMenuApps();
});

menuSearch.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (menuSearch.value) {
      menuSearch.value = "";
      renderMenuApps("");
    } else closeMenu();
  }
});

clockBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(calendarPopover, clockBtn);
});

soundBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(soundPopover, soundBtn);
});

netBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(netPopover, netBtn);
});

powerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(powerPopover, powerBtn);
});

localsendBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(localsendPopover, localsendBtn);
});

bluetoothBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(bluetoothPopover, bluetoothBtn);
});

document.getElementById("updates-btn")?.addEventListener("click", (e) => {
  e.stopPropagation();
  closeApplets();
  // Preview: Update Manager would open — no full app window in mockup
});

[calendarPopover, soundPopover, netPopover, powerPopover, localsendPopover, bluetoothPopover]
  .filter(Boolean)
  .forEach((el) => {
    el.addEventListener("click", (e) => e.stopPropagation());
  });

document.querySelectorAll(".batt-profile").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".batt-profile").forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-checked", b === btn ? "true" : "false");
    });
  });
});

document.getElementById("net-wifi-toggle")?.addEventListener("click", (e) => {
  e.stopPropagation();
  const t = e.currentTarget;
  const on = t.getAttribute("aria-checked") !== "true";
  t.setAttribute("aria-checked", on ? "true" : "false");
});

document.querySelectorAll(".net-wifi-item:not(.net-wifi-more)").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".net-wifi-item").forEach((el) => {
      el.classList.remove("active");
      const radio = el.querySelector(".net-wifi-radio");
      if (radio) radio.classList.add("empty");
    });
    item.classList.add("active");
    const radio = item.querySelector(".net-wifi-radio");
    if (radio) radio.classList.remove("empty");
  });
});

calPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth -= 1;
  if (viewMonth < 0) {
    viewMonth = 11;
    viewYear -= 1;
  }
  buildCalendar();
});

calNext.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth += 1;
  if (viewMonth > 11) {
    viewMonth = 0;
    viewYear += 1;
  }
  buildCalendar();
});

volumeSlider?.addEventListener("input", updateVolumeFill);
updateVolumeFill();
brightnessSlider?.addEventListener("input", updateBrightnessFill);
updateBrightnessFill();

// Panel launchers
document.querySelectorAll(".panel-app[data-app]").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const app = item.dataset.app;
    if (app === "files") {
      toggleNemo();
      return;
    }
    item.classList.add("running");
    setTimeout(() => item.classList.remove("running"), 350);
  });
});

// Desktop icons
document.querySelectorAll(".desk-icon").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".desk-icon").forEach((d) => d.classList.remove("selected"));
    icon.classList.add("selected");
  });
  icon.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    openNemo(icon.dataset.place || "home");
  });
});

// Show desktop (corner bar)
showDesktopBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  desktopHidden = !desktopHidden;
  if (!nemoWindow.hidden) {
    nemoWindow.style.visibility = desktopHidden ? "hidden" : "";
    updateWindowList();
  }
});

// Nemo chrome
nemoClose.addEventListener("click", (e) => {
  e.stopPropagation();
  closeNemo();
});

document.getElementById("nemo-max")?.addEventListener("click", (e) => {
  e.stopPropagation();
  nemoWindow.classList.toggle("maximized");
});

document.getElementById("nemo-min")?.addEventListener("click", (e) => {
  e.stopPropagation();
  nemoWindow.style.visibility = "hidden";
  if (focusedWindowId === "files") focusedWindowId = null;
  updateWindowList();
});

nemoWindow.addEventListener("click", (e) => e.stopPropagation());

nemoSearchBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = nemoSearchBar.hidden;
  nemoSearchBar.hidden = !open;
  nemoSearchBtn.classList.toggle("active", open);
  nemoSearchBtn.setAttribute("aria-pressed", open ? "true" : "false");
  if (open) nemoSearchInput.focus();
  else {
    nemoSearchInput.value = "";
    renderNemoContent();
  }
});

nemoSearchInput.addEventListener("input", () => {
  renderNemoContent(nemoSearchInput.value);
});

nemoViewIcons.addEventListener("click", (e) => {
  e.stopPropagation();
  setNemoView("icons");
});

nemoViewList.addEventListener("click", (e) => {
  e.stopPropagation();
  setNemoView("list");
});

nemoBack.addEventListener("click", (e) => {
  e.stopPropagation();
  if (nemoHistIndex > 0) {
    nemoHistIndex -= 1;
    nemoPlace = nemoHistory[nemoHistIndex];
    updateNemoNav();
  }
});

nemoForward.addEventListener("click", (e) => {
  e.stopPropagation();
  if (nemoHistIndex < nemoHistory.length - 1) {
    nemoHistIndex += 1;
    nemoPlace = nemoHistory[nemoHistIndex];
    updateNemoNav();
  }
});

nemoUp.addEventListener("click", (e) => {
  e.stopPropagation();
  if (nemoPlace !== "home" && nemoPlace !== "computer") {
    navigateNemo("home", true);
  }
});

document.getElementById("nemo-refresh")?.addEventListener("click", (e) => {
  e.stopPropagation();
  renderNemoContent(nemoSearchInput.value);
});

// Click outside closes menus (not Nemo)
document.addEventListener("click", () => {
  if (typeof startOverlay !== "undefined" && startOverlay && !startOverlay.hidden) return;
  closeAll();
  document.querySelectorAll(".desk-icon").forEach((d) => d.classList.remove("selected"));
});

// Keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (typeof startOverlay !== "undefined" && startOverlay && !startOverlay.hidden) {
      /* Keep overlay until they choose fullscreen or continue */
      return;
    }
    if (!appMenu.hidden) {
      closeMenu();
      return;
    }
    if (
      !calendarPopover.hidden ||
      !soundPopover.hidden ||
      !netPopover.hidden ||
      !powerPopover.hidden
    ) {
      closeApplets();
      return;
    }
    if (!nemoWindow.hidden && !nemoSearchBar.hidden) {
      nemoSearchBar.hidden = true;
      nemoSearchBtn.classList.remove("active");
      nemoSearchInput.value = "";
      renderNemoContent();
      return;
    }
  }

  // Super key opens menu (when not typing in an input)
  if (
    (e.key === "Meta" || e.key === "OS") &&
    document.activeElement?.tagName !== "INPUT"
  ) {
    e.preventDefault();
    toggleMenu();
  }
});

/* ---------- Start overlay / fullscreen ---------- */

const startOverlay = document.getElementById("start-overlay");
const startFullscreenBtn = document.getElementById("start-fullscreen-btn");
const startSkipBtn = document.getElementById("start-skip-btn");

function dismissStartOverlay() {
  if (startOverlay) startOverlay.hidden = true;
}

async function enterFullscreenPreview() {
  const target = document.documentElement;
  try {
    if (target.requestFullscreen) await target.requestFullscreen();
    else if (target.webkitRequestFullscreen) await target.webkitRequestFullscreen();
    else if (target.msRequestFullscreen) await target.msRequestFullscreen();
  } catch {
    /* Browser denied or unsupported — still enter the mockup */
  }
  dismissStartOverlay();
}

if (startFullscreenBtn) {
  startFullscreenBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    enterFullscreenPreview();
  });
}

if (startSkipBtn) {
  startSkipBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dismissStartOverlay();
  });
}

if (startOverlay) {
  startOverlay.addEventListener("click", (e) => e.stopPropagation());
  startOverlay.querySelector(".start-overlay-card")?.addEventListener("click", (e) => e.stopPropagation());
}

/* ---------- Init ---------- */

renderMenuPlaces();
renderFavorites();
renderCategories();
renderMenuApps();
setNemoView("icons");
