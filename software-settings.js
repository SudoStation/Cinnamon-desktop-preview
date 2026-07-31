/**
 * Software Manager = GNOME App Center UI (ported from GNOME mockup)
 * System Settings = live Cinnamon cinnamon-settings layout
 */
(function () {
  "use strict";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatSizeMB(mb) {
    if (mb >= 1024) return `${(mb / 1024).toFixed(1)} GB`;
    return `${Math.round(mb)} MB`;
  }

const FLATHUB_APPS = [
  {
    id: "org.mozilla.firefox",
    name: "Firefox",
    summary: "Fast, Private & Safe Web Browser",
    description:
      "When it comes to your life online, you have a choice: accept the factory settings or put your privacy first. When you choose Firefox as your default browser, you're choosing to protect your data while supporting an independent tech company. Firefox is also the only major browser backed by a non-profit fighting to give you more openness, transparency and control of your life online.",
    developer: "Mozilla",
    verified: true,
    free: true,
    license: "MPL-2.0",
    version: "153.0.1",
    categories: ["network", "create"],
    icon: "assets/flathub/org.mozilla.firefox.png",
    downloadSizeMB: 248,
    installedSizeMB: 312,
    safety: { title: "Safe", desc: "Auditable code, sandbox, few permissions", level: "ok" },
    age: "3+",
    brand: "#ff7139",
    featured: true,
    editors: true,
  },
  {
    id: "com.discordapp.Discord",
    name: "Discord",
    summary: "Talk, play, hang out",
    description:
      "Discord is a free all-in-one messaging, voice, and video client available on your computer and phone. Whether you're part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Discord makes it easy to talk every day.",
    developer: "Discord Inc.",
    verified: true,
    free: false,
    license: "Proprietary",
    version: "1.0.151",
    categories: ["socialize", "network"],
    icon: "assets/flathub/com.discordapp.Discord.png",
    downloadSizeMB: 172,
    installedSizeMB: 265,
    safety: { title: "Potentially Unsafe", desc: "Proprietary, network access, broad permissions", level: "warn" },
    age: "13+",
    brand: "#5865f2",
    popular: true,
  },
  {
    id: "com.google.Chrome",
    name: "Google Chrome",
    summary: "The browser built to be yours",
    description:
      "Google Chrome is a browser that combines a minimal design with sophisticated technology to make the web faster, safer, and easier.",
    developer: "Google",
    verified: false,
    free: false,
    license: "Proprietary",
    version: "150.0.7871.186",
    categories: ["network"],
    icon: "assets/flathub/com.google.Chrome.png",
    downloadSizeMB: 285,
    installedSizeMB: 380,
    safety: { title: "Potentially Unsafe", desc: "Proprietary, network access, broad permissions", level: "warn" },
    age: "3+",
    brand: "#4285f4",
    popular: true,
  },
  {
    id: "com.brave.Browser",
    name: "Brave",
    summary: "Fast Internet, AI, Adblock",
    description:
      "Brave is on a mission to fix the web by giving users a safer, faster and better browsing experience while growing support for content creators through a new attention-based ecosystem of rewards. Browse faster by blocking ads and trackers that violate your privacy and slow you down.",
    developer: "Brave Software",
    verified: true,
    free: true,
    license: "MPL-2.0",
    version: "1.92.144",
    categories: ["network"],
    icon: "assets/flathub/com.brave.Browser.png",
    downloadSizeMB: 210,
    installedSizeMB: 290,
    safety: { title: "Safe", desc: "Open source core, sandbox, ad & tracker blocking", level: "ok" },
    age: "3+",
    brand: "#fb542b",
    popular: true,
  },
  {
    id: "com.usebottles.bottles",
    name: "Bottles",
    summary: "Run Windows software",
    description:
      "Bottles lets you run Windows software on Linux, such as applications and games. It introduces a workflow that helps you organize by categorizing each software to your liking. Bottles provides several tools and integrations to help you manage and optimize your applications.",
    developer: "The Bottles Contributors",
    verified: true,
    free: true,
    license: "GPL-3.0-only",
    version: "64.1",
    categories: ["play", "create", "work"],
    icon: "assets/flathub/com.usebottles.bottles.png",
    downloadSizeMB: 95,
    installedSizeMB: 140,
    safety: { title: "Safe", desc: "Auditable, sandbox, needs filesystem access for bottles", level: "ok" },
    age: "3+",
    brand: "#9281ff",
    featured: true,
    popular: true,
  },
  {
    id: "org.videolan.VLC",
    name: "VLC",
    summary: "VLC media player, the open-source multimedia player",
    description:
      "VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.",
    developer: "VideoLAN et al.",
    verified: false,
    free: true,
    license: "GPL-2.0+",
    version: "3.0.23",
    categories: ["play", "create"],
    icon: "assets/flathub/org.videolan.VLC.png",
    downloadSizeMB: 118,
    installedSizeMB: 165,
    safety: { title: "Safe", desc: "Auditable, sandbox, media device access", level: "ok" },
    age: "3+",
    brand: "#ff8800",
    popular: true,
    editors: true,
  },
  {
    id: "com.spotify.Client",
    name: "Spotify",
    summary: "Online music streaming service",
    description:
      "Access all of your favorite music, discover new songs, and share music online with your friends — all in one place. Create shared playlists or share individual songs with just a click of a button.",
    developer: "Spotify",
    verified: false,
    free: false,
    license: "Proprietary",
    version: "1.2.92",
    categories: ["play", "socialize"],
    icon: "assets/flathub/com.spotify.Client.png",
    downloadSizeMB: 155,
    installedSizeMB: 220,
    safety: { title: "Potentially Unsafe", desc: "Proprietary, network access, audio playback", level: "warn" },
    age: "3+",
    brand: "#1db954",
    popular: true,
  },
  {
    id: "com.valvesoftware.Steam",
    name: "Steam",
    summary: "Launcher for the Steam software distribution service",
    description:
      "Note: This is a community package of the Steam gaming platform not officially supported by Valve. Steam is a software distribution service with an online store, automated installation, automatic updates, achievements, Steam Cloud synchronized savegames and screenshot functionality.",
    developer: "Valve Corporation",
    verified: false,
    free: false,
    license: "Proprietary",
    version: "1.0.0.85",
    categories: ["play"],
    icon: "assets/flathub/com.valvesoftware.Steam.png",
    downloadSizeMB: 12,
    installedSizeMB: 18,
    safety: { title: "Potentially Unsafe", desc: "Proprietary, broad system and network access", level: "warn" },
    age: "13+",
    brand: "#1b2838",
    popular: true,
  },
  {
    id: "com.heroicgameslauncher.hgl",
    name: "Heroic",
    summary: "Play Epic, GOG and Amazon Games",
    description:
      "Heroic is an Open Source Games Launcher. Right now it supports launching games from the Epic Games Store using Legendary, GOG Games using a custom implementation with gogdl, and Amazon Games using Nile.",
    developer: "Heroic Games Launcher",
    verified: true,
    free: true,
    license: "GPL-3.0",
    version: "2.22.0",
    categories: ["play"],
    icon: "assets/flathub/com.heroicgameslauncher.hgl.png",
    downloadSizeMB: 185,
    installedSizeMB: 240,
    safety: { title: "Safe", desc: "Auditable, sandbox, needs filesystem for games", level: "ok" },
    age: "13+",
    brand: "#0e0e10",
    popular: true,
  },
  {
    id: "com.github.tchx84.Flatseal",
    name: "Flatseal",
    summary: "Manage Flatpak permissions",
    description:
      "Flatseal is a graphical utility to review and modify permissions from your Flatpak applications.",
    developer: "Martin Abente Lahaye",
    verified: true,
    free: true,
    license: "GPL-3.0-or-later",
    version: "2.4.1",
    categories: ["work", "develop"],
    icon: "assets/flathub/com.github.tchx84.Flatseal.png",
    downloadSizeMB: 8,
    installedSizeMB: 14,
    safety: { title: "Safe", desc: "Auditable, manages sandbox permissions only", level: "ok" },
    age: "3+",
    brand: "#62a0ea",
    editors: true,
  },
  {
    id: "com.obsproject.Studio",
    name: "OBS Studio",
    summary: "Live stream and record videos",
    description:
      "Free and open source software for video capturing, recording, and live streaming. High performance real-time video/audio capturing and mixing. Create scenes made up of multiple sources including window captures, images, text, browser windows, webcams, capture cards and more.",
    developer: "OBS Project",
    verified: true,
    free: true,
    license: "GPL-2.0-or-later",
    version: "32.2.1",
    categories: ["create", "play"],
    icon: "assets/flathub/com.obsproject.Studio.png",
    downloadSizeMB: 310,
    installedSizeMB: 480,
    safety: { title: "Safe", desc: "Auditable, needs camera, mic and desktop capture", level: "ok" },
    age: "3+",
    brand: "#302e31",
    featured: true,
    popular: true,
    editors: true,
  },
  {
    id: "org.telegram.desktop",
    name: "Telegram",
    summary: "New era of messaging",
    description:
      "Pure instant messaging — simple, fast, secure, and synced across all your devices. One of the world's top 10 most downloaded apps with over 500 million active users.",
    developer: "Telegram FZ-LLC",
    verified: true,
    free: true,
    license: "GPL-3.0",
    version: "7.0.6",
    categories: ["socialize", "network"],
    icon: "assets/flathub/org.telegram.desktop.png",
    downloadSizeMB: 95,
    installedSizeMB: 140,
    safety: { title: "Safe", desc: "Auditable client, network access, notifications", level: "ok" },
    age: "13+",
    brand: "#2aabee",
    popular: true,
  },
  {
    id: "org.gimp.GIMP",
    name: "GNU Image Manipulation Program",
    summary: "High-end image creation and manipulation",
    description:
      "GIMP is an acronym for GNU Image Manipulation Program. It is community-driven Free Software for high-end image creation and manipulation. It can be used as a paint program, an expert quality photo retouching program, an image format converter, and more.",
    developer: "The GIMP team",
    verified: true,
    free: true,
    license: "GPL-3.0+ AND LGPL-3.0+",
    version: "3.2.4",
    categories: ["create"],
    icon: "assets/flathub/org.gimp.GIMP.png",
    downloadSizeMB: 185,
    installedSizeMB: 320,
    safety: { title: "Safe", desc: "Auditable, sandbox, filesystem access for images", level: "ok" },
    age: "3+",
    brand: "#5c554b",
    featured: true,
    editors: true,
  },
  {
    id: "com.vscodium.codium",
    name: "VSCodium",
    summary: "Telemetry-less code editing",
    description:
      "VSCodium combines the simplicity of a code editor with what developers need for the core edit-build-debug cycle. This is the telemetry-less version of Visual Studio Code, packaged into a Flatpak. This repackaging is not supported by Microsoft.",
    developer: "The VSCodium team",
    verified: true,
    free: true,
    license: "MIT",
    version: "1.121.03429",
    categories: ["develop", "work"],
    icon: "assets/flathub/com.vscodium.codium.png",
    downloadSizeMB: 190,
    installedSizeMB: 330,
    safety: { title: "Safe", desc: "Auditable, no telemetry, sandbox", level: "ok" },
    age: "3+",
    brand: "#144d92",
    popular: true,
    editors: true,
  },
  {
    id: "md.obsidian.Obsidian",
    name: "Obsidian",
    summary: "Markdown-based knowledge base",
    description:
      "Obsidian is a powerful knowledge base that works on top of a local folder of plain text Markdown files. Making and following connections is frictionless, and you can explore all of your knowledge in the interactive graph view.",
    developer: "Obsidian",
    verified: true,
    free: false,
    license: "Proprietary",
    version: "1.12.7",
    categories: ["work", "learn"],
    icon: "assets/flathub/md.obsidian.Obsidian.png",
    downloadSizeMB: 145,
    installedSizeMB: 210,
    safety: { title: "Potentially Unsafe", desc: "Proprietary, local vault filesystem access", level: "warn" },
    age: "3+",
    brand: "#7c3aed",
    popular: true,
  },
  {
    id: "org.blender.Blender",
    name: "Blender",
    summary: "Free and open source 3D creation suite",
    description:
      "Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline — modeling, rigging, animation, simulation, rendering, compositing, motion tracking, and video editing.",
    developer: "Blender Foundation",
    verified: false,
    free: true,
    license: "GPL-3.0",
    version: "5.2",
    categories: ["create"],
    icon: "assets/flathub/org.blender.Blender.png",
    downloadSizeMB: 420,
    installedSizeMB: 980,
    safety: { title: "Safe", desc: "Auditable, sandbox, GPU and filesystem access", level: "ok" },
    age: "3+",
    brand: "#e87d0d",
    featured: true,
    editors: true,
  },
  {
    id: "org.inkscape.Inkscape",
    name: "Inkscape",
    summary: "Vector Graphics Editor",
    description:
      "A free and open source vector graphics editor. It offers a rich set of features and is widely used for both artistic and technical illustrations such as cartoons, clip art, logos, typography, diagramming and flowcharting.",
    developer: "The Inkscape Community",
    verified: true,
    free: true,
    license: "GPL-2.0-or-later",
    version: "1.4.4",
    categories: ["create"],
    icon: "assets/flathub/org.inkscape.Inkscape.png",
    downloadSizeMB: 165,
    installedSizeMB: 280,
    safety: { title: "Safe", desc: "Auditable, sandbox, filesystem access", level: "ok" },
    age: "3+",
    brand: "#000000",
    editors: true,
  },
  {
    id: "org.kde.krita",
    name: "Krita",
    summary: "Digital Painting, Creative Freedom",
    description:
      "Krita is the full-featured digital art studio. It is perfect for sketching and painting, and presents an end-to-end solution for creating digital painting files from scratch.",
    developer: "Krita Foundation",
    verified: true,
    free: true,
    license: "GPL-3.0-only",
    version: "5.3.2",
    categories: ["create"],
    icon: "assets/flathub/org.kde.krita.png",
    downloadSizeMB: 220,
    installedSizeMB: 390,
    safety: { title: "Safe", desc: "Auditable, sandbox, tablet and filesystem access", level: "ok" },
    age: "3+",
    brand: "#3daee9",
    editors: true,
  },
  {
    id: "org.signal.Signal",
    name: "Signal Desktop",
    summary: "Private messenger",
    description:
      "To use the Signal desktop app, Signal must first be installed on your phone. Millions of people use Signal every day for free and instantaneous communication anywhere in the world. Send and receive high-fidelity messages, participate in HD voice/video calls, and explore a growing set of new features that help you stay connected.",
    developer: "Signal Foundation",
    verified: false,
    free: true,
    license: "AGPL-3.0-only",
    version: "8.20.0",
    categories: ["socialize", "network"],
    icon: "assets/flathub/org.signal.Signal.png",
    downloadSizeMB: 175,
    installedSizeMB: 250,
    safety: { title: "Safe", desc: "Auditable, e2e encryption, network access", level: "ok" },
    age: "13+",
    brand: "#3a76f0",
  },
  {
    id: "com.slack.Slack",
    name: "Slack",
    summary: "Business communication",
    description:
      "Slack brings team communication and collaboration into one place so you can get more work done, whether you belong to a large enterprise or a small business.",
    developer: "Slack Technologies Inc.",
    verified: false,
    free: false,
    license: "Proprietary",
    version: "4.51.180",
    categories: ["work", "socialize"],
    icon: "assets/flathub/com.slack.Slack.png",
    downloadSizeMB: 160,
    installedSizeMB: 240,
    safety: { title: "Potentially Unsafe", desc: "Proprietary, network access, broad permissions", level: "warn" },
    age: "3+",
    brand: "#4a154b",
  },
  {
    id: "org.libreoffice.LibreOffice",
    name: "LibreOffice",
    summary: "The LibreOffice productivity suite",
    description:
      "LibreOffice is a powerful office suite. Its clean interface and feature-rich tools help you unleash your creativity and enhance your productivity. LibreOffice includes Writer, Calc, Impress, Draw, Base, and Math.",
    developer: "The Document Foundation",
    verified: true,
    free: true,
    license: "MPL-2.0",
    version: "26.2.4.2",
    categories: ["work", "learn"],
    icon: "assets/flathub/org.libreoffice.LibreOffice.png",
    downloadSizeMB: 340,
    installedSizeMB: 620,
    safety: { title: "Safe", desc: "Auditable, sandbox, document filesystem access", level: "ok" },
    age: "3+",
    brand: "#18a303",
    featured: true,
    editors: true,
  },
  {
    id: "org.qbittorrent.qBittorrent",
    name: "qBittorrent",
    summary: "An open-source Bittorrent client",
    description:
      "The qBittorrent project aims to provide an open-source software alternative to µTorrent. qBittorrent runs and provides the same features on all major platforms.",
    developer: "The qBittorrent Project",
    verified: true,
    free: true,
    license: "GPL-3.0-or-later",
    version: "5.2.3",
    categories: ["network", "work"],
    icon: "assets/flathub/org.qbittorrent.qBittorrent.png",
    downloadSizeMB: 55,
    installedSizeMB: 90,
    safety: { title: "Safe", desc: "Auditable, network access, download folder access", level: "ok" },
    age: "3+",
    brand: "#3d8ad5",
  },
  {
    id: "org.localsend.localsend_app",
    name: "LocalSend",
    summary: "Share files to nearby devices",
    description:
      "This app allows you to send files and messages over the local LAN network. In contrast to most alternatives, no external servers are needed. Everything happens locally in the wifi network.",
    developer: "Tien Do Nam",
    verified: true,
    free: true,
    license: "Apache-2.0",
    version: "1.17.0",
    categories: ["work", "network"],
    icon: "assets/flathub/org.localsend.localsend_app.png",
    downloadSizeMB: 28,
    installedSizeMB: 45,
    safety: { title: "Safe", desc: "Auditable, local network only by default", level: "ok" },
    age: "3+",
    brand: "#009688",
    editors: true,
  },
  {
    id: "com.mattjakeman.ExtensionManager",
    name: "Extension Manager",
    summary: "Install GNOME Extensions",
    description:
      "Browse and install GNOME Shell extensions to customise your desktop. Browse extensions.gnome.org right inside the app and manage the extensions you already have installed.",
    developer: "Matthew Jakeman",
    verified: true,
    free: true,
    license: "GPL-3.0-or-later",
    version: "0.6.5",
    categories: ["work", "develop"],
    icon: "assets/flathub/com.mattjakeman.ExtensionManager.png",
    downloadSizeMB: 12,
    installedSizeMB: 22,
    safety: { title: "Safe", desc: "Auditable, manages GNOME extensions only", level: "ok" },
    age: "3+",
    brand: "#3584e4",
    editors: true,
  },
  {
    id: "io.missioncenter.MissionCenter",
    name: "Mission Center",
    summary: "Monitor system resource usage",
    description:
      "Monitor your CPU, Memory, Disk, Network and GPU usage, accompanied by a per-app and process breakdown of these statistics.",
    developer: "Mission Center Developers",
    verified: true,
    free: true,
    license: "GPL-3.0-or-later",
    version: "1.2.0",
    categories: ["work", "develop"],
    icon: "assets/flathub/io.missioncenter.MissionCenter.png",
    downloadSizeMB: 18,
    installedSizeMB: 32,
    safety: { title: "Safe", desc: "Auditable, needs system monitor permissions", level: "ok" },
    age: "3+",
    brand: "#62a0ea",
    editors: true,
  },
  {
    id: "org.kde.kdenlive",
    name: "Kdenlive",
    summary: "Video editor",
    description:
      "Kdenlive is a video editing application with support for many audio and video formats. It offers advanced editing features, a variety of effects and transitions, color correction, audio post-production and subtitling tools.",
    developer: "KDE",
    verified: true,
    free: true,
    license: "GPL-3.0-only",
    version: "26.04.3",
    categories: ["create"],
    icon: "assets/flathub/org.kde.kdenlive.png",
    downloadSizeMB: 280,
    installedSizeMB: 520,
    safety: { title: "Safe", desc: "Auditable, sandbox, media filesystem access", level: "ok" },
    age: "3+",
    brand: "#4d4b8a",
  },
  {
    id: "org.onlyoffice.desktopeditors",
    name: "ONLYOFFICE Desktop Editors",
    summary: "Office productivity suite",
    description:
      "ONLYOFFICE Desktop Editors is a free and open-source office suite that comprises editors for text documents, spreadsheets, presentations, PDFs and PDF forms, along with a Diagram Viewer.",
    developer: "ONLYOFFICE",
    verified: true,
    free: true,
    license: "AGPL-3.0-only",
    version: "9.4.0",
    categories: ["work", "learn"],
    icon: "assets/flathub/org.onlyoffice.desktopeditors.png",
    downloadSizeMB: 390,
    installedSizeMB: 720,
    safety: { title: "Safe", desc: "Auditable, sandbox, document filesystem access", level: "ok" },
    age: "3+",
    brand: "#ff6f3d",
  },
  {
    id: "org.gnome.Builder",
    name: "Builder",
    summary: "Create applications for GNOME",
    description:
      "Builder is an actively developed Integrated Development Environment for GNOME. It combines integrated support for essential GNOME technologies such as GTK, GLib, and GNOME APIs with features that any developer will appreciate.",
    developer: "Christian Hergert",
    verified: true,
    free: true,
    license: "GPL-3.0+",
    version: "50.0",
    categories: ["develop"],
    icon: "assets/flathub/org.gnome.Builder.png",
    downloadSizeMB: 95,
    installedSizeMB: 180,
    safety: { title: "Safe", desc: "Auditable, SDK access for building apps", level: "ok" },
    age: "3+",
    brand: "#33d17a",
    editors: true,
  },
  {
    id: "io.github.flattool.Warehouse",
    name: "Warehouse",
    summary: "Manage Flatpak applications and data",
    description:
      "Warehouse is a toolkit to manage Flatpak applications, leftover data, and remotes from a friendly GTK interface.",
    developer: "Heliguy",
    verified: false,
    free: true,
    license: "GPL-3.0-or-later",
    version: "2.1.0",
    categories: ["work", "develop"],
    icon: "assets/flathub/io.github.flattool.Warehouse.png",
    downloadSizeMB: 10,
    installedSizeMB: 18,
    safety: { title: "Safe", desc: "Auditable, manages Flatpak data", level: "ok" },
    age: "3+",
    brand: "#c061cb",
  },
  {
    id: "com.github.IsmaelMartinez.teams_for_linux",
    name: "Teams for Linux",
    summary: "Unofficial Microsoft Teams client",
    description:
      "Unofficial Microsoft Teams client for Linux using Electron. Stay connected with your work chats, meetings and files.",
    developer: "Ismael Martinez",
    verified: false,
    free: true,
    license: "GPL-3.0-only",
    version: "2.0.0",
    categories: ["work", "socialize"],
    icon: "assets/flathub/com.github.IsmaelMartinez.teams_for_linux.png",
    downloadSizeMB: 160,
    installedSizeMB: 240,
    safety: { title: "Potentially Unsafe", desc: "Third-party client, network access", level: "warn" },
    age: "3+",
    brand: "#6264a7",
  },
  {
    id: "net.lutris.Lutris",
    name: "Lutris",
    summary: "Video game preservation platform",
    description:
      "Lutris helps you install and play video games from all eras and from most gaming systems. By leveraging and combining existing emulators, engine re-implementations and compatibility layers, it gives you a central interface to launch all your games.",
    developer: "Lutris Team",
    verified: true,
    free: true,
    license: "GPL-3.0-or-later",
    version: "0.5.22",
    categories: ["play"],
    icon: "assets/flathub/net.lutris.Lutris.png",
    downloadSizeMB: 85,
    installedSizeMB: 140,
    safety: { title: "Safe", desc: "Auditable, needs filesystem access for games", level: "ok" },
    age: "13+",
    brand: "#ff9900",
    popular: true,
    editors: true,
  },
  {
    id: "io.github.jliljebl.Flowblade",
    name: "Flowblade",
    summary: "Video Editor - Fast, Precise, Stable",
    description:
      "Flowblade is a multitrack non-linear video editor released under GPL3 license. From beginners to masters, Flowblade helps make your vision a reality of image and sound.",
    developer: "Janne Liljeblad",
    verified: true,
    free: true,
    license: "GPL-3.0+",
    version: "2.24.1",
    categories: ["create"],
    icon: "assets/flathub/io.github.jliljebl.Flowblade.png",
    downloadSizeMB: 120,
    installedSizeMB: 210,
    safety: { title: "Safe", desc: "Auditable, sandbox, media filesystem access", level: "ok" },
    age: "3+",
    brand: "#3584e4",
    editors: true,
  },
  {
    id: "io.github.fabrialberio.pinapp",
    name: "Pins",
    summary: "Create and edit app shortcuts",
    description:
      "Pins allows you to customize your app menu by editing .desktop files. Some of the things you can do are: changing an app icon that doesn't fit in with your theme, creating custom shortcuts to websites, hiding apps you don't want to see, and editing properties in .desktop files.",
    developer: "Fabrizio Alberio",
    verified: true,
    free: true,
    license: "GPL-3.0-or-later",
    version: "2.4.7",
    categories: ["work", "develop"],
    icon: "assets/flathub/io.github.fabrialberio.pinapp.png",
    downloadSizeMB: 8,
    installedSizeMB: 14,
    safety: { title: "Safe", desc: "Auditable, manages desktop entry files", level: "ok" },
    age: "3+",
    brand: "#1a5fb4",
    editors: true,
  },
  {
    id: "com.vysp3r.ProtonPlus",
    name: "ProtonPlus",
    summary: "A modern compatibility tools manager",
    description:
      "ProtonPlus is a simple tool to help you manage your compatibility tools for Steam, Lutris, Heroic Games Launcher and Bottles. Manage supported compatibility tools across supported launchers, change the compatibility tool and launch options of your Steam games, and more.",
    developer: "Vysp3r",
    verified: true,
    free: true,
    license: "GPL-3.0-or-later",
    version: "0.5.22",
    categories: ["play", "work"],
    icon: "assets/flathub/com.vysp3r.ProtonPlus.png",
    downloadSizeMB: 15,
    installedSizeMB: 28,
    safety: { title: "Safe", desc: "Auditable, manages Proton/Wine tool installs", level: "ok" },
    age: "3+",
    brand: "#993d3d",
    popular: true,
    editors: true,
  },
];
const SW_CATEGORIES = [
  { id: "create", name: "Create", icon: "assets/apps/org.gnome.Software.Create.png" },
  { id: "work", name: "Work", icon: "assets/apps/org.gnome.Software.Work.png" },
  { id: "play", name: "Play", icon: "assets/apps/org.gnome.Software.Play.png" },
  { id: "socialize", name: "Socialize", icon: "assets/apps/org.gnome.Software.Socialize.png" },
  { id: "learn", name: "Learn", icon: "assets/apps/org.gnome.Software.Learn.png" },
  { id: "develop", name: "Develop", icon: "assets/apps/org.gnome.Software.Develop.png" },
];

  const SW_STORAGE_KEY = "cinnamon-preview-software-installed";
  const SW_DESKTOP_PREINSTALLED = {
    "org.mozilla.firefox": true,
    "org.libreoffice.LibreOffice": true,
    "org.localsend.localsend_app": true, // tray emblem on panel
  };

  const softwareWindow = document.getElementById("software-window");
  const swShell = document.getElementById("sw-shell");
  const swBody = document.getElementById("sw-body");
  const swDetails = document.getElementById("sw-details");
  const swDetailsBody = document.getElementById("sw-details-body");
  const swDetailsTitle = document.getElementById("sw-details-title");
  const swCategory = document.getElementById("sw-category");
  const swCategoryBody = document.getElementById("sw-category-body");
  const swCategoryTitle = document.getElementById("sw-category-title");
  const swSearchBtn = document.getElementById("sw-search-btn");
  const swSearchBar = document.getElementById("sw-search-bar");
  const swSearchInput = document.getElementById("sw-search-input");
  const swMenuBtn = document.getElementById("sw-menu-btn");
  const swMenu = document.getElementById("sw-menu");
  const swClose = document.getElementById("sw-close");
  const swDetailsBack = document.getElementById("sw-details-back");
  const swCategoryBack = document.getElementById("sw-category-back");

  if (!softwareWindow) return;

  /** @type {"main"|"details"|"category"} */
  let softwareView = "main";
  /** @type {"explore"|"installed"|"updates"|"search"} */
  let softwareTab = "explore";
  let softwareSearchOpen = false;
  let softwareSearchQuery = "";
  let softwareDetailsId = null;
  let softwareCategoryId = null;
  let softwareCarouselIndex = 0;
  let softwareCarouselTimer = 0;
  const softwareInstallJobs = new Map();

  function loadInstalledFlathubIds() {
    const set = new Set(Object.keys(SW_DESKTOP_PREINSTALLED));
    try {
      const raw = localStorage.getItem(SW_STORAGE_KEY);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) arr.forEach((id) => set.add(id));
      }
    } catch { /* ignore */ }
    return set;
  }

  function saveInstalledFlathubIds(set) {
    try {
      const userIds = [...set].filter((id) => !SW_DESKTOP_PREINSTALLED[id]);
      localStorage.setItem(SW_STORAGE_KEY, JSON.stringify(userIds));
    } catch { /* ignore */ }
  }

  let installedFlathubIds = loadInstalledFlathubIds();

  function isFlathubInstalled(id) {
    return installedFlathubIds.has(id);
  }

  function getFlathubApp(id) {
    return FLATHUB_APPS.find((a) => a.id === id) || null;
  }

  function openSoftware(opts = {}) {
    if (typeof closeAll === "function") closeAll();
    softwareWindow.hidden = false;
    softwareWindow.style.visibility = "";
    softwareWindow.classList.remove("maximized");
    if (typeof desktopHidden !== "undefined") desktopHidden = false;
    if (swMenu) swMenu.hidden = true;
    if (opts && opts.appId) {
      softwareOpenDetails(opts.appId);
    } else if (opts && opts.tab) {
      softwareShowMain();
      softwareSetTab(opts.tab);
    } else {
      softwareShowMain();
      renderSoftwareBody();
    }
    startSoftwareCarousel();
    if (typeof focusWindow === "function") focusWindow("software");
  }

  function closeSoftware() {
    softwareWindow.hidden = true;
    softwareWindow.style.visibility = "";
    softwareWindow.classList.remove("maximized");
    stopSoftwareCarousel();
    if (swMenu) swMenu.hidden = true;
    setSoftwareSearchOpen(false);
    if (typeof focusedWindowId !== "undefined" && focusedWindowId === "software") {
      focusedWindowId = null;
    }
    if (typeof updateWindowList === "function") updateWindowList();
  }

  function softwareShowMain() {
    softwareView = "main";
    if (swShell) swShell.hidden = false;
    if (swDetails) swDetails.hidden = true;
    if (swCategory) swCategory.hidden = true;
    softwareDetailsId = null;
    softwareCategoryId = null;
    renderSoftwareBody();
  }

  function setSoftwareSearchOpen(open) {
    softwareSearchOpen = open;
    if (swSearchBar) swSearchBar.hidden = !open;
    swSearchBtn?.classList.toggle("active", open);
    swSearchBtn?.setAttribute("aria-pressed", open ? "true" : "false");
    if (open) {
      softwareTab = "search";
      updateSoftwareSwitcher();
      swSearchInput?.focus();
      renderSoftwareBody();
    } else {
      softwareSearchQuery = "";
      if (swSearchInput) swSearchInput.value = "";
      if (softwareTab === "search") {
        softwareTab = "explore";
        updateSoftwareSwitcher();
      }
      renderSoftwareBody();
    }
  }

  function softwareSetTab(tab) {
    softwareTab = tab;
    if (tab !== "search") setSoftwareSearchOpen(false);
    updateSoftwareSwitcher();
    softwareShowMain();
  }

  function updateSoftwareSwitcher() {
    document.querySelectorAll(".sw-switcher-btn").forEach((btn) => {
      const on = btn.dataset.swTab === softwareTab;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  function renderSoftwareBody() {
    if (!swBody) return;
    if (softwareTab === "explore") swBody.innerHTML = renderExplorePage();
    else if (softwareTab === "installed") swBody.innerHTML = renderInstalledPage();
    else if (softwareTab === "updates") swBody.innerHTML = renderUpdatesPage();
    else if (softwareTab === "search") swBody.innerHTML = renderSearchPage();
    bindSoftwareBodyHandlers();
    if (softwareTab === "explore") {
      softwareCarouselIndex = 0;
      updateCarouselSlide();
    }
  }

  function renderExplorePage() {
    const featured = FLATHUB_APPS.filter((a) => a.featured);
    const editors = FLATHUB_APPS.filter((a) => a.editors);
    const popular = FLATHUB_APPS.filter((a) => a.popular);

    const slides = featured
      .map(
        (app, i) => `
      <div class="sw-carousel-slide${i === 0 ? " active" : ""}" data-sw-app="${escapeHtml(app.id)}" style="background: linear-gradient(135deg, ${app.brand}cc 0%, ${app.brand}66 40%, #1a1a1a 100%);">
        <img class="sw-carousel-icon" src="${app.icon}" alt="" draggable="false" />
        <div class="sw-carousel-meta">
          <div class="sw-carousel-name">${escapeHtml(app.name)}</div>
          <div class="sw-carousel-summary">${escapeHtml(app.summary)}</div>
          <div class="sw-carousel-source">
            <img class="sym" src="assets/software/package-generic-symbolic.svg" alt="" draggable="false" />
            <span>Flathub</span>
          </div>
        </div>
      </div>`
      )
      .join("");

    const dots = featured
      .map(
        (_, i) =>
          `<button type="button" class="sw-carousel-dot${i === 0 ? " active" : ""}" data-carousel-dot="${i}" aria-label="Featured slide ${i + 1}"></button>`
      )
      .join("");

    const cats = SW_CATEGORIES.map(
      (c) => `
    <button type="button" class="sw-category-tile" data-sw-category="${c.id}">
      <img src="${c.icon}" alt="" draggable="false" />
      <span class="sw-category-tile-name">${escapeHtml(c.name)}</span>
    </button>`
    ).join("");

    return `
    <div class="sw-clamp">
      <div class="sw-flathub-banner">
        <img class="sym" src="assets/software/package-generic-symbolic.svg" alt="" draggable="false" />
        <span><strong>Flathub</strong> — apps from the largest Linux app store, sandboxed with Flatpak</span>
      </div>
      <div class="sw-carousel" id="sw-carousel" role="region" aria-label="Featured apps">
        ${slides}
        <div class="sw-carousel-dots">${dots}</div>
      </div>
      <div class="sw-categories">${cats}</div>
      <h2 class="sw-heading">Editor’s Choice</h2>
      <div class="sw-tile-grid">${editors.map(appTileHtml).join("")}</div>
      <h2 class="sw-heading">Popular on Flathub</h2>
      <div class="sw-tile-grid">${popular.map(appTileHtml).join("")}</div>
      <h2 class="sw-heading">New &amp; Updated</h2>
      <div class="sw-tile-grid">${FLATHUB_APPS.slice(0, 9).map(appTileHtml).join("")}</div>
    </div>`;
  }

  function appTileHtml(app) {
    const installed = isFlathubInstalled(app.id);
    return `
    <button type="button" class="sw-app-tile" data-sw-app="${escapeHtml(app.id)}">
      <img class="sw-app-tile-icon" src="${app.icon}" alt="" draggable="false" />
      <span class="sw-app-tile-meta">
        <span class="sw-app-tile-name">${escapeHtml(app.name)}</span>
        <span class="sw-app-tile-summary">${escapeHtml(app.summary)}</span>
      </span>
      ${
        installed
          ? `<span class="sw-app-tile-badge" title="Installed"><img class="sym" src="assets/software/app-installed-symbolic.svg" alt="" draggable="false" /></span>`
          : ""
      }
    </button>`;
  }

  function renderInstalledPage() {
    const flathubInstalled = FLATHUB_APPS.filter((a) => isFlathubInstalled(a.id));
    const systemRows = [
      { id: "sys.files", name: "Files", summary: "Access and organize files", icon: "assets/apps/nemo.png", source: "System", version: "6.6" },
      { id: "sys.settings", name: "System Settings", summary: "Cinnamon desktop settings", icon: "assets/menu/preferences-desktop.svg", source: "System", version: "6.6" },
      { id: "sys.software", name: "Software Manager", summary: "Install and update apps", icon: "assets/apps/software-manager.svg", source: "System", version: "6.6" },
    ];

    const rows = [
      ...systemRows.map(
        (a) => `
      <div class="sw-app-row">
        <img class="sw-app-row-icon" src="${a.icon}" alt="" draggable="false" />
        <span class="sw-app-row-meta">
          <span class="sw-app-row-name">${escapeHtml(a.name)}</span>
          <span class="sw-app-row-sub">${escapeHtml(a.source)} · ${escapeHtml(a.version)}</span>
        </span>
      </div>`
      ),
      ...flathubInstalled.map(
        (a) => `
      <button type="button" class="sw-app-row" data-sw-app="${escapeHtml(a.id)}">
        <img class="sw-app-row-icon" src="${a.icon}" alt="" draggable="false" />
        <span class="sw-app-row-meta">
          <span class="sw-app-row-name">${escapeHtml(a.name)}</span>
          <span class="sw-app-row-sub">Flathub · ${escapeHtml(a.version)}</span>
        </span>
        <span class="sw-app-row-action">
          <span class="sw-btn sw-btn-suggested" style="pointer-events:none;height:28px;font-size:12px;">Open</span>
        </span>
      </button>`
      ),
    ];

    return `
    <div class="sw-clamp">
      <h2 class="sw-heading">Installed</h2>
      <div class="sw-list">${rows.join("")}</div>
      ${
        !flathubInstalled.length
          ? `<div class="sw-status" style="min-height:160px;padding:32px 24px;">
        <div class="sw-status-title">No Flathub apps installed yet</div>
        <div class="sw-status-desc">Browse Explore to install popular apps from Flathub.</div>
      </div>`
          : ""
      }
    </div>`;
  }

  function renderUpdatesPage() {
    return `
    <div class="sw-clamp">
      <div class="sw-status">
        <img class="sw-status-icon" src="assets/software/software-updates-symbolic.svg" alt="" draggable="false" />
        <div class="sw-status-title">Apps are up to date</div>
        <div class="sw-status-desc">When updates are available for Flatpaks from Flathub, they will appear here.</div>
      </div>
    </div>`;
  }

  function renderSearchPage() {
    const q = softwareSearchQuery.trim().toLowerCase();
    if (!q) {
      return `
      <div class="sw-clamp">
        <div class="sw-status">
          <div class="sw-status-title">Search Flathub</div>
          <div class="sw-status-desc">Try “firefox”, “gimp”, “spotify”, or “code”.</div>
        </div>
      </div>`;
    }
    const hits = FLATHUB_APPS.filter((a) => {
      const hay = [a.name, a.summary, a.developer, a.id, ...(a.categories || [])]
        .join(" ")
        .toLowerCase();
      return q.split(/\s+/).every((w) => hay.includes(w));
    });
    if (!hits.length) {
      return `
      <div class="sw-clamp">
        <div class="sw-status">
          <div class="sw-status-title">No Results Found</div>
          <div class="sw-status-desc">No apps matching “${escapeHtml(softwareSearchQuery)}”.</div>
        </div>
      </div>`;
    }
    return `
    <div class="sw-clamp">
      <h2 class="sw-heading">Results</h2>
      <div class="sw-tile-grid">${hits.map(appTileHtml).join("")}</div>
    </div>`;
  }

  function bindSoftwareBodyHandlers() {
    swBody?.querySelectorAll("[data-sw-app]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        softwareOpenDetails(el.dataset.swApp);
      });
    });
    swBody?.querySelectorAll("[data-sw-category]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        softwareOpenCategory(el.dataset.swCategory);
      });
    });
    swBody?.querySelectorAll("[data-carousel-dot]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        softwareCarouselIndex = Number(el.dataset.carouselDot) || 0;
        updateCarouselSlide();
        startSoftwareCarousel();
      });
    });
  }

  function startSoftwareCarousel() {
    stopSoftwareCarousel();
    softwareCarouselTimer = window.setInterval(() => {
      if (softwareWindow.hidden || softwareView !== "main" || softwareTab !== "explore") return;
      const featured = FLATHUB_APPS.filter((a) => a.featured);
      if (featured.length < 2) return;
      softwareCarouselIndex = (softwareCarouselIndex + 1) % featured.length;
      updateCarouselSlide();
    }, 5000);
  }

  function stopSoftwareCarousel() {
    if (softwareCarouselTimer) {
      clearInterval(softwareCarouselTimer);
      softwareCarouselTimer = 0;
    }
  }

  function updateCarouselSlide() {
    const carousel = document.getElementById("sw-carousel");
    if (!carousel) return;
    carousel.querySelectorAll(".sw-carousel-slide").forEach((s, i) => {
      s.classList.toggle("active", i === softwareCarouselIndex);
    });
    carousel.querySelectorAll(".sw-carousel-dot").forEach((d, i) => {
      d.classList.toggle("active", i === softwareCarouselIndex);
    });
  }

  function softwareOpenCategory(catId) {
    const cat = SW_CATEGORIES.find((c) => c.id === catId);
    if (!cat) return;
    softwareView = "category";
    softwareCategoryId = catId;
    if (swShell) swShell.hidden = true;
    if (swDetails) swDetails.hidden = true;
    if (swCategory) swCategory.hidden = false;
    if (swCategoryTitle) swCategoryTitle.textContent = cat.name;
    const apps = FLATHUB_APPS.filter((a) => (a.categories || []).includes(catId));
    swCategoryBody.innerHTML = `
    <div class="sw-clamp">
      <div class="sw-flathub-banner">
        <img class="sym" src="assets/software/package-generic-symbolic.svg" alt="" draggable="false" />
        <span>Apps in <strong>${escapeHtml(cat.name)}</strong> from Flathub</span>
      </div>
      <div class="sw-tile-grid">${apps.map(appTileHtml).join("")}</div>
    </div>`;
    swCategoryBody.querySelectorAll("[data-sw-app]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        softwareOpenDetails(el.dataset.swApp);
      });
    });
  }

  function softwareOpenDetails(appId) {
    const app = getFlathubApp(appId);
    if (!app) return;
    softwareView = "details";
    softwareDetailsId = appId;
    if (swShell) swShell.hidden = true;
    if (swCategory) swCategory.hidden = true;
    if (swDetails) swDetails.hidden = false;
    if (swDetailsTitle) swDetailsTitle.textContent = app.name;
    renderSoftwareDetails(app);
  }

  function installState(appId) {
    if (softwareInstallJobs.has(appId)) {
      const job = softwareInstallJobs.get(appId);
      return { kind: "installing", ...job };
    }
    if (isFlathubInstalled(appId)) return { kind: "installed" };
    return { kind: "available" };
  }

  function renderDetailsActions(app, state) {
    if (state.kind === "installing") {
      return `
        <div class="sw-progress-wrap">
          <div class="sw-progress-bar"><i style="width:${state.progress || 0}%"></i></div>
          <span class="sw-progress-label">${Math.round(state.progress || 0)}%</span>
        </div>
        <button type="button" class="sw-btn sw-btn-suggested" disabled>Installing…</button>`;
    }
    if (state.kind === "installed") {
      return `
        <button type="button" class="sw-btn sw-btn-destructive" data-sw-remove="${escapeHtml(app.id)}">Uninstall</button>
        <button type="button" class="sw-btn sw-btn-suggested" data-sw-launch="${escapeHtml(app.id)}">Open</button>`;
    }
    return `<button type="button" class="sw-btn sw-btn-suggested" data-sw-install="${escapeHtml(app.id)}">Install</button>`;
  }

  function renderSoftwareDetails(app) {
    const state = installState(app.id);
    const actions = renderDetailsActions(app, state);
    const safety = app.safety || { title: "Safe", desc: "Sandboxed Flatpak", level: "ok" };
    const safetyGreen = safety.level === "ok";

    swDetailsBody.innerHTML = `
    <div class="sw-details-clamp">
      <div class="sw-details-hero">
        <img class="sw-details-icon" src="${app.icon}" alt="" draggable="false" />
        <div class="sw-details-hero-main">
          <div class="sw-details-name">${escapeHtml(app.name)}</div>
          <div class="sw-details-developer">${escapeHtml(app.developer)}</div>
          ${
            app.verified
              ? `<div class="sw-details-verified"><img class="sym" src="assets/software/app-verified-symbolic.svg" alt="" draggable="false" /><span>Verified</span></div>`
              : ""
          }
        </div>
        <div class="sw-details-actions" id="sw-details-actions">${actions}</div>
      </div>

      <div class="sw-screenshots" aria-label="Screenshots">
        <div class="sw-shot" style="--sw-brand:${app.brand || "#e35d04"}">${escapeHtml(app.name)} — main window</div>
        <div class="sw-shot" style="--sw-brand:${app.brand || "#e35d04"};opacity:0.92">Preferences</div>
        <div class="sw-shot" style="--sw-brand:${app.brand || "#e35d04"};opacity:0.85">About</div>
      </div>

      <div class="sw-details-summary">${escapeHtml(app.summary)}</div>
      <div class="sw-details-desc">${escapeHtml(app.description)}</div>

      <div class="sw-context-bar">
        <div class="sw-context-tile">
          <div class="sw-lozenge">${formatSizeMB(app.downloadSizeMB || 100)}</div>
          <div class="sw-context-title">Download Size</div>
          <div class="sw-context-desc">Needs ${formatSizeMB(app.downloadSizeMB || 100)} download · ${formatSizeMB(app.installedSizeMB || 150)} installed</div>
        </div>
        <div class="sw-context-tile">
          <div class="sw-lozenge circular ${safetyGreen ? "green" : ""}">
            <img class="sym" src="assets/software/app-safety-ok-symbolic.svg" alt="" draggable="false" />
          </div>
          <div class="sw-context-title">${escapeHtml(safety.title)}</div>
          <div class="sw-context-desc">${escapeHtml(safety.desc)}</div>
        </div>
        <div class="sw-context-tile">
          <div class="sw-lozenge circular green">
            <img class="sym" src="assets/software/app-safety-ok-symbolic.svg" alt="" draggable="false" />
          </div>
          <div class="sw-context-title">Desktop</div>
          <div class="sw-context-desc">Works on desktops and large tablets</div>
        </div>
        <div class="sw-context-tile">
          <div class="sw-lozenge circular">${escapeHtml(app.age || "3+")}</div>
          <div class="sw-context-title">Age Rating</div>
          <div class="sw-context-desc">${(app.age || "3+") === "3+" ? "No age-inappropriate content" : "May not be suitable for children"}</div>
        </div>
      </div>

      <div class="sw-info-list">
        <div class="sw-info-row">
          <span class="sw-info-label">Version</span>
          <span class="sw-info-value">${escapeHtml(app.version)}</span>
        </div>
        <div class="sw-info-row">
          <span class="sw-info-label">Developer</span>
          <span class="sw-info-value">${escapeHtml(app.developer)}</span>
        </div>
        <div class="sw-info-row">
          <span class="sw-info-label">License</span>
          <span class="sw-info-value">${escapeHtml(app.license || "Unknown")}</span>
        </div>
        <div class="sw-info-row">
          <span class="sw-info-label">Source</span>
          <span class="sw-info-value">Flathub · ${escapeHtml(app.id)}</span>
        </div>
      </div>
    </div>`;

    swDetailsBody.querySelector("[data-sw-install]")?.addEventListener("click", (e) => {
      e.stopPropagation();
      startInstall(app.id);
    });
    swDetailsBody.querySelector("[data-sw-remove]")?.addEventListener("click", (e) => {
      e.stopPropagation();
      installedFlathubIds.delete(app.id);
      saveInstalledFlathubIds(installedFlathubIds);
      renderSoftwareDetails(app);
    });
    swDetailsBody.querySelector("[data-sw-launch]")?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  function startInstall(appId) {
    if (softwareInstallJobs.has(appId) || isFlathubInstalled(appId)) return;
    const job = { progress: 0 };
    softwareInstallJobs.set(appId, job);
    const app = getFlathubApp(appId);
    if (app) renderSoftwareDetails(app);
    job.timer = window.setInterval(() => {
      job.progress = Math.min(100, job.progress + 5 + Math.random() * 12);
      if (job.progress >= 100) {
        clearInterval(job.timer);
        softwareInstallJobs.delete(appId);
        installedFlathubIds.add(appId);
        saveInstalledFlathubIds(installedFlathubIds);
      }
      const a = getFlathubApp(appId);
      if (a && softwareDetailsId === appId) renderSoftwareDetails(a);
    }, 160);
  }

  /* ---------- Software chrome events ---------- */
  swClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    closeSoftware();
  });
  swSearchBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    setSoftwareSearchOpen(!softwareSearchOpen);
  });
  swSearchInput?.addEventListener("input", () => {
    softwareSearchQuery = swSearchInput.value;
    if (softwareTab !== "search") {
      softwareTab = "search";
      updateSoftwareSwitcher();
    }
    renderSoftwareBody();
  });
  document.querySelectorAll(".sw-switcher-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      softwareSetTab(btn.dataset.swTab);
    });
  });
  swMenuBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (swMenu) swMenu.hidden = !swMenu.hidden;
  });
  swMenu?.addEventListener("click", (e) => e.stopPropagation());
  swDetailsBack?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (softwareCategoryId) softwareOpenCategory(softwareCategoryId);
    else softwareShowMain();
  });
  swCategoryBack?.addEventListener("click", (e) => {
    e.stopPropagation();
    softwareShowMain();
  });

  /* ========== System Settings ========== */

  const settingsWindow = document.getElementById("settings-window");
  const csBody = document.getElementById("cs-body");
  const csSearch = document.getElementById("cs-search");
  const csBack = document.getElementById("cs-back");
  const csTitle = document.getElementById("cs-title");
  const csClose = document.getElementById("cs-close");
  const csToolbar = document.getElementById("cs-toolbar");
  /** Real cinnamon-settings icons (Mint-Y / system theme) — see assets/system-settings/README mapping */
  const RS = "assets/system-settings/";

  const CS_MODULES = [
    {
      group: "Appearance",
      color: "linear-gradient(135deg,#42A5F5,#AB47BC)",
      modules: [
        { id: "backgrounds", name: "Backgrounds", icon: RS + "cs-backgrounds.png", desc: "Change your desktop background" },
        { id: "effects", name: "Effects", icon: RS + "cs-desktop-effects.png", desc: "Control desktop visual effects" },
        { id: "fonts", name: "Font Selection", icon: RS + "cs-fonts.png", desc: "Configure system fonts" },
        { id: "themes", name: "Themes", icon: RS + "cs-themes.png", desc: "Change themes and icons" },
      ],
    },
    {
      group: "Preferences",
      color: "#90A4AE",
      modules: [
        { id: "accessibility", name: "Accessibility", icon: RS + "cs-universal-access.png", desc: "Accessibility features" },
        { id: "account", name: "Account details", icon: RS + "cs-user.png", desc: "Change user preferences" },
        { id: "actions", name: "Actions", icon: RS + "cs-actions.png", desc: "Manage your actions" },
        { id: "applets", name: "Applets", icon: RS + "cs-applets.png", desc: "Manage panel applets" },
        { id: "datetime", name: "Date & Time", icon: RS + "cs-date-time.png", desc: "Date and time settings" },
        { id: "desklets", name: "Desklets", icon: RS + "cs-desklets.png", desc: "Manage desktop desklets" },
        { id: "desktop", name: "Desktop", icon: RS + "cs-desktop.png", desc: "Desktop settings" },
        { id: "extensions", name: "Extensions", icon: RS + "cs-extensions.png", desc: "Manage Cinnamon extensions" },
        { id: "general", name: "General", icon: RS + "cs-general.png", desc: "General preferences" },
        { id: "gestures", name: "Gestures", icon: RS + "cs-gestures.png", desc: "Touchpad gestures" },
        { id: "hotcorners", name: "Hot Corners", icon: RS + "cs-overview.png", desc: "Hot corner actions" },
        { id: "inputmethod", name: "Input Method", icon: RS + "cs-input-method.png", desc: "Input method settings" },
        { id: "languages", name: "Languages", icon: RS + "cs-language.png", desc: "Language settings" },
        { id: "nightlight", name: "Night Light", icon: RS + "cs-nightlight.png", desc: "Reduce blue light at night" },
        { id: "notifications", name: "Notifications", icon: RS + "cs-notifications.png", desc: "Notification settings" },
        { id: "online", name: "Online Accounts", icon: RS + "gnome-online-accounts-gtk.png", desc: "Online accounts" },
        { id: "panel", name: "Panel", icon: RS + "cs-panel.png", desc: "Panel settings" },
        { id: "preferred", name: "Preferred Applications", icon: RS + "cs-default-applications.png", desc: "Default applications" },
        { id: "privacy", name: "Privacy", icon: RS + "cs-privacy.png", desc: "Privacy settings" },
        { id: "screensaver", name: "Screensaver", icon: RS + "cs-screensaver.png", desc: "Screensaver settings" },
        { id: "startup", name: "Startup Applications", icon: RS + "cs-startup-programs.png", desc: "Apps that start automatically" },
        { id: "windows", name: "Windows", icon: RS + "cs-windows.png", desc: "Window behavior" },
        { id: "workspaces", name: "Workspaces", icon: RS + "cs-workspaces.png", desc: "Virtual workspaces" },
      ],
    },
    {
      group: "Hardware",
      color: "#66BB6A",
      modules: [
        { id: "bluetooth", name: "Bluetooth", icon: RS + "cs-bluetooth.png", desc: "Bluetooth devices" },
        { id: "color", name: "Color", icon: RS + "cs-color.png", desc: "Color management" },
        { id: "disks", name: "Disks", icon: RS + "org.gnome.DiskUtility.png", desc: "Disk settings" },
        { id: "display", name: "Display", icon: RS + "cs-display.png", desc: "Display settings" },
        { id: "tablet", name: "Graphics Tablet", icon: RS + "cs-tablet.png", desc: "Graphics tablet" },
        { id: "keyboard", name: "Keyboard", icon: RS + "cs-keyboard.png", desc: "Keyboard settings" },
        { id: "mouse", name: "Mouse and Touchpad", icon: RS + "cs-mouse.png", desc: "Mouse and touchpad" },
        { id: "network", name: "Network", icon: RS + "cs-network.png", desc: "Network connections" },
        { id: "power", name: "Power Management", icon: RS + "cs-power.png", desc: "Power settings" },
        { id: "printers", name: "Printers", icon: RS + "cs-printer.png", desc: "Printers" },
        { id: "sound", name: "Sound", icon: RS + "cs-sound.png", desc: "Sound settings" },
        { id: "sysinfo", name: "System Information", icon: RS + "mintreport.png", desc: "System information" },
        { id: "thunderbolt", name: "Thunderbolt", icon: RS + "cs-thunderbolt.png", desc: "Thunderbolt devices" },
      ],
    },
    {
      group: "Administration",
      color: "#AB47BC",
      modules: [
        { id: "drivers", name: "Driver Manager", icon: RS + "cs-drivers.png", desc: "Hardware drivers" },
        { id: "fingerprints", name: "Fingerprints", icon: RS + "fingwit.svg", desc: "Fingerprint login" },
        { id: "firewall", name: "Firewall", icon: RS + "cs-firewall.png", desc: "Firewall settings" },
        { id: "login", name: "Login Window", icon: RS + "cs-login.png", desc: "Login window settings" },
        { id: "software-sources", name: "Software Sources", icon: RS + "cs-sources.png", desc: "Software repositories" },
        { id: "sysadmin", name: "System Administration", icon: RS + "mintsysadm.png", desc: "System administration" },
        { id: "users", name: "Users and Groups", icon: RS + "cs-user-accounts.png", desc: "Users and groups" },
      ],
    },
  ];

  const csState = {
    style: "Mint-Y-Orange",
    appearance: "dark",
    accent: "#e35d04",
    effects: true,
    effectsDialog: true,
    effectsMenus: true,
    effectsStartup: true,
    effectsFade: true,
    effectsWindows: true,
    effectsResize: true,
    effectsNew: "Traditional",
    effectsClose: "Traditional",
    effectsMin: "Traditional",
    animSpeed: 50,
    wallpaper: "cinnamon",
    bgCat: "wallpapers",
    notifications: true,
    notifTimeout: false,
    notifBottom: false,
    notifFullscreen: false,
    notifDuration: 4,
    mediaOsd: true,
    nightLight: false,
    nightTemp: 70,
    nightSchedule: "Automatic",
    gestures: false,
    rememberFiles: true,
    neverForget: false,
    rememberDays: 7,
    checkConnectivity: true,
    desktopMounted: true,
    desktopMissing: true,
    desktopComputer: false,
    desktopHome: false,
    desktopTrash: false,
    desktopNetwork: false,
    desktopLayout: "Show desktop icons on primary monitor only",
    workspaceOsd: true,
    workspaceCycle: false,
    workspacePrimary: false,
    expoGrid: true,
    expoPrimary: true,
    enableKeyRepeat: true,
    cursorBlink: true,
    leftHanded: false,
    reverseScroll: false,
    showPointerCtrl: false,
    emulateMiddle: false,
    pasteMiddle: true,
    dndThreshold: 8,
    panelAutoHide: "Always show panel",
    panelHeight: 40,
    symbolicIcon: 28,
    generalCompositor: false,
    generalTimer: false,
    generalMemLimit: true,
    generalMemMb: 2048,
    generalCheckSec: 300,
    accessibility: {},
    fonts: {
      default: "Ubuntu Regular 10",
      desktop: "Ubuntu Regular 10",
      document: "Sans Regular 10",
      mono: "DejaVu Sans Mono Book 10",
      title: "Ubuntu Medium 10",
      scale: 1.0,
      hinting: "Slight",
      aa: "Rgba",
      rgba: "RGB",
    },
    windows: {
      buttons: "Right",
      dbl: "Toggle Maximize",
      mid: "Lower",
      right: "Menu",
      scroll: "Nothing",
    },
    hotcorners: [
      { on: false, action: "Show all workspaces", delay: 0 },
      { on: false, action: "Show all windows", delay: 0 },
      { on: false, action: "Show all windows", delay: 0 },
      { on: false, action: "Show the desktop", delay: 0 },
    ],
    hotcornersFs: false,
    screensaverDelay: "1 hour",
    lockSleep: false,
    lockSs: false,
    preferred: {
      web: "Firefox Web Browser",
      mail: "Thunderbird Mail",
      music: "Celluloid",
      video: "Celluloid",
      photos: "Image Viewer",
      word: "LibreOffice Writer",
      sheet: "LibreOffice Calc",
      pdf: "Document Viewer",
      code: "Text Editor",
    },
    soundVol: 40,
    soundBalance: 50,
    overamp: false,
    bluetoothOn: true,
    networkWifi: true,
    power: {
      screenAc: "30 minutes",
      screenBat: "30 minutes",
      suspendAc: "Never",
      suspendBat: "Never",
      lidAc: "Suspend",
      lidBat: "Suspend",
      powerBtn: "Ask",
      lidExternal: false,
      powerMode: "Power Saver",
    },
    login: {
      align: "Left",
      drawUserBg: true,
      drawGrid: false,
      stretch: false,
      gtk: "Mint-Y-Aqua",
      icons: "Mint-Y-Sand",
      cursor: "Bibata-Modern-Classic",
      cursorSize: 24,
    },
    firewall: { profile: "Home", status: false, incoming: "Deny", outgoing: "Allow" },
    sources: { sourceCode: false, debug: false, romeo: false },
    sysadmin: { showMenu: false, delay: -1, remember: false },
    mouseSize: 50,
    mouseSpeed: 50,
    mouseAccel: "Device default",
    doubleClick: 40,
    tabState: {},
  };

  let csModuleId = null;

  function allCsModules() {
    return CS_MODULES.flatMap((g) => g.modules.map((m) => ({ ...m, group: g.group })));
  }

  function findCsModule(id) {
    return allCsModules().find((m) => m.id === id);
  }

  function openSettings(moduleId) {
    if (typeof closeAll === "function") closeAll();
    settingsWindow.hidden = false;
    settingsWindow.style.visibility = "";
    settingsWindow.classList.remove("maximized");
    if (typeof desktopHidden !== "undefined") desktopHidden = false;
    csModuleId = moduleId || null;
    if (csSearch) csSearch.value = "";
    renderSettings();
    if (typeof focusWindow === "function") focusWindow("settings");
  }

  function closeSettings() {
    settingsWindow.hidden = true;
    settingsWindow.style.visibility = "";
    settingsWindow.classList.remove("maximized");
    csModuleId = null;
    if (typeof focusedWindowId !== "undefined" && focusedWindowId === "settings") {
      focusedWindowId = null;
    }
    if (typeof updateWindowList === "function") updateWindowList();
  }

  function csGoBack() {
    csModuleId = null;
    if (csSearch) csSearch.value = "";
    renderSettings();
  }

  /* ---- UI helpers ---- */
  function makeSwitch(checked, onChange) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cs-switch";
    btn.setAttribute("role", "switch");
    btn.setAttribute("aria-checked", checked ? "true" : "false");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const next = btn.getAttribute("aria-checked") !== "true";
      btn.setAttribute("aria-checked", next ? "true" : "false");
      if (onChange) onChange(next);
    });
    return btn;
  }

  function makeSelect(options, value, onChange) {
    const sel = document.createElement("select");
    sel.className = "cs-select";
    options.forEach((opt) => {
      const o = document.createElement("option");
      const v = typeof opt === "string" ? opt : opt.value;
      const t = typeof opt === "string" ? opt : opt.label;
      o.value = v;
      o.textContent = t;
      if (v === value) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener("change", (e) => {
      e.stopPropagation();
      if (onChange) onChange(sel.value);
    });
    sel.addEventListener("click", (e) => e.stopPropagation());
    return sel;
  }

  function makeStepper(value, min, max, step, onChange) {
    let v = value;
    const wrap = document.createElement("div");
    wrap.className = "cs-stepper";
    const val = document.createElement("span");
    val.className = "cs-stepper-val";
    const fmt = (n) => {
      if (step < 1) return (Math.round(n * 1000) / 1000).toString();
      return String(n);
    };
    val.textContent = fmt(v);
    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "−";
    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    const apply = (n) => {
      const rounded = step < 1 ? Math.round(n / step) * step : n;
      v = Math.min(max, Math.max(min, rounded));
      val.textContent = fmt(v);
      if (onChange) onChange(v);
    };
    minus.addEventListener("click", (e) => {
      e.stopPropagation();
      apply(v - step);
    });
    plus.addEventListener("click", (e) => {
      e.stopPropagation();
      apply(v + step);
    });
    wrap.append(val, minus, plus);
    return wrap;
  }

  function makeSlider(value, min, max, left, right, onChange, label, extraClass) {
    const block = document.createElement("div");
    block.className = "cs-slider-block";
    if (label) {
      const lab = document.createElement("div");
      lab.className = "cs-slider-label";
      lab.textContent = label;
      block.appendChild(lab);
    }
    const row = document.createElement("div");
    row.className = "cs-slider-row";
    const l = document.createElement("span");
    l.textContent = left;
    const r = document.createElement("span");
    r.textContent = right;
    const input = document.createElement("input");
    input.type = "range";
    input.className = "cs-slider" + (extraClass ? " " + extraClass : "");
    input.min = String(min);
    input.max = String(max);
    input.value = String(value);
    const fill = () => {
      const pct = ((Number(input.value) - min) / (max - min)) * 100;
      input.style.setProperty("--fill", pct + "%");
    };
    fill();
    input.addEventListener("input", (e) => {
      e.stopPropagation();
      fill();
      if (onChange) onChange(Number(input.value));
    });
    input.addEventListener("click", (e) => e.stopPropagation());
    row.append(l, input, r);
    block.appendChild(row);
    return block;
  }

  function makeBtn(label, opts = {}) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cs-btn" + (opts.primary ? " cs-btn-primary" : "") + (opts.block ? " cs-btn-block" : "");
    b.textContent = label;
    if (opts.disabled) b.disabled = true;
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      if (opts.onClick) opts.onClick(e);
    });
    return b;
  }

  function makeRow(title, sub, control) {
    const row = document.createElement("div");
    row.className = "cs-row";
    const text = document.createElement("div");
    text.className = "cs-row-text";
    text.innerHTML = `<span class="cs-row-title">${title}</span>${
      sub ? `<span class="cs-row-sub">${sub}</span>` : ""
    }`;
    row.appendChild(text);
    if (control) {
      if (control.classList?.contains("cs-row-controls") || control.nodeType === 1) {
        row.appendChild(control);
      }
    }
    return row;
  }

  function makeRowValue(title, value) {
    const row = makeRow(title, null, null);
    const span = document.createElement("span");
    span.className = "cs-row-value";
    span.textContent = value;
    row.appendChild(span);
    return row;
  }

  function makeCard(rows) {
    const card = document.createElement("div");
    card.className = "cs-card";
    rows.forEach((r) => card.appendChild(r));
    return card;
  }

  function makeSection(title, content, hint) {
    const sec = document.createElement("div");
    sec.className = "cs-section";
    if (title) {
      const lab = document.createElement("div");
      lab.className = "cs-section-label";
      lab.textContent = title;
      sec.appendChild(lab);
    }
    if (content) sec.appendChild(content);
    if (hint) {
      const h = document.createElement("div");
      h.className = "cs-section-hint";
      h.textContent = hint;
      sec.appendChild(h);
    }
    return sec;
  }

  function makeTabs(tabIds, labels, renderTab, stateKey) {
    const wrap = document.createElement("div");
    const tabs = document.createElement("div");
    tabs.className = "cs-tabs";
    const body = document.createElement("div");
    body.className = "cs-tab-body";
    let active = csState.tabState[stateKey] || tabIds[0];

    const paint = () => {
      tabs.querySelectorAll(".cs-tab").forEach((t) => {
        t.setAttribute("aria-selected", t.dataset.tab === active ? "true" : "false");
        t.classList.toggle("is-active", t.dataset.tab === active);
      });
      body.innerHTML = "";
      body.appendChild(renderTab(active));
    };

    tabIds.forEach((id, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cs-tab";
      btn.dataset.tab = id;
      btn.textContent = labels[i];
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        active = id;
        csState.tabState[stateKey] = id;
        paint();
      });
      tabs.appendChild(btn);
    });

    wrap.append(tabs, body);
    paint();
    return wrap;
  }

  function makeEmpty(icon, title, sub, extra) {
    const el = document.createElement("div");
    el.className = "cs-empty";
    el.innerHTML = `<div class="cs-empty-icon">${icon}</div><div class="cs-empty-title">${title}</div>${
      sub ? `<div class="cs-empty-sub">${sub}</div>` : ""
    }`;
    if (extra) el.appendChild(extra);
    return el;
  }

  function makeListFoot(icons) {
    const foot = document.createElement("div");
    foot.className = "cs-list-foot";
    icons.forEach((ic) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = ic;
      b.title = ic;
      b.addEventListener("click", (e) => e.stopPropagation());
      foot.appendChild(b);
    });
    return foot;
  }

  function makeManageList(items, opts = {}) {
    const page = document.createElement("div");
    page.className = "cs-list-page";
    if (opts.search !== false) {
      const tools = document.createElement("div");
      tools.className = "cs-list-tools";
      const sw = document.createElement("div");
      sw.className = "cs-list-search";
      sw.innerHTML = `<img class="sym" src="assets/actions/search-symbolic.svg" alt="" width="14" height="14" draggable="false" /><input type="search" aria-label="Search" />`;
      tools.appendChild(sw);
      page.appendChild(tools);
    }
    const list = document.createElement("div");
    list.className = "cs-list";
    let selected = items.findIndex((it) => it.selected) ;
    if (selected < 0) selected = 0;

    items.forEach((it, idx) => {
      const row = document.createElement("div");
      row.className = "cs-list-item" + (idx === selected ? " is-selected" : "");
      row.innerHTML = `
        <div class="cs-list-check">${it.enabled ? "✓" : ""}</div>
        <div class="cs-list-icon">${it.icon || "📦"}</div>
        <div class="cs-list-text">
          <div class="cs-list-title">${it.name}</div>
          ${it.id ? `<div class="cs-list-id">${it.id}</div>` : ""}
          ${it.desc ? `<div class="cs-list-sub">${it.desc}</div>` : ""}
        </div>
        <div class="cs-list-actions">
          <span title="System">🔒</span>
          ${it.config ? `<button type="button" title="Configure">⚙</button>` : ""}
        </div>`;
      row.addEventListener("click", (e) => {
        e.stopPropagation();
        list.querySelectorAll(".cs-list-item").forEach((r) => r.classList.remove("is-selected"));
        row.classList.add("is-selected");
      });
      list.appendChild(row);
    });
    page.appendChild(list);
    page.appendChild(makeListFoot(opts.foot || ["+", "−", "✕", "↺", "ℹ"]));
    return page;
  }

  function panelRoot(wide) {
    const panel = document.createElement("div");
    panel.className = "cs-panel" + (wide ? " cs-panel-wide" : "");
    return panel;
  }

  /* ---- Module page builders ---- */
  const WALLPAPERS = [
    { id: "cinnamon", name: "Cinnamon", author: "Linux Mint", res: "2560×1707", bg: "url('assets/wallpapers/cinnamon-wallpaper.jpg') center/cover", url: "assets/wallpapers/cinnamon-wallpaper.jpg" },
    { id: "xmas", name: "Xmas Bokeh", author: "Jan Vasek", res: "3840×2160", bg: "radial-gradient(circle at 30% 40%, #f5d76e, #c0392b 40%, #1a1a2e)" },
    { id: "confetti", name: "Confetti", author: "Jason Leung", res: "4290×2860", bg: "radial-gradient(circle, #4fc3f7, #0288d1 50%, #01579b)" },
    { id: "building", name: "Building", author: "Jigar Panchal", res: "9600×5400", bg: "linear-gradient(135deg,#0d1b2a,#1b4965,#62b6cb)" },
    { id: "city", name: "City", author: "Jigar Panchal", res: "9600×6000", bg: "linear-gradient(160deg,#1a1a2e,#16213e,#0f3460)" },
    { id: "cpu", name: "CPU", author: "Jigar Panchal", res: "7680×4320", bg: "radial-gradient(circle at 50% 50%, #4a90d9, #0a1628 70%)" },
    { id: "cubes", name: "Cubes", author: "Jigar Panchal", res: "7680×4320", bg: "linear-gradient(135deg,#6a1b9a,#9c27b0,#e1bee7)" },
    { id: "curves", name: "Curves", author: "Jigar Panchal", res: "5120×2880", bg: "linear-gradient(120deg,#e74c3c,#3498db,#9b59b6)" },
    { id: "gold", name: "Gold", author: "Jigar Panchal", res: "9600×5400", bg: "linear-gradient(135deg,#d4af37,#f5e6c8,#8b7355)" },
    { id: "hearts", name: "Hearts", author: "Jigar Panchal", res: "9600×5400", bg: "radial-gradient(circle,#e74c3c,#922b21)" },
    { id: "pipes", name: "Pipes", author: "Jigar Panchal", res: "9600×5400", bg: "linear-gradient(45deg,#2c3e50,#3498db,#1abc9c)" },
    { id: "square", name: "Square", author: "Jigar Panchal", res: "9600×5400", bg: "radial-gradient(circle,#c0392b 20%,#1a1a1a 21%)" },
  ];

  function pageBackgrounds() {
    const panel = panelRoot(true);
    const tabs = makeTabs(
      ["images", "settings"],
      ["Images", "Settings"],
      (tab) => {
        if (tab === "settings") {
          const p = document.createElement("div");
          p.className = "cs-panel";
          p.appendChild(
            makeSection(
              "Background settings",
              makeCard([
                makeRow("Picture aspect", null, makeSelect(["Zoom", "Centered", "Scaled", "Stretched", "Spanned"], "Zoom", () => {})),
                makeRow("Background color", null, (() => {
                  const s = document.createElement("span");
                  s.className = "cs-swatch";
                  return s;
                })()),
              ])
            )
          );
          return p;
        }
        const layout = document.createElement("div");
        layout.className = "cs-bg-layout";
        const side = document.createElement("div");
        side.className = "cs-bg-side";
        const list = document.createElement("div");
        list.className = "cs-bg-side-list";
        const cats = [
          { id: "mint", label: "Linux Mint", icon: "🍃" },
          { id: "wallpapers", label: "Wallpapers", icon: "🖼" },
          { id: "pictures", label: "Pictures", icon: "📁" },
        ];
        cats.forEach((c) => {
          const b = document.createElement("button");
          b.type = "button";
          b.className = "cs-bg-cat" + (csState.bgCat === c.id ? " is-active" : "");
          b.innerHTML = `<span class="cs-bg-cat-icon">${c.icon}</span>${c.label}`;
          b.addEventListener("click", (e) => {
            e.stopPropagation();
            csState.bgCat = c.id;
            renderSettings();
          });
          list.appendChild(b);
        });
        const foot = document.createElement("div");
        foot.className = "cs-bg-side-foot";
        foot.innerHTML = `<button type="button">+</button><button type="button">−</button>`;
        side.append(list, foot);

        const main = document.createElement("div");
        main.className = "cs-bg-main";
        const grid = document.createElement("div");
        grid.className = "cs-wallpaper-grid";
        const items =
          csState.bgCat === "pictures"
            ? [{ id: "photo", name: "Photo", author: "Pictures", res: "—", bg: "url('assets/thumbnails/photo.jpg') center/cover" }]
            : csState.bgCat === "mint"
              ? WALLPAPERS.slice(0, 4)
              : WALLPAPERS;
        items.forEach((w) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "cs-wallpaper" + (csState.wallpaper === w.id ? " selected" : "");
          btn.innerHTML = `<div class="cs-wallpaper-thumb" style="background:${w.bg}"></div>
            <div class="cs-wallpaper-meta"><strong>${w.name}</strong><span>${w.author}<br>${w.res}</span></div>`;
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            csState.wallpaper = w.id;
            const desk = document.querySelector(".wallpaper") || document.querySelector(".desktop");
            if (desk) {
              if (w.url) {
                desk.style.backgroundImage = `url("${w.url}")`;
                desk.style.backgroundSize = "cover";
                desk.style.backgroundPosition = "center";
              } else if (w.bg && w.bg.startsWith("url(") === false) {
                desk.style.backgroundImage = w.bg;
                desk.style.backgroundSize = "cover";
              }
            }
            renderSettings();
          });
          grid.appendChild(btn);
        });
        main.appendChild(grid);
        layout.append(side, main);
        return layout;
      },
      "backgrounds"
    );
    panel.appendChild(tabs);
    return panel;
  }

  function pageEffects() {
    const p = panelRoot();
    const top = document.createElement("div");
    top.className = "cs-top-toggle";
    top.innerHTML = `<span>Desktop and window effects</span>`;
    top.appendChild(makeSwitch(csState.effects, (v) => { csState.effects = v; }));
    p.appendChild(top);

    const card = makeCard([
      makeRow("Effects on dialog boxes", null, makeSwitch(csState.effectsDialog, (v) => { csState.effectsDialog = v; })),
      makeRow("Effects on menus", null, makeSwitch(csState.effectsMenus, (v) => { csState.effectsMenus = v; })),
      makeRow("Session startup animation", null, makeSwitch(csState.effectsStartup, (v) => { csState.effectsStartup = v; })),
      makeRow("Fade effect on Cinnamon scrollboxes (like the Menu application list)", null, makeSwitch(csState.effectsFade, (v) => { csState.effectsFade = v; })),
      makeRow("Window effects", null, makeSwitch(csState.effectsWindows, (v) => { csState.effectsWindows = v; })),
      makeRow("New windows or unminimizing existing ones", null, makeSelect(["Traditional", "Fade", "Fly"], csState.effectsNew, (v) => { csState.effectsNew = v; })),
      makeRow("Closing windows", null, makeSelect(["Traditional", "Fade", "Fly"], csState.effectsClose, (v) => { csState.effectsClose = v; })),
      makeRow("Minimizing windows", null, makeSelect(["Traditional", "Fade", "Fly"], csState.effectsMin, (v) => { csState.effectsMin = v; })),
      makeRow("Resizing and tiling windows", null, makeSwitch(csState.effectsResize, (v) => { csState.effectsResize = v; })),
    ]);
    card.appendChild(
      makeSlider(csState.animSpeed, 0, 100, "Slower", "Faster", (v) => { csState.animSpeed = v; }, "Window animation speed")
    );
    p.appendChild(card);
    return p;
  }

  function pageFonts() {
    const p = panelRoot();
    const mkFont = (key) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cs-font-btn";
      b.textContent = csState.fonts[key];
      b.addEventListener("click", (e) => e.stopPropagation());
      return b;
    };
    p.appendChild(
      makeSection(
        "Font Selection",
        makeCard([
          makeRow("Default font", null, mkFont("default")),
          makeRow("Desktop font", null, mkFont("desktop")),
          makeRow("Document font", null, mkFont("document")),
          makeRow("Monospace font", null, mkFont("mono")),
          makeRow("Window title font", null, mkFont("title")),
        ])
      )
    );
    p.appendChild(
      makeSection(
        "Font Settings",
        makeCard([
          makeRow("Text scaling factor", null, makeStepper(csState.fonts.scale, 0.5, 3, 0.1, (v) => { csState.fonts.scale = Math.round(v * 10) / 10; })),
          makeRow("Hinting", null, makeSelect(["None", "Slight", "Medium", "Full"], csState.fonts.hinting, (v) => { csState.fonts.hinting = v; })),
          makeRow("Antialiasing", null, makeSelect(["None", "Grayscale", "Rgba"], csState.fonts.aa, (v) => { csState.fonts.aa = v; })),
          makeRow("RGBA Order", null, makeSelect(["RGB", "BGR", "VRGB", "VBGR"], csState.fonts.rgba, (v) => { csState.fonts.rgba = v; })),
        ])
      )
    );
    return p;
  }

  function pageThemes() {
    const p = panelRoot();
    const form = document.createElement("div");
    form.className = "cs-theme-form";

    const styleRow = document.createElement("div");
    styleRow.className = "cs-theme-row";
    styleRow.innerHTML = `<label>Style</label>`;
    const styleWrap = document.createElement("div");
    styleWrap.appendChild(
      makeSelect(["Mint-Y", "Mint-Y-Orange", "Mint-X", "Mint-L", "Adwaita"], csState.style, (v) => { csState.style = v; })
    );
    styleWrap.querySelector("select").style.width = "100%";
    styleWrap.querySelector("select").style.maxWidth = "100%";
    styleRow.appendChild(styleWrap);
    form.appendChild(styleRow);

    const appRow = document.createElement("div");
    appRow.className = "cs-theme-row";
    appRow.innerHTML = `<label>Appearance</label>`;
    const cards = document.createElement("div");
    cards.className = "cs-appearance-cards";
    [
      ["mixed", "Mixed"],
      ["dark", "Dark"],
      ["light", "Light"],
    ].forEach(([mode, label]) => {
      const c = document.createElement("button");
      c.type = "button";
      c.className = "cs-app-card" + (csState.appearance === mode ? " is-selected" : "");
      c.dataset.mode = mode;
      c.innerHTML = `<div class="cs-app-preview"><i></i><i></i></div>${label}`;
      c.addEventListener("click", (e) => {
        e.stopPropagation();
        csState.appearance = mode;
        renderSettings();
      });
      cards.appendChild(c);
    });
    const col = document.createElement("div");
    col.appendChild(cards);
    const hint = document.createElement("div");
    hint.className = "cs-section-hint";
    hint.style.marginTop = "10px";
    hint.textContent =
      csState.appearance === "mixed"
        ? "In mixed mode most applications are light. Some desktop elements are dark to create contrast."
        : csState.appearance === "dark"
          ? "Dark mode uses dark colors for applications and the desktop."
          : "Light mode uses light colors for applications and the desktop.";
    col.appendChild(hint);
    appRow.appendChild(col);
    form.appendChild(appRow);

    const colorRow = document.createElement("div");
    colorRow.className = "cs-theme-row";
    colorRow.innerHTML = `<label>Color</label>`;
    const dots = document.createElement("div");
    dots.className = "cs-color-dots";
    const colors = [
      "#2196F3", "#5C6BC0", "#FFB300", "#26C6DA", "#26A69A", "#00BCD4",
      "#e35d04", "#A1887F", "#78909C", "#FF7043", "#EF5350", "#EC407A", "#AB47BC",
    ];
    colors.forEach((c) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "cs-color-dot" + (csState.accent === c ? " is-selected" : "");
      d.style.background = c;
      d.addEventListener("click", (e) => {
        e.stopPropagation();
        csState.accent = c;
        renderSettings();
      });
      dots.appendChild(d);
    });
    colorRow.appendChild(dots);
    form.appendChild(colorRow);

    const adv = document.createElement("div");
    adv.style.cssText = "display:flex;justify-content:flex-end;margin-top:8px";
    adv.appendChild(makeBtn("Advanced settings…"));
    form.appendChild(adv);

    p.appendChild(form);
    return p;
  }

  function pageAccessibility() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["visual", "keyboard", "typing", "mouse"],
        ["Visual", "Keyboard", "Typing Assistive", "Mouse"],
        (tab) => {
          const box = document.createElement("div");
          if (tab === "visual") {
            box.appendChild(
              makeSection(
                "Visual Aids",
                makeCard([
                  makeRow("High contrast", null, makeSwitch(false, () => {})),
                  makeRow("Large text", null, makeSwitch(false, () => {})),
                  makeRow("Screen reader", null, makeSwitch(false, () => {})),
                ])
              )
            );
            box.appendChild(
              makeSection("Desktop Zoom", makeCard([makeRow("Enable zoom", null, makeSwitch(false, () => {}))]))
            );
          } else if (tab === "keyboard") {
            box.appendChild(
              makeSection(
                "Keyboard",
                makeCard([
                  makeRow("Sticky keys", null, makeSwitch(false, () => {})),
                  makeRow("Slow keys", null, makeSwitch(false, () => {})),
                  makeRow("Bounce keys", null, makeSwitch(false, () => {})),
                ])
              )
            );
          } else if (tab === "typing") {
            box.appendChild(
              makeSection(
                "Typing Assistive",
                makeCard([
                  makeRow("Screen keyboard", null, makeSwitch(false, () => {})),
                  makeRow("Repeat keys", null, makeSwitch(true, () => {})),
                ])
              )
            );
          } else {
            const mouseCard = makeCard([
              makeRow("Mouse keys", null, makeSwitch(false, () => {})),
              makeRow("Locate pointer", null, makeSwitch(false, () => {})),
            ]);
            mouseCard.appendChild(makeSlider(40, 0, 100, "Short", "Long", () => {}, "Double-click delay"));
            box.appendChild(makeSection("Mouse", mouseCard));
          }
          return box;
        },
        "accessibility"
      )
    );
    return p;
  }

  function pageAccount() {
    const p = panelRoot();
    const face = document.createElement("img");
    face.className = "cs-face-img";
    face.src = RS + "cs-user.png";
    face.alt = "";
    face.draggable = false;
    p.appendChild(
      makeSection(
        "Account details",
        makeCard([
          makeRow("Picture", null, face),
          makeRowValue("Name", "Leon"),
          makeRowValue("Password", "••••••"),
        ])
      )
    );
    return p;
  }

  function pageActions() {
    const p = panelRoot(true);
    p.appendChild(
      makeTabs(
        ["manage", "download", "layout"],
        ["Manage", "Download", "Layout"],
        (tab) => {
          if (tab !== "manage") {
            return makeEmpty("⬇", tab === "download" ? "Download actions" : "Layout", "Browse cinnamon-spices.linuxmint.com for more.");
          }
          return makeManageList([
            { name: "Add Desklets", id: "add-desklets", desc: "Add Cinnamon desklets", enabled: true, icon: "◻" },
            { name: "Change Desktop Background", id: "change-background", desc: "Change the Cinnamon desktop background", enabled: true, icon: "🖼" },
            { name: "Create a new launcher here…", id: "90_new-launcher", desc: "Create a new launcher in this folder", enabled: true, icon: "+" },
            { name: "Display Settings", id: "set-resolution", desc: "Change the resolution", enabled: true, icon: "🖥" },
            { name: "Format", id: "mintstickformat", desc: "Format a USB stick", enabled: true, icon: "✕" },
            { name: "Make bootable USB stick", id: "mintstick", desc: "Make a bootable USB stick", enabled: true, icon: "🔌" },
            { name: "Mount archive", id: "mount-archive", desc: "Mount archive files", enabled: true, icon: "📦" },
          ]);
        },
        "actions"
      )
    );
    return p;
  }

  function pageApplets() {
    const p = panelRoot(true);
    p.appendChild(
      makeTabs(
        ["manage", "download"],
        ["Manage", "Download"],
        (tab) => {
          if (tab === "download") return makeEmpty("⬇", "Download applets", "Find more applets online.");
          return makeManageList([
            { name: "Accessibility", id: "a11y@cinnamon.org", desc: "Accessibility applet", enabled: false, icon: "♿", config: false },
            { name: "Calendar", id: "calendar@cinnamon.org", desc: "The Cinnamon calendar applet", enabled: true, icon: "📅", config: true, selected: true },
            { name: "Corner bar", id: "cornerbar@cinnamon.org", desc: "A bar designed to be placed in the corner, used to show the desktop, desklets, the workspace selector or the window selector.", enabled: true, icon: "▣", config: true },
            { name: "Display", id: "xrandr@cinnamon.org", desc: "XRandR monitor control applet", enabled: false, icon: "🖥", config: false },
            { name: "Expo", id: "expo@cinnamon.org", desc: "Click or hover to activate Expo view", enabled: false, icon: "▦", config: true },
            { name: "Favorites", id: "favorites@cinnamon.org", desc: "Access your favorite files", enabled: true, icon: "⭐", config: true },
            { name: "Grouped window list", id: "grouped-window-list@cinnamon.org", desc: "Window list with grouping", enabled: true, icon: "🗔", config: true },
          ]);
        },
        "applets"
      )
    );
    return p;
  }

  function pageDateTime() {
    const p = panelRoot();
    const card = document.createElement("div");
    card.className = "cs-card";
    const map = document.createElement("div");
    map.className = "cs-map";
    map.innerHTML = `<div class="cs-map-land"></div><div class="cs-map-pin"></div>`;
    card.appendChild(map);
    const fields = document.createElement("div");
    fields.className = "cs-inline-fields";
    fields.innerHTML = `<label>Region</label>`;
    fields.appendChild(makeSelect(["Africa", "America", "Asia", "Europe", "Pacific"], "America", () => {}));
    const cityLab = document.createElement("label");
    cityLab.textContent = "City";
    fields.appendChild(cityLab);
    fields.appendChild(makeSelect(["New York", "Chicago", "Los Angeles", "Toronto"], "New York", () => {}));
    card.appendChild(fields);
    card.appendChild(makeRow("Network time", null, makeSwitch(true, () => {})));
    p.appendChild(makeSection("Date and Time", card));
    p.appendChild(
      makeSection(
        "Format",
        makeCard([
          makeRow("Use 24h clock", null, makeSwitch(true, () => {})),
          makeRow("Display the date", null, makeSwitch(false, () => {})),
          makeRow("Display seconds", null, makeSwitch(false, () => {})),
          makeRow("First day of week", null, makeSelect(["Use locale default", "Sunday", "Monday"], "Use locale default", () => {})),
        ])
      )
    );
    return p;
  }

  function pageDesklets() {
    const p = panelRoot(true);
    p.appendChild(
      makeTabs(
        ["manage", "download", "general"],
        ["Manage", "Download", "General Settings"],
        (tab) => {
          if (tab === "download") return makeEmpty("⬇", "Download desklets", "Find more desklets online.");
          if (tab === "general") {
            const box = document.createElement("div");
            box.className = "cs-panel";
            box.appendChild(
              makeSection(
                "General Settings",
                makeCard([
                  makeRow("Decorations", null, makeSelect(["No decoration", "Border only", "Border and header"], "No decoration", () => {})),
                  makeRow("Snap to grid", null, makeSwitch(false, () => {})),
                ])
              )
            );
            return box;
          }
          return makeManageList([
            { name: "Clock desklet", id: "clock@cinnamon.org", desc: "A desklet that displays the time", enabled: false, icon: "📅", config: true },
            { name: "Digital photo frame", id: "photoframe@cinnamon.org", desc: "A digital photo frame desklet", enabled: false, icon: "📷", config: true },
            { name: "Launcher desklet", id: "launcher@cinnamon.org", desc: "A desklet that launches a program", enabled: false, icon: "🚀", config: false },
          ], { foot: ["+", "−", "✕", "↺", "ℹ"] });
        },
        "desklets"
      )
    );
    return p;
  }

  function pageDesktop() {
    const p = panelRoot();
    const layoutRow = document.createElement("div");
    layoutRow.className = "cs-top-toggle";
    layoutRow.style.paddingBottom = "8px";
    layoutRow.innerHTML = `<span style="font-weight:600">Desktop Layout</span>`;
    layoutRow.appendChild(
      makeSelect(
        ["Show desktop icons on primary monitor only", "Show desktop icons on all monitors", "Do not show desktop icons"],
        csState.desktopLayout,
        (v) => { csState.desktopLayout = v; }
      )
    );
    p.appendChild(layoutRow);
    p.appendChild(
      makeSection(
        "Desktop Icons",
        makeCard([
          makeRow("Computer", null, makeSwitch(csState.desktopComputer, (v) => { csState.desktopComputer = v; })),
          makeRow("Home", null, makeSwitch(csState.desktopHome, (v) => { csState.desktopHome = v; })),
          makeRow("Trash", null, makeSwitch(csState.desktopTrash, (v) => { csState.desktopTrash = v; })),
          makeRow("Mounted Drives", null, makeSwitch(csState.desktopMounted, (v) => { csState.desktopMounted = v; })),
          makeRow("Network", null, makeSwitch(csState.desktopNetwork, (v) => { csState.desktopNetwork = v; })),
        ])
      )
    );
    p.appendChild(
      makeSection(
        "Options",
        makeCard([makeRow("Show icons from missing monitors", null, makeSwitch(csState.desktopMissing, (v) => { csState.desktopMissing = v; }))])
      )
    );
    return p;
  }

  function pageExtensions() {
    const p = panelRoot(true);
    p.appendChild(
      makeTabs(
        ["manage", "download"],
        ["Manage", "Download"],
        (tab) => {
          if (tab === "download") return makeEmpty("⬇", "Download extensions", "No extensions installed yet.");
          const page = document.createElement("div");
          page.className = "cs-list-page";
          const tools = document.createElement("div");
          tools.className = "cs-list-tools";
          tools.innerHTML = `<div class="cs-list-search"><img class="sym" src="assets/actions/search-symbolic.svg" alt="" width="14" height="14" draggable="false" /><input type="search" /></div>`;
          page.appendChild(tools);
          const empty = document.createElement("div");
          empty.className = "cs-list-empty-area";
          page.appendChild(empty);
          page.appendChild(makeListFoot(["+", "−", "✕", "↺", "ℹ"]));
          return page;
        },
        "extensions"
      )
    );
    return p;
  }

  function pageGeneral() {
    const p = panelRoot();
    p.appendChild(
      makeSection(
        "Compositor Options",
        makeCard([makeRow("Disable compositing for full-screen windows", null, makeSwitch(csState.generalCompositor, (v) => { csState.generalCompositor = v; }))])
      )
    );
    p.appendChild(
      makeSection(
        "Miscellaneous Options",
        makeCard([makeRow("Enable timer when logging out or shutting down", null, makeSwitch(csState.generalTimer, (v) => { csState.generalTimer = v; }))])
      )
    );
    p.appendChild(
      makeSection(
        "Memory limit",
        makeCard([
          makeRow("Restart Cinnamon when it uses too much memory", null, makeSwitch(csState.generalMemLimit, (v) => { csState.generalMemLimit = v; })),
          makeRow("Memory limit (MB)", null, makeStepper(csState.generalMemMb, 512, 8192, 256, (v) => { csState.generalMemMb = v; })),
          makeRow("Check frequency (seconds)", null, makeStepper(csState.generalCheckSec, 30, 3600, 30, (v) => { csState.generalCheckSec = v; })),
        ])
      )
    );
    return p;
  }

  function pageGestures() {
    const p = panelRoot();
    const sw = makeSwitch(csState.gestures, (v) => {
      csState.gestures = v;
      renderSettings();
    });
    p.appendChild(
      makeEmpty(
        "👆̸",
        csState.gestures ? "Gestures are enabled" : "Gestures are disabled",
        csState.gestures ? "Configure touchpad gestures below." : null,
        sw
      )
    );
    return p;
  }

  function pageHotCorners() {
    const p = panelRoot();
    const layout = document.createElement("div");
    layout.className = "cs-hotcorners";
    const left = document.createElement("div");
    left.className = "cs-hc-col";
    const right = document.createElement("div");
    right.className = "cs-hc-col";
    const preview = document.createElement("div");
    preview.className = "cs-hc-preview";
    preview.innerHTML = "<i></i><b></b>";

    const mkCorner = (idx) => {
      const block = document.createElement("div");
      block.className = "cs-hc-block";
      const head = document.createElement("div");
      head.className = "cs-hc-head";
      head.innerHTML = `<span>Enable this corner</span>`;
      head.appendChild(
        makeSwitch(csState.hotcorners[idx].on, (v) => { csState.hotcorners[idx].on = v; })
      );
      block.appendChild(head);
      block.appendChild(
        makeSelect(
          ["Show all workspaces", "Show all windows", "Show the desktop", "Run a command", "Nothing"],
          csState.hotcorners[idx].action,
          (v) => { csState.hotcorners[idx].action = v; }
        )
      );
      const delay = document.createElement("div");
      delay.style.cssText = "display:flex;align-items:center;gap:8px;font-size:13px";
      delay.innerHTML = `<span style="flex:1">Activation delay (ms)</span>`;
      delay.appendChild(
        makeStepper(csState.hotcorners[idx].delay, 0, 2000, 50, (v) => { csState.hotcorners[idx].delay = v; })
      );
      block.appendChild(delay);
      return block;
    };

    left.append(mkCorner(0), mkCorner(2));
    right.append(mkCorner(1), mkCorner(3));
    layout.append(left, preview, right);
    p.appendChild(layout);

    const fs = document.createElement("div");
    fs.className = "cs-top-toggle";
    fs.style.marginTop = "18px";
    fs.innerHTML = `<span>Allow hot corners in fullscreen.</span>`;
    fs.appendChild(makeSwitch(csState.hotcornersFs, (v) => { csState.hotcornersFs = v; }));
    p.appendChild(fs);
    return p;
  }

  function pageNightLight() {
    const p = panelRoot();
    const card = makeCard([
      makeRow("Enable night light", null, makeSwitch(csState.nightLight, (v) => { csState.nightLight = v; })),
    ]);
    card.appendChild(
      makeSlider(csState.nightTemp, 0, 100, "", "", (v) => { csState.nightTemp = v; }, "Color temperature", "temp")
    );
    const prev = document.createElement("div");
    prev.className = "cs-row";
    prev.appendChild(makeBtn("Click to preview", { block: true }));
    prev.querySelector("button").style.width = "100%";
    card.appendChild(prev);
    p.appendChild(card);
    p.appendChild(
      makeSection(
        null,
        makeCard([makeRow("Schedule", null, makeSelect(["Automatic", "Manual", "Always on"], csState.nightSchedule, (v) => { csState.nightSchedule = v; }))])
      )
    );
    // spacing between cards
    p.children[0].style.marginBottom = "14px";
    return p;
  }

  function pageNotifications() {
    const p = panelRoot();
    p.appendChild(
      makeSection(
        "Notification settings",
        makeCard([
          makeRow("Enable notifications", null, makeSwitch(csState.notifications, (v) => { csState.notifications = v; })),
          makeRow("Remove notifications after their timeout is reached", null, makeSwitch(csState.notifTimeout, (v) => { csState.notifTimeout = v; })),
          makeRow("Show notifications on the bottom side of the screen", null, makeSwitch(csState.notifBottom, (v) => { csState.notifBottom = v; })),
          makeRow("Monitor to use for displaying notifications", null, makeSelect(["Primary monitor", "Monitor 1", "Monitor 2"], "Primary monitor", () => {})),
          makeRow("Display notifications over fullscreen windows", null, makeSwitch(csState.notifFullscreen, (v) => { csState.notifFullscreen = v; })),
          makeRow("Notification duration (seconds)", null, makeStepper(csState.notifDuration, 1, 30, 1, (v) => { csState.notifDuration = v; })),
          (() => {
            const r = document.createElement("div");
            r.className = "cs-row";
            r.appendChild(makeBtn("Display a test notification", { block: true }));
            r.querySelector("button").style.width = "100%";
            return r;
          })(),
        ])
      )
    );
    p.appendChild(
      makeSection(
        "Media keys OSD",
        makeCard([makeRow("Show media keys OSD", null, makeSwitch(csState.mediaOsd, (v) => { csState.mediaOsd = v; }))])
      )
    );
    return p;
  }

  function pagePanel() {
    const p = panelRoot();
    const nav = document.createElement("div");
    nav.className = "cs-btn-row spread";
    nav.style.marginBottom = "12px";
    nav.append(makeBtn("Previous panel", { disabled: true }), makeBtn("Next panel", { disabled: true }));
    p.appendChild(nav);
    p.appendChild(
      makeSection(
        "Panel Visibility",
        makeCard([makeRow("Auto-hide panel", null, makeSelect(["Always show panel", "Auto hide panel", "Intelligently hide panel"], csState.panelAutoHide, (v) => { csState.panelAutoHide = v; }))])
      )
    );
    const custom = makeSection("Customize", makeCard([]));
    custom.querySelector(".cs-card").appendChild(
      makeSlider(csState.panelHeight, 20, 60, "Smaller", "Larger", (v) => { csState.panelHeight = v; }, "Panel height: " + csState.panelHeight)
    );
    p.appendChild(custom);
    p.appendChild(
      makeSection(
        "Panel appearance",
        makeCard([
          (() => {
            const r = document.createElement("div");
            r.className = "cs-row";
            const tabs = document.createElement("div");
            tabs.className = "cs-tabs";
            tabs.style.margin = "0";
            ["Left Zone", "Center Zone", "Right Zone"].forEach((t, i) => {
              const b = document.createElement("button");
              b.type = "button";
              b.className = "cs-tab" + (i === 0 ? " is-active" : "");
              b.textContent = t;
              b.setAttribute("aria-selected", i === 0 ? "true" : "false");
              b.addEventListener("click", (e) => {
                e.stopPropagation();
                tabs.querySelectorAll(".cs-tab").forEach((x) => {
                  x.classList.remove("is-active");
                  x.setAttribute("aria-selected", "false");
                });
                b.classList.add("is-active");
                b.setAttribute("aria-selected", "true");
              });
              tabs.appendChild(b);
            });
            r.appendChild(tabs);
            return r;
          })(),
          makeRow("Font size", null, makeSelect(["Allow theme to determine font size", "Custom"], "Allow theme to determine font size", () => {})),
          makeRow("Colored icon size", null, makeSelect(["Scale to panel size optimally", "Custom"], "Scale to panel size optimally", () => {})),
          makeRow("Symbolic icon size (px)", null, makeStepper(csState.symbolicIcon, 8, 64, 1, (v) => { csState.symbolicIcon = v; })),
        ])
      )
    );
    p.appendChild(
      makeSection(
        "General Panel Options",
        makeCard([
          (() => {
            const r = document.createElement("div");
            r.className = "cs-row";
            const wrap = document.createElement("div");
            wrap.className = "cs-row-controls";
            wrap.style.width = "100%";
            wrap.style.justifyContent = "space-between";
            wrap.append(makeBtn("Add new panel"), makeBtn("Panel edit mode"));
            r.appendChild(wrap);
            return r;
          })(),
          makeRow("Allow the pointer to pass through the edges of panels", null, makeSwitch(false, () => {})),
        ])
      )
    );
    return p;
  }

  function pagePreferred() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["apps", "media"],
        ["Preferred applications", "Removable media"],
        (tab) => {
          const box = document.createElement("div");
          if (tab === "media") {
            box.appendChild(
              makeSection(
                "Removable media",
                makeCard([
                  makeRow("Never prompt or start programs on media insertion", null, makeSwitch(false, () => {})),
                  makeRow("CD audio", null, makeSelect(["Ask what to do", "Do nothing", "Open folder"], "Ask what to do", () => {})),
                  makeRow("DVD video", null, makeSelect(["Ask what to do", "Do nothing", "Open folder"], "Ask what to do", () => {})),
                ])
              )
            );
            return box;
          }
          const pref = csState.preferred;
          box.appendChild(
            makeSection(
              "Internet",
              makeCard([
                makeRow("Web", null, makeSelect(["Firefox Web Browser", "Chromium", "Other…"], pref.web, (v) => { pref.web = v; })),
                makeRow("Mail", null, makeSelect(["Thunderbird Mail", "Evolution", "Other…"], pref.mail, (v) => { pref.mail = v; })),
              ])
            )
          );
          box.appendChild(
            makeSection(
              "Multimedia",
              makeCard([
                makeRow("Music", null, makeSelect(["Celluloid", "VLC", "Rhythmbox"], pref.music, (v) => { pref.music = v; })),
                makeRow("Video", null, makeSelect(["Celluloid", "VLC", "Totem"], pref.video, (v) => { pref.video = v; })),
                makeRow("Photos", null, makeSelect(["Image Viewer", "GIMP", "Pix"], pref.photos, (v) => { pref.photos = v; })),
              ])
            )
          );
          box.appendChild(
            makeSection(
              "Office",
              makeCard([
                makeRow("Word", null, makeSelect(["LibreOffice Writer", "OnlyOffice"], pref.word, (v) => { pref.word = v; })),
                makeRow("Spreadsheet", null, makeSelect(["LibreOffice Calc", "OnlyOffice"], pref.sheet, (v) => { pref.sheet = v; })),
                makeRow("PDF", null, makeSelect(["Document Viewer", "Firefox"], pref.pdf, (v) => { pref.pdf = v; })),
                makeRow("Source Code", null, makeSelect(["Text Editor", "VSCodium"], pref.code, (v) => { pref.code = v; })),
              ])
            )
          );
          return box;
        },
        "preferred"
      )
    );
    return p;
  }

  function pagePrivacy() {
    const p = panelRoot();
    const top = document.createElement("div");
    top.className = "cs-top-toggle";
    top.innerHTML = `<span>Remember recently accessed files</span>`;
    top.appendChild(makeSwitch(csState.rememberFiles, (v) => { csState.rememberFiles = v; }));
    p.appendChild(top);
    p.appendChild(
      makeSection(
        "Recent files",
        makeCard([
          makeRow("Never forget old files", null, makeSwitch(csState.neverForget, (v) => { csState.neverForget = v; })),
          makeRow("Number of days to remember old files", null, makeStepper(csState.rememberDays, 1, 365, 1, (v) => { csState.rememberDays = v; })),
        ])
      )
    );
    p.appendChild(
      makeSection(
        "Internet connectivity",
        makeCard([makeRow("Check connectivity", null, makeSwitch(csState.checkConnectivity, (v) => { csState.checkConnectivity = v; }))]),
        "Check that network connections can reach the Internet. This makes it possible to detect captive portals, but also generates periodic network traffic."
      )
    );
    return p;
  }

  function pageScreensaver() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["settings", "customize"],
        ["Settings", "Customize"],
        (tab) => {
          const box = document.createElement("div");
          if (tab === "customize") {
            box.appendChild(
              makeSection(
                "Customize",
                makeCard([
                  makeRow("Show clock on screensaver", null, makeSwitch(true, () => {})),
                  makeRow("Show album art", null, makeSwitch(false, () => {})),
                ])
              )
            );
            return box;
          }
          box.appendChild(
            makeSection(
              "Screensaver settings",
              makeCard([
                makeRow(
                  "Delay before starting the screensaver",
                  null,
                  makeSelect(["Never", "5 minutes", "10 minutes", "30 minutes", "1 hour"], csState.screensaverDelay, (v) => {
                    csState.screensaverDelay = v;
                  })
                ),
              ])
            )
          );
          box.appendChild(
            makeSection(
              "Lock settings",
              makeCard([
                makeRow("Lock the computer when put to sleep", null, makeSwitch(csState.lockSleep, (v) => { csState.lockSleep = v; })),
                makeRow("Lock the computer after the screensaver starts", null, makeSwitch(csState.lockSs, (v) => { csState.lockSs = v; })),
              ])
            )
          );
          return box;
        },
        "screensaver"
      )
    );
    return p;
  }

  function pageStartup() {
    const p = panelRoot(true);
    const page = document.createElement("div");
    page.className = "cs-list-page";
    page.style.padding = "8px 16px 0";
    const list = document.createElement("div");
    list.className = "cs-list";
    const apps = [
      { name: "Blueman Applet", desc: "Blueman Bluetooth Manager", on: true, delay: null, icon: "🔵" },
      { name: "Print Queue Applet", desc: "System tray icon for managing print jobs", on: true, delay: "30 s", icon: "🖨" },
      { name: "SSH Key Agent", desc: "GNOME Keyring: SSH Agent", on: true, delay: null, icon: "🔑" },
      { name: "Support for NVIDIA Prime", desc: "Shows a tray icon when a compatible NVIDIA Optimus graphics card is detected", on: true, delay: null, icon: "🟢" },
      { name: "System Reports", desc: "Troubleshoot problems", on: true, delay: "40 s", icon: "⚠" },
      { name: "Update Manager", desc: "Linux Mint Update Manager", on: true, delay: "20 s", icon: "🛡" },
      { name: "xapp-sn-watcher", desc: "A service that provides the org.kde.StatusNotifierWatcher interface for XApps", on: true, delay: null, icon: "⚙" },
    ];
    apps.forEach((a, i) => {
      const row = document.createElement("div");
      row.className = "cs-startup-item" + (i === 0 ? " is-selected" : "");
      row.innerHTML = `<div class="cs-list-icon">${a.icon}</div><div class="cs-list-text"><div class="cs-list-title">${a.name}</div><div class="cs-list-sub">${a.desc}</div></div>${
        a.delay ? `<span class="cs-startup-delay">Delay<br>${a.delay}</span>` : ""
      }`;
      const sw = makeSwitch(a.on, (v) => { a.on = v; });
      row.appendChild(sw);
      row.addEventListener("click", (e) => {
        if (e.target.closest(".cs-switch")) return;
        list.querySelectorAll(".cs-startup-item").forEach((r) => r.classList.remove("is-selected"));
        row.classList.add("is-selected");
      });
      list.appendChild(row);
    });
    page.appendChild(list);
    page.appendChild(makeListFoot(["+", "✎", "−", "▶"]));
    p.appendChild(page);
    return p;
  }

  function pageWindows() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["titlebar", "behavior", "alttab", "tiling"],
        ["Titlebar", "Behavior", "Alt-Tab", "Tiling"],
        (tab) => {
          const box = document.createElement("div");
          if (tab === "titlebar") {
            box.appendChild(
              makeSection(
                "Buttons",
                makeCard([makeRow("Buttons layout", null, makeSelect(["Right", "Left"], csState.windows.buttons, (v) => { csState.windows.buttons = v; }))])
              )
            );
            box.appendChild(
              makeSection(
                "Actions",
                makeCard([
                  makeRow("Action on title bar double-click", null, makeSelect(["Toggle Maximize", "Minimize", "Shade", "Nothing"], csState.windows.dbl, (v) => { csState.windows.dbl = v; })),
                  makeRow("Action on title bar middle-click", null, makeSelect(["Lower", "Minimize", "Close", "Nothing"], csState.windows.mid, (v) => { csState.windows.mid = v; })),
                  makeRow("Action on title bar right-click", null, makeSelect(["Menu", "Minimize", "Nothing"], csState.windows.right, (v) => { csState.windows.right = v; })),
                  makeRow("Action on title bar with mouse scroll", null, makeSelect(["Nothing", "Shade", "Opacity", "Adjust opacity"], csState.windows.scroll, (v) => { csState.windows.scroll = v; })),
                ])
              )
            );
          } else if (tab === "behavior") {
            box.appendChild(
              makeSection(
                "Window Behavior",
                makeCard([
                  makeRow("Attach dialog windows to the parent window", null, makeSwitch(true, () => {})),
                  makeRow("Automatic window tiling and snapping", null, makeSwitch(true, () => {})),
                  makeRow("Bring windows which require attention to the current workspace", null, makeSwitch(false, () => {})),
                ])
              )
            );
          } else if (tab === "alttab") {
            box.appendChild(
              makeSection(
                "Alt-Tab",
                makeCard([
                  makeRow("Alt-Tab switcher style", null, makeSelect(["Icons and thumbnails", "Icons only", "Thumbnails only", "Coverflow", "Timeline"], "Icons and thumbnails", () => {})),
                  makeRow("Display the alt-tab switcher on the primary monitor", null, makeSwitch(false, () => {})),
                ])
              )
            );
          } else {
            box.appendChild(
              makeSection(
                "Tiling",
                makeCard([
                  makeRow("Enable window tiling and snapping", null, makeSwitch(true, () => {})),
                  makeRow("Maximize, instead of tile, when dragging a window to the top edge", null, makeSwitch(true, () => {})),
                ])
              )
            );
          }
          return box;
        },
        "windows"
      )
    );
    return p;
  }

  function pageWorkspaces() {
    const p = panelRoot();
    p.appendChild(
      makeSection(
        "Workspace Options",
        makeCard([
          makeRow("Enable workspace OSD", null, makeSwitch(csState.workspaceOsd, (v) => { csState.workspaceOsd = v; })),
          makeRow("Allow cycling through workspaces", null, makeSwitch(csState.workspaceCycle, (v) => { csState.workspaceCycle = v; })),
          makeRow("Only use workspaces on primary monitor (requires Cinnamon restart)", null, makeSwitch(csState.workspacePrimary, (v) => { csState.workspacePrimary = v; })),
          makeRow("Display Expo view as a grid", null, makeSwitch(csState.expoGrid, (v) => { csState.expoGrid = v; })),
          makeRow("Always show Expo on the primary monitor", null, makeSwitch(csState.expoPrimary, (v) => { csState.expoPrimary = v; })),
        ])
      )
    );
    return p;
  }

  function pageDisplay() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["layout", "settings"],
        ["Layout", "Settings"],
        (tab) => {
          const box = document.createElement("div");
          if (tab === "settings") {
            box.appendChild(
              makeSection(
                "Settings",
                makeCard([
                  makeRow("Mirror displays", null, makeSwitch(false, () => {})),
                  makeRow("Detect displays", null, makeBtn("Detect Displays")),
                ])
              )
            );
            return box;
          }
          box.appendChild(makeSection("Layout", (() => {
            const wrap = document.createElement("div");
            const canvas = document.createElement("div");
            canvas.className = "cs-display-canvas";
            canvas.innerHTML = `<div class="cs-display-monitor"><span>1</span></div>`;
            wrap.appendChild(canvas);
            const card = makeCard([
              (() => {
                const r = document.createElement("div");
                r.className = "cs-row";
                r.innerHTML = `<div class="cs-row-text"><span class="cs-row-title"><span style="display:inline-block;width:12px;height:12px;background:#e07070;margin-right:8px;vertical-align:middle"></span>1  Built-in display</span></div>`;
                const ctrls = document.createElement("div");
                ctrls.className = "cs-row-controls";
                ctrls.append(makeBtn("Set as Primary"), makeSwitch(true, () => {}));
                r.appendChild(ctrls);
                return r;
              })(),
              makeRow("Resolution", null, makeSelect(["1366 × 768 (16:9)", "1920 × 1080 (16:9)", "1280 × 720 (16:9)"], "1366 × 768 (16:9)", () => {})),
              makeRow("Refresh Rate", null, makeSelect(["60.00 Hz", "59.94 Hz"], "60.00 Hz", () => {})),
              makeRow("Rotation", null, makeSelect(["Landscape", "Portrait Left", "Portrait Right", "Flipped"], "Landscape", () => {})),
              makeRowValue("User interface scale", "100 %"),
            ]);
            wrap.appendChild(card);
            const actions = document.createElement("div");
            actions.className = "cs-btn-row spread";
            actions.append(makeBtn("Reset to Defaults"), (() => {
              const g = document.createElement("div");
              g.style.display = "flex";
              g.style.gap = "8px";
              g.append(makeBtn("Cancel changes", { disabled: true }), makeBtn("Apply", { disabled: true }));
              return g;
            })());
            wrap.appendChild(actions);
            return wrap;
          })()));
          return box;
        },
        "display"
      )
    );
    return p;
  }

  function pageKeyboard() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["typing", "shortcuts", "layouts", "xkb"],
        ["Typing", "Shortcuts", "Layouts", "XKB Options"],
        (tab) => {
          const box = document.createElement("div");
          if (tab === "typing") {
            const card1 = makeCard([makeRow("Enable key repeat", null, makeSwitch(csState.enableKeyRepeat, (v) => { csState.enableKeyRepeat = v; }))]);
            card1.appendChild(makeSlider(30, 0, 100, "Short", "Long", () => {}, "Repeat delay:"));
            card1.appendChild(makeSlider(80, 0, 100, "Slow", "Fast", () => {}, "Repeat speed:"));
            box.appendChild(makeSection("Key repeat", card1));
            const card2 = makeCard([makeRow("Text cursor blinks", null, makeSwitch(csState.cursorBlink, (v) => { csState.cursorBlink = v; }))]);
            card2.appendChild(makeSlider(50, 0, 100, "Slow", "Fast", () => {}, "Blink speed:"));
            box.appendChild(makeSection("Text cursor", card2));
          } else if (tab === "shortcuts") {
            box.appendChild(
              makeSection(
                "Keyboard shortcuts",
                makeCard([
                  makeRowValue("General → Show the desktop", "Super+D"),
                  makeRowValue("Windows → Close window", "Alt+F4"),
                  makeRowValue("Workspaces → Switch to left workspace", "Ctrl+Alt+Left"),
                ])
              )
            );
          } else if (tab === "layouts") {
            box.appendChild(
              makeSection(
                "Keyboard layouts",
                makeCard([
                  makeRowValue("English (US)", "Default"),
                  makeRow("Add layout…", null, makeBtn("Add")),
                ])
              )
            );
          } else {
            box.appendChild(
              makeSection(
                "XKB Options",
                makeCard([
                  makeRow("Caps Lock behavior", null, makeSelect(["Disabled", "Caps Lock", "Swap with Ctrl"], "Disabled", () => {})),
                  makeRow("Alt/Win key behavior", null, makeSelect(["Default", "Meta is mapped to Win"], "Default", () => {})),
                ])
              )
            );
          }
          return box;
        },
        "keyboard"
      )
    );
    return p;
  }

  function pageMouse() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["mouse", "touchpad"],
        ["Mouse", "Touchpad"],
        (tab) => {
          const box = document.createElement("div");
          if (tab === "touchpad") {
            box.appendChild(
              makeSection(
                "Touchpad",
                makeCard([
                  makeRow("Enable touchpad", null, makeSwitch(true, () => {})),
                  makeRow("Tap to click", null, makeSwitch(true, () => {})),
                  makeRow("Two-finger scrolling", null, makeSwitch(true, () => {})),
                  makeRow("Natural scrolling", null, makeSwitch(false, () => {})),
                ])
              )
            );
            return box;
          }
          box.appendChild(
            makeSection(
              "General",
              makeCard([
                makeRow("Left handed (mouse buttons inverted)", null, makeSwitch(csState.leftHanded, (v) => { csState.leftHanded = v; })),
                makeRow("Reverse scrolling direction", null, makeSwitch(csState.reverseScroll, (v) => { csState.reverseScroll = v; })),
                makeRow("Show position of pointer when the Control key is pressed", null, makeSwitch(csState.showPointerCtrl, (v) => { csState.showPointerCtrl = v; })),
                makeRow("Emulate middle click by clicking both left and right buttons", null, makeSwitch(csState.emulateMiddle, (v) => { csState.emulateMiddle = v; })),
                makeRow("Paste the current selection when middle-click is pressed", null, makeSwitch(csState.pasteMiddle, (v) => { csState.pasteMiddle = v; })),
                makeRow("Drag-and-drop threshold (pixels)", null, makeStepper(csState.dndThreshold, 1, 50, 1, (v) => { csState.dndThreshold = v; })),
              ])
            )
          );
          const speed = makeCard([]);
          speed.appendChild(makeSlider(csState.mouseSize, 0, 100, "Smaller", "Larger", (v) => { csState.mouseSize = v; }, "Size"));
          speed.appendChild(makeSlider(csState.mouseSpeed, 0, 100, "Slower", "Faster", (v) => { csState.mouseSpeed = v; }, "Speed"));
          speed.appendChild(makeRow("Acceleration", null, makeSelect(["Device default", "Adaptive", "Flat"], csState.mouseAccel, (v) => { csState.mouseAccel = v; })));
          box.appendChild(makeSection("Pointer size and speed", speed));
          const dc = makeCard([]);
          dc.appendChild(makeSlider(csState.doubleClick, 0, 100, "Short", "Long", (v) => { csState.doubleClick = v; }, "Timeout"));
          box.appendChild(makeSection("Double-Click timeout", dc));
          return box;
        },
        "mouse"
      )
    );
    return p;
  }

  function pagePower() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["power", "batteries", "brightness"],
        ["Power", "Batteries", "Brightness"],
        (tab) => {
          const box = document.createElement("div");
          if (tab === "batteries") {
            box.appendChild(makeEmpty("🔋", "No batteries detected", "This device is using AC power."));
            return box;
          }
          if (tab === "brightness") {
            const c = makeCard([]);
            c.appendChild(makeSlider(70, 0, 100, "Dim", "Bright", () => {}, "Screen brightness"));
            box.appendChild(makeSection("Brightness", c));
            return box;
          }
          const pow = csState.power;
          const head = document.createElement("div");
          head.className = "cs-power-head";
          head.innerHTML = `<span></span><span>On A/C power</span><span>On battery power</span>`;
          const card = document.createElement("div");
          card.className = "cs-card";
          card.appendChild(head);
          const rows = [
            ["Turn off the screen when inactive for", "screenAc", "screenBat", ["Never", "5 minutes", "10 minutes", "30 minutes", "1 hour"]],
            ["Suspend when inactive for", "suspendAc", "suspendBat", ["Never", "15 minutes", "30 minutes", "1 hour"]],
            ["When the lid is closed", "lidAc", "lidBat", ["Suspend", "Hibernate", "Shutdown", "Do nothing"]],
          ];
          rows.forEach(([label, k1, k2, opts]) => {
            const r = document.createElement("div");
            r.className = "cs-power-row";
            const lab = document.createElement("span");
            lab.textContent = label;
            r.append(lab, makeSelect(opts, pow[k1], (v) => { pow[k1] = v; }), makeSelect(opts, pow[k2], (v) => { pow[k2] = v; }));
            card.appendChild(r);
          });
          box.appendChild(makeSection("Power options", card));
          box.appendChild(
            makeSection(
              "Extra options",
              makeCard([
                makeRow("When the power button is pressed", null, makeSelect(["Ask", "Suspend", "Shutdown", "Hibernate", "Do nothing"], pow.powerBtn, (v) => { pow.powerBtn = v; })),
                makeRow("Perform lid-closed action even with external monitors attached", null, makeSwitch(pow.lidExternal, (v) => { pow.lidExternal = v; })),
                makeRow("Power mode", null, makeSelect(["Power Saver", "Balanced", "Performance"], pow.powerMode, (v) => { pow.powerMode = v; })),
              ])
            )
          );
          return box;
        },
        "power"
      )
    );
    return p;
  }

  function pageSound() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["output", "input", "sounds", "apps"],
        ["Output", "Input", "Sounds", "Applications"],
        (tab) => {
          const box = document.createElement("div");
          if (tab === "input") {
            box.appendChild(makeSection("Input", makeCard([
              makeRow("Input volume", null, null),
            ])));
            const c = box.querySelector(".cs-card");
            c.appendChild(makeSlider(50, 0, 100, "Quieter", "Louder", () => {}, "Volume"));
            c.appendChild(makeRow("Mute", null, makeSwitch(false, () => {})));
            return box;
          }
          if (tab === "sounds") {
            box.appendChild(
              makeSection(
                "Sound Effects",
                makeCard([
                  makeRow("Play alert sound", null, makeSwitch(true, () => {})),
                  makeRow("Play sound on volume change", null, makeSwitch(true, () => {})),
                ])
              )
            );
            return box;
          }
          if (tab === "apps") {
            box.appendChild(makeEmpty("🔊", "No application is currently playing audio", null));
            return box;
          }
          const tile = document.createElement("div");
          tile.className = "cs-device-tile";
          tile.innerHTML = `<span class="big">🕪</span><span>Speakers<br>Built-in Audio</span>`;
          box.appendChild(makeSection("Device", tile));
          const card = makeCard([
            (() => {
              const r = document.createElement("div");
              r.className = "cs-row";
              r.innerHTML = `<div class="cs-row-text"><span class="cs-row-title">Output profile</span></div>`;
              const ctrls = document.createElement("div");
              ctrls.className = "cs-row-controls";
              ctrls.append(
                makeSelect(["Analog Stereo Output", "Analog Stereo Duplex", "Off"], "Analog Stereo Output", () => {}),
                makeBtn("Test sound")
              );
              r.appendChild(ctrls);
              return r;
            })(),
          ]);
          card.appendChild(makeSlider(csState.soundVol, 0, 100, "Softer", "Louder", (v) => { csState.soundVol = v; }, "Volume: " + csState.soundVol + "%"));
          card.appendChild(makeSlider(csState.soundBalance, 0, 100, "Left", "Right", (v) => { csState.soundBalance = v; }, "Balance"));
          card.appendChild(makeSlider(50, 0, 100, "Rear", "Front", () => {}, "Fade"));
          card.appendChild(makeSlider(0, 0, 100, "Soft", "Loud", () => {}, "Subwoofer"));
          card.appendChild(makeRow("Overamplification", null, makeSwitch(csState.overamp, (v) => { csState.overamp = v; })));
          box.appendChild(makeSection("Device settings", card));
          return box;
        },
        "sound"
      )
    );
    return p;
  }

  function pageThunderbolt() {
    return makeEmpty("⚠", "Thunderbolt or USB4 is not detected on your system.");
  }

  function pageInputMethod() {
    const p = panelRoot(true);
    const split = document.createElement("div");
    split.className = "cs-split";
    const side = document.createElement("div");
    side.className = "cs-split-side";
    const nav = document.createElement("div");
    nav.className = "cs-split-nav";
    const langs = ["Help", "Simplified Chinese", "Traditional Chinese", "Japanese", "Korean", "Thai", "Vietnamese", "Telugu"];
    langs.forEach((l, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cs-split-item" + (i === 0 ? " is-active" : "");
      b.innerHTML = `${i === 0 ? "📖" : "🏳️"} ${l}`;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.querySelectorAll(".cs-split-item").forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");
        main.innerHTML = i === 0
          ? `<h2 style="margin:0 0 12px;font-size:18px">Welcome</h2>
             <p style="color:#c8c8d0;line-height:1.5;font-size:13.5px">Input methods are used to write symbols and characters which are not present on the keyboard. They are useful to write in Chinese, Japanese, Korean, Thai, Vietnamese…</p>
             <p style="color:#c8c8d0;line-height:1.5;font-size:13.5px">To add support for a particular language, select it in the sidebar and follow the instructions.</p>`
          : `<h2 style="margin:0 0 12px;font-size:18px">${l}</h2>
             <p style="color:#c8c8d0;line-height:1.5;font-size:13.5px">Install input method packages for ${l} to type in this language.</p>
             <button type="button" class="cs-btn" style="margin-top:12px">Install</button>`;
      });
      nav.appendChild(b);
    });
    side.appendChild(nav);
    const main = document.createElement("div");
    main.className = "cs-split-main";
    main.innerHTML = `<h2 style="margin:0 0 12px;font-size:18px">Welcome</h2>
      <p style="color:#c8c8d0;line-height:1.5;font-size:13.5px">Input methods are used to write symbols and characters which are not present on the keyboard. They are useful to write in Chinese, Japanese, Korean, Thai, Vietnamese…</p>
      <p style="color:#c8c8d0;line-height:1.5;font-size:13.5px">To add support for a particular language, select it in the sidebar and follow the instructions.</p>`;
    split.append(side, main);
    p.appendChild(split);
    return p;
  }

  function pageLanguages() {
    const p = panelRoot();
    if (csTitle) csTitle.textContent = "Language Settings";
    const mkLangBtn = (label) => {
      const b = makeBtn("🇺🇸  " + label);
      b.style.minWidth = "200px";
      return b;
    };
    p.appendChild(
      makeCard([
        makeRow("Language", "Language, interface…", mkLangBtn("English, United States")),
        makeRow("Region", "Numbers, currency, addresses, measurement…", mkLangBtn("English, United States")),
        makeRow("Time format", "Date and time…", mkLangBtn("English, United States")),
        makeRow("System locale", "Language: English, United States\nRegion: No locale defined\nTime format: No locale defined", makeBtn("Apply System-Wide")),
        makeRow("Language support", "23 languages installed", makeBtn("Install / Remove Languages…")),
      ])
    );
    return p;
  }

  function pageOnline() {
    const p = panelRoot();
    const list = document.createElement("div");
    list.className = "cs-card";
    const providers = [
      { name: "Google", icon: "G", color: "#fff" },
      { name: "WebDAV", icon: "📅", color: "#fff" },
      { name: "Nextcloud", icon: "☁", color: "#0082c9" },
      { name: "Microsoft", icon: "⊞", color: "#fff" },
      { name: "Microsoft Exchange", icon: "📧", color: "#0078d4" },
      { name: "IMAP and SMTP", icon: "✉", color: "#fff" },
      { name: "Kerberos", icon: "🔑", color: "#fff" },
      { name: "Microsoft 365", icon: "👤", color: "#00a4ef" },
    ];
    const lab = document.createElement("div");
    lab.className = "cs-section-label";
    lab.textContent = "Providers";
    p.appendChild(lab);
    providers.forEach((pr) => {
      const row = document.createElement("div");
      row.className = "cs-provider";
      row.innerHTML = `<div class="cs-provider-icon" style="background:${pr.color}">${pr.icon}</div><span>${pr.name}</span>`;
      row.addEventListener("click", (e) => e.stopPropagation());
      list.appendChild(row);
    });
    p.appendChild(list);
    return p;
  }

  function pageBluetooth() {
    const p = panelRoot();
    if (csTitle) csTitle.textContent = "Bluetooth Devices";
    const menu = document.createElement("div");
    menu.className = "cs-menubar";
    menu.innerHTML = "<span>Adapter</span><span>Device</span><span>View</span><span>Help</span>";
    p.appendChild(menu);
    const tb = document.createElement("div");
    tb.className = "cs-toolbar-lite";
    tb.innerHTML = `<button type="button" class="cs-btn">🔍 Search</button><span style="opacity:.4">|</span>
      <button type="button" class="cs-btn" disabled>🔑</button>
      <button type="button" class="cs-btn" disabled>✓</button>
      <button type="button" class="cs-btn" disabled>−</button>
      <button type="button" class="cs-btn" disabled>✈ Send File</button>`;
    const spacer = document.createElement("div");
    spacer.style.flex = "1";
    tb.appendChild(spacer);
    const bt = document.createElement("div");
    bt.style.display = "flex";
    bt.style.alignItems = "center";
    bt.style.gap = "8px";
    bt.innerHTML = "<span>🔷</span>";
    bt.appendChild(makeSwitch(csState.bluetoothOn, (v) => { csState.bluetoothOn = v; }));
    tb.appendChild(bt);
    p.appendChild(tb);
    const area = document.createElement("div");
    area.style.minHeight = "220px";
    p.appendChild(area);
    const status = document.createElement("div");
    status.className = "cs-status-bar";
    status.innerHTML = `<span>▲ 42.49 KB  0.0 B/s</span><span>▼ 2.31 KB  0.00 B/s</span>`;
    p.appendChild(status);
    return p;
  }

  function pageColor() {
    const p = panelRoot();
    const hint = document.createElement("div");
    hint.className = "cs-section-hint";
    hint.style.marginBottom = "12px";
    hint.textContent = "Each device needs an up to date color profile to be color managed.";
    p.appendChild(hint);
    const card = document.createElement("div");
    card.className = "cs-card";
    card.innerHTML = `
      <div class="cs-row" style="font-size:12px;color:#a0a0a8;padding:8px 14px"><span>Device</span><span style="margin-left:auto">Calibration</span></div>
      <div class="cs-tree-row"><span>▼ 🖥</span><span style="flex:1">Generic Laptop Display</span><span class="cs-cal-status">Uncalibrated</span></div>
      <div class="cs-tree-child"><span>●</span><span style="flex:1">Built-in Display</span><span style="color:#888;font-size:12px">Not specified</span></div>`;
    p.appendChild(card);
    const actions = document.createElement("div");
    actions.className = "cs-btn-row";
    actions.appendChild(makeBtn("Add profile"));
    p.appendChild(actions);
    return p;
  }

  function pageDisks() {
    const p = panelRoot(true);
    const split = document.createElement("div");
    split.className = "cs-split";
    split.style.gridTemplateColumns = "220px 1fr";
    const side = document.createElement("div");
    side.className = "cs-split-side";
    const nav = document.createElement("div");
    nav.className = "cs-split-nav";
    [
      { name: "512 GB SSD", sub: "DISK-PREVIEW-512G", icon: "💾" },
      { name: "CD/DVD Drive", sub: "OPTICAL-DRIVE-PREVIEW", icon: "💿" },
    ].forEach((d, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cs-split-item";
      b.style.flexDirection = "column";
      b.style.alignItems = "flex-start";
      b.innerHTML = `<div style="display:flex;gap:8px;align-items:center"><span>${d.icon}</span><div><div>${d.name}</div><div style="font-size:11px;opacity:.7">${d.sub}</div></div></div>`;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.querySelectorAll(".cs-split-item").forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");
        main.innerHTML = "";
        main.appendChild(
          makeSection(
            d.name,
            makeCard([
              makeRowValue("Model", d.sub),
              makeRowValue("Size", i === 0 ? "512 GB" : "—"),
              makeRowValue("Partitioning", i === 0 ? "GPT" : "—"),
              makeRow("Mount options…", null, makeBtn("Edit")),
            ])
          )
        );
      });
      nav.appendChild(b);
    });
    side.appendChild(nav);
    const main = document.createElement("div");
    main.className = "cs-split-main";
    main.appendChild(makeEmpty("💾", "No Device Selected", "Select a device to manage."));
    split.append(side, main);
    p.appendChild(split);
    return p;
  }

  function pageTablet() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["stylus", "tablet"],
        ["Stylus", "Tablet"],
        (tab) =>
          makeEmpty(
            "✏",
            tab === "stylus" ? "No stylus found" : "No tablet found",
            tab === "stylus"
              ? "Please move your stylus to the proximity of the tablet to configure it"
              : "Connect a graphics tablet to configure it."
          ),
        "tablet"
      )
    );
    return p;
  }

  function pageNetwork() {
    const p = panelRoot(true);
    const split = document.createElement("div");
    split.className = "cs-split";
    const side = document.createElement("div");
    side.className = "cs-split-side";
    const nav = document.createElement("div");
    nav.className = "cs-split-nav";
    const items = [
      { id: "wifi", label: "Wi-Fi", icon: "📶" },
      { id: "wired", label: "Wired", icon: "🔌" },
      { id: "loop", label: "Loopback", icon: "↩" },
      { id: "p2p", label: "Wi-Fi P2P", icon: "↔" },
      { id: "proxy", label: "Network proxy", icon: "🖥" },
    ];
    let active = "wifi";
    const main = document.createElement("div");
    main.className = "cs-split-main";
    const paintMain = () => {
      main.innerHTML = "";
      if (active === "wifi") {
        const head = document.createElement("div");
        head.className = "cs-net-head";
        head.innerHTML = `<div class="cs-net-head-left"><span class="icon">📶</span><div><div style="font-size:16px;font-weight:600">Wi-Fi</div><div style="font-size:13px;color:#a0a0a8">Connected</div></div></div>`;
        head.appendChild(makeSwitch(csState.networkWifi, (v) => { csState.networkWifi = v; }));
        main.appendChild(head);
        const ssid = document.createElement("div");
        ssid.className = "cs-net-ssid";
        ssid.innerHTML = `<span>Home-Network  ✓</span><span style="display:flex;gap:10px;opacity:.8">⚙ 🔒 📶</span>`;
        main.appendChild(ssid);
        const actions = document.createElement("div");
        actions.className = "cs-net-actions";
        actions.append(makeBtn("Use as Hotspot…"), makeBtn("Connect to Hidden Network…"), makeBtn("History"));
        main.appendChild(actions);
      } else if (active === "wired") {
        main.appendChild(makeSection("Wired", makeCard([
          makeRow("Ethernet", "Connected · 1000 Mb/s", makeSwitch(true, () => {})),
          makeRowValue("IPv4 Address", "192.168.1.100"),
          makeRowValue("Hardware Address", "AA:BB:CC:DD:EE:FF"),
        ])));
      } else {
        main.appendChild(makeEmpty("🌐", items.find((x) => x.id === active).label, "No additional configuration."));
      }
    };
    items.forEach((it) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cs-split-item" + (it.id === active ? " is-active" : "");
      b.innerHTML = `${it.icon} ${it.label}`;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        active = it.id;
        nav.querySelectorAll(".cs-split-item").forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");
        paintMain();
      });
      nav.appendChild(b);
    });
    const foot = document.createElement("div");
    foot.className = "cs-split-foot";
    foot.innerHTML = `<button type="button" class="cs-btn">+</button><button type="button" class="cs-btn">−</button>`;
    side.append(nav, foot);
    split.append(side, main);
    paintMain();
    p.appendChild(split);
    return p;
  }

  function pagePrinters() {
    const p = panelRoot();
    if (csTitle) csTitle.textContent = "Printers - localhost";
    const menu = document.createElement("div");
    menu.className = "cs-menubar";
    menu.innerHTML = "<span>Server</span><span>Printer</span><span>View</span><span>Help</span>";
    p.appendChild(menu);
    const tb = document.createElement("div");
    tb.className = "cs-toolbar-lite";
    tb.innerHTML = `<button type="button" class="cs-btn">+ Add ▾</button><button type="button" class="cs-btn">↺</button>
      <div class="cs-list-search" style="margin-left:auto"><span style="font-size:12px;color:#a0a0a8">Filter:</span><input type="search" /></div>`;
    p.appendChild(tb);
    const empty = makeEmpty("🖨", "There are no printers configured yet.", null, makeBtn("Add"));
    p.appendChild(empty);
    const status = document.createElement("div");
    status.className = "cs-status-bar";
    status.textContent = "Connected to localhost";
    p.appendChild(status);
    return p;
  }

  function pageSysinfo() {
    const p = panelRoot(true);
    if (csTitle) csTitle.textContent = "System Information";
    const split = document.createElement("div");
    split.className = "cs-split";
    const side = document.createElement("div");
    side.className = "cs-split-side";
    const nav = document.createElement("div");
    nav.className = "cs-split-nav";
    const items = [
      "System Information",
      "USB",
      "GPU",
      "PCI",
      "BIOS",
      "System Reports",
      "Crash Reports",
    ];
    const main = document.createElement("div");
    main.className = "cs-split-main";
    const paint = (name) => {
      main.innerHTML = "";
      if (name !== "System Information") {
        main.appendChild(makeEmpty("📋", name, "No data to display in this preview."));
        return;
      }
      const banner = document.createElement("div");
      banner.className = "cs-sysinfo-banner";
      banner.innerHTML = `<img src="assets/status/linuxmint-logo.svg" alt="Linux Mint" />`;
      main.appendChild(banner);
      const table = makeCard([
        makeRowValue("Computer", "PREVIEW-PC"),
        makeRowValue("Operating System", "Linux Mint 22.3 · Cinnamon 64-bit"),
        makeRowValue("Linux Kernel", "6.8.0-generic"),
        makeRowValue("Processor", "Preview CPU · 8 cores"),
        makeRowValue("Graphics Card", "Preview Graphics"),
        makeRowValue("Memory", "16.0 GB"),
        makeRowValue("Hard Drives", "512 GB"),
        makeRowValue("Desktop Environment", "Cinnamon"),
        makeRowValue("Display Server", "X11"),
      ]);
      table.classList.add("cs-sysinfo-table");
      main.appendChild(table);
      const actions = document.createElement("div");
      actions.className = "cs-btn-row";
      actions.append(makeBtn("Copy"), makeBtn("Upload"));
      main.appendChild(actions);
    };
    items.forEach((name, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cs-split-item" + (i === 0 ? " is-active" : "");
      b.textContent = name;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.querySelectorAll(".cs-split-item").forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");
        paint(name);
      });
      nav.appendChild(b);
    });
    side.appendChild(nav);
    split.append(side, main);
    paint("System Information");
    p.appendChild(split);
    return p;
  }

  function pageDrivers() {
    const p = panelRoot();
    const empty = makeEmpty("⟳", "Looking for drivers", "Please wait…");
    // After a beat show "no proprietary drivers" for a nicer mockup
    setTimeout(() => {
      if (csModuleId !== "drivers" || !csBody.contains(empty)) return;
      empty.querySelector(".cs-empty-icon").textContent = "✓";
      empty.querySelector(".cs-empty-title").textContent = "No proprietary drivers are in use";
      empty.querySelector(".cs-empty-sub").textContent = "Your hardware is using free and open-source drivers.";
    }, 1200);
    p.appendChild(empty);
    return p;
  }

  function pageFingerprints() {
    const p = panelRoot();
    p.appendChild(makeEmpty("🪪", "No fingerprint reader detected", "Fingerprint configuration tool"));
    return p;
  }

  function pageFirewall() {
    const p = panelRoot();
    const menu = document.createElement("div");
    menu.className = "cs-menubar";
    menu.innerHTML = "<span>File</span><span>Edit</span><span>Help</span>";
    p.appendChild(menu);
    const lab = document.createElement("div");
    lab.className = "cs-section-label";
    lab.textContent = "Firewall";
    p.appendChild(lab);
    const layout = document.createElement("div");
    layout.className = "cs-fw-layout";
    const left = makeCard([
      makeRow("Profile:", null, makeSelect(["Home", "Office", "Public"], csState.firewall.profile, (v) => { csState.firewall.profile = v; })),
      makeRow("Status:", null, makeSwitch(csState.firewall.status, (v) => { csState.firewall.status = v; })),
      makeRow("Incoming:", null, makeSelect(["Deny", "Allow", "Reject"], csState.firewall.incoming, (v) => { csState.firewall.incoming = v; })),
      makeRow("Outgoing:", null, makeSelect(["Allow", "Deny", "Reject"], csState.firewall.outgoing, (v) => { csState.firewall.outgoing = v; })),
    ]);
    const shield = document.createElement("div");
    shield.className = "cs-shield";
    layout.append(left, shield);
    p.appendChild(layout);
    const tabs = document.createElement("div");
    tabs.className = "cs-tabs cs-fw-tabs";
    ["🏠", "Rules", "Report", "Log"].forEach((t, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cs-tab" + (i === 0 ? " is-active" : "");
      b.textContent = t;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        tabs.querySelectorAll(".cs-tab").forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");
      });
      tabs.appendChild(b);
    });
    p.appendChild(tabs);
    const panel = document.createElement("div");
    panel.className = "cs-fw-panel";
    p.appendChild(panel);
    return p;
  }

  function pageLogin() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["appearance", "users", "settings"],
        ["Appearance", "Users", "Settings"],
        (tab) => {
          const box = document.createElement("div");
          const L = csState.login;
          if (tab === "users") {
            box.appendChild(
              makeSection(
                "Users",
                makeCard([
                  makeRow("Allow manual login", null, makeSwitch(false, () => {})),
                  makeRow("Hide the user list", null, makeSwitch(false, () => {})),
                  makeRow("Automatic login", null, makeSelect(["Off", "Leon"], "Off", () => {})),
                ])
              )
            );
            return box;
          }
          if (tab === "settings") {
            box.appendChild(
              makeSection(
                "Settings",
                makeCard([
                  makeRow("Activate numlock", null, makeSwitch(false, () => {})),
                  makeRow("Enable HIDPI support", null, makeSelect(["Auto", "On", "Off"], "Auto", () => {})),
                  makeRow("Login screen panel", null, makeSwitch(true, () => {})),
                ])
              )
            );
            return box;
          }
          box.appendChild(
            makeSection(
              "General",
              makeCard([makeRow("Alignment", null, makeSelect(["Left", "Center", "Right"], L.align, (v) => { L.align = v; }))])
            )
          );
          box.appendChild(
            makeSection(
              "Background",
              makeCard([
                (() => {
                  const r = makeRow("Background", null, null);
                  const wrap = document.createElement("div");
                  wrap.className = "cs-path-field";
                  const input = document.createElement("input");
                  input.value = "/usr/share/backgrounds/";
                  input.readOnly = true;
                  const thumb = document.createElement("span");
                  thumb.className = "cs-swatch";
                  thumb.style.background = "#1a1a1e";
                  wrap.append(input, thumb);
                  r.appendChild(wrap);
                  return r;
                })(),
                makeRow("Background color", null, (() => {
                  const s = document.createElement("span");
                  s.className = "cs-swatch";
                  return s;
                })()),
                makeRow("Stretch background across multiple monitors", null, makeSwitch(L.stretch, (v) => { L.stretch = v; })),
                makeRow("Draw user backgrounds", null, makeSwitch(L.drawUserBg, (v) => { L.drawUserBg = v; })),
                makeRow("Draw a grid", null, makeSwitch(L.drawGrid, (v) => { L.drawGrid = v; })),
              ])
            )
          );
          const themes = makeCard([
            makeRow("GTK theme", null, makeSelect(["Mint-Y-Aqua", "Mint-Y-Dark", "Mint-Y"], L.gtk, (v) => { L.gtk = v; })),
            makeRow("Icon theme", null, makeSelect(["Mint-Y-Sand", "Mint-Y", "Mint-X"], L.icons, (v) => { L.icons = v; })),
            makeRow("Mouse pointer", null, makeSelect(["Bibata-Modern-Classic", "DMZ-White", "Adwaita"], L.cursor, (v) => { L.cursor = v; })),
          ]);
          themes.appendChild(makeSlider(L.cursorSize, 8, 64, "", "", (v) => { L.cursorSize = v; }, "Mouse pointer size"));
          box.appendChild(makeSection("Themes", themes));
          return box;
        },
        "login"
      )
    );
    return p;
  }

  function pageSources() {
    const p = panelRoot(true);
    const split = document.createElement("div");
    split.className = "cs-split";
    const side = document.createElement("div");
    side.className = "cs-split-side";
    const nav = document.createElement("div");
    nav.className = "cs-split-nav";
    const items = ["Official Repositories", "PPAs", "Additional Repositories", "Authentication Keys", "Maintenance"];
    const main = document.createElement("div");
    main.className = "cs-split-main";
    const paint = (name) => {
      main.innerHTML = "";
      if (name !== "Official Repositories") {
        main.appendChild(makeEmpty("📦", name, "No items to show in this preview."));
        return;
      }
      const h = document.createElement("div");
      h.className = "cs-section-label";
      h.textContent = "Mirrors";
      main.appendChild(h);
      const mkMirror = (label, url) => {
        const row = document.createElement("div");
        row.className = "cs-mirror-row";
        row.innerHTML = `<span>${label}</span>`;
        const input = document.createElement("input");
        input.value = url;
        input.readOnly = true;
        row.appendChild(input);
        return row;
      };
      main.appendChild(mkMirror("Main (zena)", "https://packages.linuxmint.com"));
      main.appendChild(mkMirror("Base (noble)", "http://archive.ubuntu.com/ubuntu"));
      const optLab = document.createElement("div");
      optLab.className = "cs-section-label";
      optLab.style.marginTop = "16px";
      optLab.textContent = "Optional Sources";
      main.appendChild(optLab);
      main.appendChild(
        makeCard([
          makeRow("Source code repositories", null, makeSwitch(csState.sources.sourceCode, (v) => { csState.sources.sourceCode = v; })),
          makeRow("Debug symbols", null, makeSwitch(csState.sources.debug, (v) => { csState.sources.debug = v; })),
          makeRow("Unstable packages (romeo)", null, makeSwitch(csState.sources.romeo, (v) => { csState.sources.romeo = v; })),
        ])
      );
      const restore = document.createElement("div");
      restore.style.marginTop = "16px";
      restore.appendChild(makeBtn("Restore the default settings", { block: true }));
      main.appendChild(restore);
    };
    items.forEach((name, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cs-split-item" + (i === 0 ? " is-active" : "");
      b.textContent = name;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.querySelectorAll(".cs-split-item").forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");
        paint(name);
      });
      nav.appendChild(b);
    });
    side.appendChild(nav);
    split.append(side, main);
    paint("Official Repositories");
    p.appendChild(split);
    return p;
  }

  function pageSysadmin() {
    const p = panelRoot(true);
    const split = document.createElement("div");
    split.className = "cs-split";
    split.style.gridTemplateColumns = "160px 1fr";
    const side = document.createElement("div");
    side.className = "cs-split-side";
    const nav = document.createElement("div");
    nav.className = "cs-split-nav";
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cs-split-item is-active";
    b.textContent = "Boot Menu";
    nav.appendChild(b);
    side.appendChild(nav);
    const main = document.createElement("div");
    main.className = "cs-split-main";
    main.appendChild(
      makeSection(
        "Boot menu",
        makeCard([
          makeRow("Show the menu", "The menu will always be shown if multiple operating systems are installed.", makeSwitch(csState.sysadmin.showMenu, (v) => { csState.sysadmin.showMenu = v; })),
          makeRow("Delay before booting the default selection (seconds)", "Set the delay to -1 if you want the menu to show indefinitely.", makeStepper(csState.sysadmin.delay, -1, 30, 1, (v) => { csState.sysadmin.delay = v; })),
          makeRow("Remember the last selected choice as the default", null, makeSwitch(csState.sysadmin.remember, (v) => { csState.sysadmin.remember = v; })),
        ])
      )
    );
    main.appendChild(
      makeSection(
        "Boot parameters",
        makeCard([
          makeRowValue("The computer booted with the following parameters:", "quiet splash"),
          (() => {
            const r = document.createElement("div");
            r.className = "cs-row";
            r.innerHTML = `<div class="cs-row-text"><span class="cs-row-sub">In addition to the system configuration you can set your own parameters in the list below</span></div>`;
            return r;
          })(),
        ])
      )
    );
    const listArea = document.createElement("div");
    listArea.className = "cs-list-empty-area";
    listArea.style.minHeight = "80px";
    listArea.style.marginTop = "0";
    main.appendChild(listArea);
    main.appendChild(makeListFoot(["+", "✎", "−", "▲", "▼"]));
    const note = document.createElement("div");
    note.className = "cs-section-hint";
    note.textContent = "Press Save and reboot the computer for changes to take effect.";
    main.appendChild(note);
    const save = document.createElement("div");
    save.className = "cs-btn-row";
    save.appendChild(makeBtn("Save", { primary: true }));
    main.appendChild(save);
    split.append(side, main);
    p.appendChild(split);
    return p;
  }

  function pageUsers() {
    const p = panelRoot();
    p.appendChild(
      makeTabs(
        ["users", "groups"],
        ["Users", "Groups"],
        (tab) => {
          const box = document.createElement("div");
          if (tab === "groups") {
            box.appendChild(makeEmpty("👥", "Groups", "Manage system groups here."));
            const actions = document.createElement("div");
            actions.className = "cs-btn-row";
            actions.style.justifyContent = "flex-start";
            actions.append(makeBtn("Add"), makeBtn("Delete", { disabled: true }));
            box.appendChild(actions);
            return box;
          }
          const usersBox = document.createElement("div");
          usersBox.className = "cs-users-box";
          const user = document.createElement("div");
          user.className = "cs-user-row is-selected";
          user.innerHTML = `<div class="cs-face"></div><div><div style="font-weight:600">Leon</div><div style="font-size:12px;color:#a0a0a8">leon</div></div>`;
          usersBox.appendChild(user);
          box.appendChild(usersBox);
          const actions = document.createElement("div");
          actions.className = "cs-btn-row";
          actions.style.justifyContent = "flex-start";
          actions.append(makeBtn("Add"), makeBtn("Delete", { disabled: true }));
          box.appendChild(actions);
          return box;
        },
        "users"
      )
    );
    return p;
  }

  const PAGE_BUILDERS = {
    backgrounds: pageBackgrounds,
    effects: pageEffects,
    fonts: pageFonts,
    themes: pageThemes,
    accessibility: pageAccessibility,
    account: pageAccount,
    actions: pageActions,
    applets: pageApplets,
    datetime: pageDateTime,
    desklets: pageDesklets,
    desktop: pageDesktop,
    extensions: pageExtensions,
    general: pageGeneral,
    gestures: pageGestures,
    hotcorners: pageHotCorners,
    nightlight: pageNightLight,
    notifications: pageNotifications,
    panel: pagePanel,
    preferred: pagePreferred,
    privacy: pagePrivacy,
    screensaver: pageScreensaver,
    startup: pageStartup,
    windows: pageWindows,
    workspaces: pageWorkspaces,
    display: pageDisplay,
    keyboard: pageKeyboard,
    mouse: pageMouse,
    power: pagePower,
    sound: pageSound,
    thunderbolt: pageThunderbolt,
    inputmethod: pageInputMethod,
    languages: pageLanguages,
    online: pageOnline,
    bluetooth: pageBluetooth,
    color: pageColor,
    disks: pageDisks,
    tablet: pageTablet,
    network: pageNetwork,
    printers: pagePrinters,
    sysinfo: pageSysinfo,
    drivers: pageDrivers,
    fingerprints: pageFingerprints,
    firewall: pageFirewall,
    login: pageLogin,
    "software-sources": pageSources,
    sysadmin: pageSysadmin,
    users: pageUsers,
  };

  function renderSettings() {
    if (!csBody) return;
    const q = (csSearch?.value || "").trim().toLowerCase();

    if (csModuleId) {
      const mod = findCsModule(csModuleId);
      if (csTitle) csTitle.textContent = mod?.name || "System Settings";
      if (csBack) csBack.hidden = false;
      if (csToolbar) csToolbar.classList.add("is-module");
      renderCsPanel(mod);
      return;
    }

    if (csTitle) csTitle.textContent = "System Settings";
    if (csBack) csBack.hidden = true;
    if (csToolbar) csToolbar.classList.remove("is-module");

    csBody.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "cs-grid-wrap";

    for (const group of CS_MODULES) {
      let mods = group.modules;
      if (q) {
        mods = mods.filter(
          (m) => m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q)
        );
      }
      if (!mods.length) continue;

      const sec = document.createElement("section");
      sec.className = "cs-grid-section";
      sec.innerHTML = `<h2 class="cs-grid-section-title"><span class="cs-sec-swatch" style="background:${group.color}"></span>${group.group}</h2>`;
      const grid = document.createElement("div");
      grid.className = "cs-grid";
      for (const mod of mods) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cs-module";
        btn.title = mod.desc;
        btn.innerHTML = `<img src="${mod.icon}" alt="" draggable="false" /><span>${mod.name}</span>`;
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          csModuleId = mod.id;
          renderSettings();
        });
        grid.appendChild(btn);
      }
      sec.appendChild(grid);
      wrap.appendChild(sec);
    }

    if (!wrap.children.length) {
      wrap.innerHTML = `<div class="sw-empty">No settings match your search</div>`;
    }
    csBody.appendChild(wrap);
  }

  function renderCsPanel(mod) {
    if (!mod) {
      csBody.innerHTML = `<div class="sw-empty">Module not found</div>`;
      return;
    }
    csBody.innerHTML = "";
    const builder = PAGE_BUILDERS[mod.id];
    if (builder) {
      csBody.appendChild(builder());
      return;
    }
    const panel = panelRoot();
    panel.appendChild(
      makeSection(
        mod.name,
        makeCard([
          makeRow("Enabled", mod.desc, makeSwitch(true, () => {})),
          makeRowValue("Module", mod.id),
        ])
      )
    );
    csBody.appendChild(panel);
  }

  csClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    closeSettings();
  });
  csBack?.addEventListener("click", (e) => {
    e.stopPropagation();
    csGoBack();
  });
  csSearch?.addEventListener("input", () => renderSettings());

  /* Shared mint window chrome */
  document.querySelectorAll(".mint-wc.mint-min[data-win]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.win;
      const el = id === "software" ? softwareWindow : settingsWindow;
      if (!el) return;
      el.style.visibility = "hidden";
      if (typeof focusedWindowId !== "undefined" && focusedWindowId === id) focusedWindowId = null;
      if (typeof updateWindowList === "function") updateWindowList();
    });
  });
  document.querySelectorAll(".mint-wc.mint-max[data-win]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.win;
      const el = id === "software" ? softwareWindow : settingsWindow;
      if (!el) return;
      el.classList.toggle("maximized");
      if (typeof focusWindow === "function") focusWindow(id);
    });
  });

  [softwareWindow, settingsWindow].forEach((el, idx) => {
    const id = ["software", "settings"][idx];
    el?.addEventListener("mousedown", () => {
      if (el && !el.hidden && typeof focusWindow === "function") focusWindow(id);
    });
    el?.addEventListener("click", (e) => e.stopPropagation());
  });

  document.getElementById("show-desktop-btn")?.addEventListener("click", () => {
    window.setTimeout(() => {
      if (typeof desktopHidden === "undefined") return;
      [softwareWindow, settingsWindow].forEach((el) => {
        if (el && !el.hidden) el.style.visibility = desktopHidden ? "hidden" : "";
      });
      if (typeof updateWindowList === "function") updateWindowList();
    }, 0);
  });

  document.addEventListener("click", () => {
    if (swMenu) swMenu.hidden = true;
  });

  window.openSoftware = openSoftware;
  window.closeSoftware = closeSoftware;
  window.openSettings = openSettings;
  window.closeSettings = closeSettings;
})();
