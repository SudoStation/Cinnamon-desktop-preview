# Bottom panel emblems (currently displayed)

Live snapshot of the **right zone** of the Cinnamon bottom panel on this machine.

- **Desktop:** Cinnamon 6.6 · icon theme **Mint-Y-Yaru**
- **Panel strip:** `00-panel-right-order.png` (enlarged screenshot)

---

## Display order (left → right)

```
… windows … │  ① LocalSend  ② Bluetooth  ③ Updates  ④ Wi‑Fi  ⑤ Volume  ⑥ Battery  ⑦ 22:59  │
            └────────────────────── right zone ────────────────────────────────────────┘
```

| # | Panel emblem file | Icon name | What it is |
|---|-------------------|-----------|------------|
| 1 | `01-localsend-…` | `org.localsend.localsend_app-tray` | LocalSend tray |
| 2 | `02-bluetooth-…` | `blueman-tray-symbolic` | Bluetooth enabled (Blueman) |
| 3 | `03-updates-…` | `mintupdate-updates-available-symbolic` | Update Manager — 1 update |
| 4 | `04-network-…` | `xsi-network-wireless-signal-good-symbolic` | Wi‑Fi, signal **good** |
| 5 | `05-sound-…` | `xsi-audio-volume-medium-symbolic` | Volume **medium** (~40%) |
| 6 | `06-battery-…` | `xsi-battery-level-100-charged-symbolic` | Battery **fully charged** 100% |
| 7 | *(text)* | calendar applet | Clock / date — no emblem glyph |

PNG previews are **white on dark panel background** (as on the panel). LocalSend stays full-color.

### Battery fix

The power daemon (`org.cinnamon.SettingsDaemon.Power` → `Icon`) reports a themed icon chain whose primary name is:

```text
xsi-battery-level-100-charged-symbolic
```

That is the **charged** battery with a bolt — not `battery-full-charged-symbolic` alone. The folder now uses the correct `xsi-battery-level-100-charged-symbolic` asset.

---

## Popovers / menus

Screenshots of what opens when you activate each item live in `popovers/`:

| # | File | Opens | Type |
|---|------|--------|------|
| 1 | `popovers/01-localsend-popover.png` | Open / Quit LocalSend | Small tray menu |
| 2 | `popovers/02-bluetooth-popover.png` | Blueman context menu (Turn Bluetooth Off, Devices, …) | Context menu |
| 3 | `popovers/03-updates-popover.png` | Update Manager window | App window |
| 4 | `popovers/04-network-popover.png` | Wireless list, wired status, Network Settings | Applet popover |
| 5 | `popovers/05-sound-popover.png` | Volume slider, Sound Settings | Applet popover |
| 6 | `popovers/06-battery-popover.png` | Battery status, brightness, power profiles | Applet popover |
| 7 | `popovers/07-calendar-popover.png` | Month calendar | Applet popover |

### Emblems used *inside* those menus

Extracted theme icons for glyphs that appear in the popovers (not only on the panel) live in `popover-emblems/`:

| File prefix | Used in | Role |
|-------------|---------|------|
| `battery-charged-…` | Power | Battery row (fully charged) |
| `display-brightness-…` | Power | Brightness slider |
| `power-profile-*-…` | Power | Power Saver / Balanced / Performance |
| `network-wired-…` | Network | Wired (cable unplugged / connected) |
| `network-wireless-*-…` | Network | Wi‑Fi strength rows (none→excellent) |
| `audio-volume-*-…` | Sound | Speaker / muted |
| `bluetooth-*-…` | Bluetooth menu | On / off style glyphs |

---

## Not on the panel right now

| Item | Why |
|------|-----|
| Notifications | Empty tray + “Show empty tray” off |
| Printers | No printers / jobs |
| Removable drives | Nothing mounted |
| Keyboard layout | Single layout (`us`) — applet hides |
| Favorites | Not visible in the live strip |
| System Reports tray | `Visible=false` on the status icon when this was captured |

---

## Folder layout

```text
panel-emblems/
  00-panel-right-order.png          # live strip, L→R order
  01-…06-…                          # current panel emblems (svg + white png)
  popovers/                         # screenshots of menus/windows
  popover-emblems/                  # icons used inside those menus
  README.md
```

State changes over time (battery unplugged, updates installed, Wi‑Fi strength). Re-capture if you need a fresh snapshot.
