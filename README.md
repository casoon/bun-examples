# Bun 2.0 + Cloudflare — 4 Framework Examples

Begleit-Repository zum Artikel **[Bun 2.0: Was das Release konkret ändert](https://casoon.de/artikel/bun-2-production-ready/)** — vier fertige Starter-Projekte für den Einsatz von Bun 2.0 mit Cloudflare.

![CI](https://github.com/casoon/bun-examples/actions/workflows/ci.yml/badge.svg)

---

## Überblick

| # | Beispiel | Framework | Deployment | Tests |
|---|----------|-----------|------------|-------|
| 01 | [hono](examples/01-hono/) | Hono 4 | CF Workers (SSR API) | `bun test` (CRUD + middleware) |
| 02 | [astro](examples/02-astro/) | Astro 6 | CF Workers (SSR) | `bun test` + Build |
| 03 | [sveltekit](examples/03-sveltekit/) | SvelteKit 2 / Svelte 5 | CF Workers (SSR) | `bun test` + Build |
| 04 | [svelte-vite](examples/04-svelte-vite/) | Svelte 5 SPA (kein SvelteKit) | CF Pages (statisch) | `bun test` + Build |

---

## Voraussetzungen

```bash
# Bun 2.0+
curl -fsSL https://bun.sh/install | bash

# Wrangler (für lokale Entwicklung + Deployment)
bun add -g wrangler
```

---

## Quick Start

Jedes Beispiel ist eigenständig. In das gewünschte Verzeichnis wechseln und:

```bash
bun install
bun test
bun run dev
```

Für Deployment nach Cloudflare:

```bash
wrangler login
bun run deploy
```

---

## Warum nicht pnpm/npm?

Bun 2.0 bringt einen vollständig integrierten Paketmanager mit binärem Lockfile. Im Vergleich:

| Aktion | npm | pnpm | Bun 2.0 |
|--------|-----|------|---------|
| `install` (cold) | ~30s | ~15s | ~1–2s |
| `install` (cached) | ~10s | ~5s | <1s |
| Lockfile | `package-lock.json` | `pnpm-lock.yaml` | `bun.lock` (binär) |
| Workspaces | ✓ | ✓ + Catalogs | ✓ (kein Catalog) |

**Hinweis zu pnpm Catalogs:** Das `catalog:`-Protocol in `pnpm-workspace.yaml` ist pnpm-spezifisch und wird von Bun nicht unterstützt. Diese Beispiele verwenden deshalb fixe Versionen direkt in `package.json`.

---

## Frameworks im Vergleich

| Aspekt | Hono | Astro | SvelteKit | Svelte SPA |
|--------|------|-------|-----------|------------|
| Lernkurve | Sehr gering | Gering | Gering | Gering |
| Bundle-Größe | ~14 KB | ~50 KB+ | ~50 KB+ | ~45 KB |
| Rendering | SSR (manuell) | SSR (automatisch) | SSR (automatisch) | CSR (SPA) |
| Routing | Code-basiert | Dateibasiert | Dateibasiert | Manuell / State |
| Deployment | CF Workers | CF Workers | CF Workers | CF Pages (statisch) |
| Server nötig | Ja | Ja | Ja | Nein |
| Ideal für | APIs, Edge Functions | Content Sites | Web Apps | SPAs ohne Backend |

---

## Was Bun in diesen Beispielen konkret übernimmt

| Aufgabe | Bun | Alternative früher |
|---------|-----|--------------------|
| Pakete installieren | `bun install` (~1s) | npm (~30s), pnpm (~15s) |
| Tests ausführen | `bun test` (built-in) | Vitest / Jest (extra Setup) |
| TypeScript ausführen | Nativ, kein Transpiler | ts-node, Babel |
| Lockfile | `bun.lock` (binär, klein) | `package-lock.json`, `pnpm-lock.yaml` |
| Hono lokal starten | `bun src/server.bun.ts` | node + ts-node |

**Bundling** übernimmt in 3 von 4 Beispielen weiterhin Vite — Bun's eigener Bundler unterstützt Svelte und Astro noch nicht out-of-the-box.

---

## Pakete (Stand Juni 2026)

| Paket | Version |
|-------|---------|
| `hono` | 4.12.25 |
| `astro` | 6.4.6 |
| `@astrojs/cloudflare` | 13.7.0 |
| `@sveltejs/kit` | 2.65.0 |
| `svelte` | 5.56.3 |
| `@sveltejs/adapter-cloudflare` | 7.2.8 |
| `@sveltejs/vite-plugin-svelte` | 7.1.2 |
| `vite` | 8.0.16 |
| `wrangler` | 4.100.0 |
| `@cloudflare/workers-types` | 4.20260613.1 |

---

## Lizenz

MIT
