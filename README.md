# ms2-boba — BH-7024 Tour of Duty Site

The live website at **[ms2fett.com](https://ms2fett.com)** for BH-7024 (Boba Fett Re-Armored), chronicling every troop appearance for the 501st Legion / Bounty Hunters Guild.

## How the site works

The site is **plain HTML** — no build step, no framework. The root-level `.html` files are what gets served:

| File | Purpose |
|------|---------|
| `index.html` | Home — latest mission card, countdown to next deployment, stats |
| `tour.html` | Tour of Duty — full mission history with photos and lightbox |
| `about.html` | About BH-7024 |
| `armory.html` | Armor details |

Static assets (photos, images) live in `public/` and map to the root of the domain — `public/mission08.jpg` is served at `https://ms2fett.com/mission08.jpg`.

Styling uses [Tailwind CSS via CDN](https://cdn.tailwindcss.com). Fonts are loaded from Google Fonts.

> **Note:** An Astro project scaffold (`src/`, `package.json`) exists in the repo but is not used for deployment. The root HTML files are authoritative.

## HTML marker system

Dynamic sections of the HTML files use comment markers so the [TOD Tracker](#tod-tracker-web) can surgically update them via the GitHub API without touching the surrounding markup:

| Marker | File | What it wraps |
|--------|------|---------------|
| `SITE:MISSIONS_COUNT_START/END` | `tour.html` | Mission count number |
| `SITE:TIMELINE_START/END` | `tour.html` | All mission cards |
| `SITE:TACTICAL_SUMMARY_START/END` | `tour.html` | Bottom summary text |
| `SITE:MISSION_CARDS_START/END` | `index.html` | Latest mission + next deployment cards |
| `SITE:COUNTDOWN_START/END` | `index.html` | JS countdown script |
| `SITE:TROOP_COUNT_START/END` | `about.html` | Troop count stat |
| `SITE:YEARS_ACTIVE_START/END` | `about.html` | Years active stat |

## Mission card format

Each mission in `tour.html` is an `<article>` card with a large photo on the left (55%) and mission info on the right (45%). Photos are wrapped in `.photo-trigger` buttons that open a full-screen lightbox on click.

```html
<article class="bg-surface border border-[#434840]/40 rounded-sm overflow-hidden group">
  <div class="flex flex-col md:flex-row">
    <div class="md:w-[55%] overflow-hidden bg-[#0e0f0d]">
      <button class="photo-trigger w-full block ..."
        data-src="/mission09.jpg" data-alt="Event Name — Location" type="button">
        <img src="/mission09.jpg" class="w-full aspect-[4/3] object-cover" loading="lazy"/>
      </button>
    </div>
    <div class="md:w-[45%] p-6 md:p-8 flex flex-col justify-between">
      <!-- Mission label, event name, location, date, debrief badge -->
    </div>
  </div>
</article>
```

Missions with multiple photos use a 2-column `grid-cols-2` layout with `aspect-square` images.

## Data source

`data/site.json` mirrors the current state of the site (mission list, troop count, next deployment). The TOD Tracker keeps this in sync whenever a mission is submitted. The HTML files remain the authoritative display layer.

## TOD Tracker (tod-tracker-web)

Missions are submitted through the **[TOD Tracker](https://github.com/CloudStrife7/tod-tracker-web)** — a Next.js PWA that:

1. Compresses and uploads the mission photo to `public/mission##.jpg` in this repo
2. Updates `data/site.json` with the new mission entry
3. Regenerates the marked sections of `tour.html`, `index.html`, and `about.html` in a single atomic commit
4. Optionally posts a formatted troop report to the [BHG forum thread](https://thebhg.net/forum/index.php?/topic/8520-bobarearmored-bh-7024/)

See the [TOD Tracker README](https://github.com/CloudStrife7/tod-tracker-web) for setup and usage.

## Milestones

| Troops | Award |
|--------|-------|
| 10 | White Pin |
| 25 | Silver Pin |
| 50 | Gold Pin |
| 75 | Coin |
