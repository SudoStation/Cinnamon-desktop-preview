/**
 * Cinnamon desktop preview — interactive shell
 * Layout modelled on Linux Mint Cinnamon + Mint-Y-Dark
 */

/* ---------- App / category data ---------- */

const FAVORITES = [
  { id: "firefox", name: "Firefox", icon: "assets/apps/firefox.svg" },
  { id: "software", name: "Software Manager", icon: "assets/apps/software-manager.svg" },
  { id: "terminal", name: "Terminal", icon: "assets/apps/terminal.svg" },
  { id: "files", name: "Files", icon: "assets/apps/nemo.png" },
];

const CATEGORIES = [
  { id: "all", name: "All Applications", icon: "grid" },
  { id: "accessories", name: "Accessories", icon: "assets/menu/applications-accessories.svg" },
  { id: "graphics", name: "Graphics", icon: "assets/menu/applications-graphics.svg" },
  { id: "internet", name: "Internet", icon: "assets/menu/applications-internet.svg" },
  { id: "office", name: "Office", icon: "assets/menu/applications-office.svg" },
  { id: "multimedia", name: "Sound & Video", icon: "assets/menu/applications-multimedia.svg" },
  { id: "admin", name: "Administration", icon: "assets/menu/cs-cat-admin.svg" },
  { id: "prefs", name: "Preferences", icon: "assets/menu/preferences-desktop.svg" },
  { id: "places", name: "Places", icon: "folder" },
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

const SIDEBAR_PLACES = [
  { id: "home", label: "Home", icon: "assets/places/user-home.png" },
  { id: "desktop", label: "Desktop", icon: "assets/places/user-desktop.png" },
  { id: "documents", label: "Documents", icon: "assets/places/folder-documents.png" },
  { id: "downloads", label: "Downloads", icon: "assets/places/folder-download.png" },
  { id: "music", label: "Music", icon: "assets/places/folder-music.png" },
  { id: "pictures", label: "Pictures", icon: "assets/places/folder-pictures.png" },
  { id: "videos", label: "Videos", icon: "assets/places/folder-videos.png" },
  { id: "trash", label: "Trash", icon: "assets/places/user-trash.png" },
];

/* ---------- DOM ---------- */

const desktop = document.getElementById("desktop");
const menuBtn = document.getElementById("menu-btn");
const appMenu = document.getElementById("app-menu");
const menuSearch = document.getElementById("menu-search");
const menuFavorites = document.getElementById("menu-favorites");
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
let desktopHidden = false;

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
  if (cat.icon === "folder") {
    return `<img src="assets/places/folder-documents.png" alt="" draggable="false" />`;
  }
  if (cat.icon === "recent") {
    return `<img src="assets/places/document-open-recent-symbolic.svg" class="sym" alt="" draggable="false" />`;
  }
  return `<img src="${cat.icon}" alt="" draggable="false" />`;
}

function renderFavorites() {
  menuFavorites.innerHTML = "";
  for (const fav of FAVORITES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "appmenu-fav-btn";
    btn.title = fav.name;
    btn.innerHTML = `<img src="${fav.icon}" alt="" draggable="false" />`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      launchApp(fav.id);
    });
    menuFavorites.appendChild(btn);
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

  if (catId === "places") {
    let list = PLACES_APPS;
    if (q) list = list.filter((a) => a.name.toLowerCase().includes(q));
    return list.map((a) => ({ ...a, isPlace: true }));
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
  // Visual feedback only for other apps
  const panelApp = document.querySelector(`.panel-app[data-app="${id}"]`);
  if (panelApp) {
    panelApp.classList.add("running");
    setTimeout(() => {
      // leave firefox/terminal as "not running" unless we want permanent pin look
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
  setExpanded(clockBtn, false);
  setExpanded(soundBtn, false);
  setExpanded(netBtn, false);
  setExpanded(powerBtn, false);
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

function updateWindowList() {
  windowList.innerHTML = "";
  if (nemoWindow.hidden) {
    panelFiles.classList.remove("running", "active");
    return;
  }
  panelFiles.classList.add("running", "active");

  const item = document.createElement("button");
  item.type = "button";
  item.className = "window-list-item active";
  item.innerHTML = `
    <img src="assets/apps/nemo.png" alt="" draggable="false" />
    <span>${FS[nemoPlace]?.label || "Home"}</span>
  `;
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    // Toggle minimize simulation
    if (nemoWindow.style.visibility === "hidden") {
      nemoWindow.style.visibility = "";
      item.classList.add("active");
      panelFiles.classList.add("active");
    } else {
      nemoWindow.style.visibility = "hidden";
      item.classList.remove("active");
      panelFiles.classList.remove("active");
    }
  });
  windowList.appendChild(item);
}

function renderNemoSidebar() {
  nemoSidebar.innerHTML = "";

  const placesSec = document.createElement("div");
  placesSec.className = "nemo-side-section";
  placesSec.innerHTML = `<div class="nemo-side-label">Places</div>`;
  for (const p of SIDEBAR_PLACES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nemo-side-item" + (p.id === nemoPlace ? " active" : "");
    btn.innerHTML = `<img src="${p.icon}" alt="" draggable="false" /><span>${p.label}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateNemo(p.id, true);
    });
    placesSec.appendChild(btn);
  }
  nemoSidebar.appendChild(placesSec);

  const devices = document.createElement("div");
  devices.className = "nemo-side-section";
  devices.innerHTML = `
    <div class="nemo-side-label">Devices</div>
    <button type="button" class="nemo-side-item" data-place="computer">
      <img src="assets/places/drive-harddisk.png" alt="" draggable="false" />
      <span>File System</span>
    </button>
  `;
  devices.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    navigateNemo("computer", true);
  });
  nemoSidebar.appendChild(devices);
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
}

function closeNemo() {
  nemoWindow.hidden = true;
  nemoWindow.style.visibility = "";
  nemoWindow.classList.remove("maximized");
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
  const pct = Number(volumeSlider.value);
  volumePct.textContent = `${pct}%`;
  volumeSlider.style.background = `linear-gradient(to right, var(--accent) ${pct}%, rgba(255,255,255,0.15) ${pct}%)`;
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

[calendarPopover, soundPopover, netPopover, powerPopover].forEach((el) => {
  el.addEventListener("click", (e) => e.stopPropagation());
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

volumeSlider.addEventListener("input", updateVolumeFill);
updateVolumeFill();

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

nemoWindow.querySelector(".nemo-max")?.addEventListener("click", (e) => {
  e.stopPropagation();
  nemoWindow.classList.toggle("maximized");
});

nemoWindow.querySelector(".nemo-min")?.addEventListener("click", (e) => {
  e.stopPropagation();
  nemoWindow.style.visibility = "hidden";
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
  closeAll();
  document.querySelectorAll(".desk-icon").forEach((d) => d.classList.remove("selected"));
});

// Keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
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

/* ---------- Init ---------- */

renderFavorites();
renderCategories();
renderMenuApps();
setNemoView("icons");
