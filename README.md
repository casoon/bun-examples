# Bun 2.0 + Cloudflare Workers — 4 Framework Examples

Begleit-Repository zum Artikel **[Bun 2.0: Was das Release konkret ändert](https://casoon.de/artikel/bun-2-production-ready/)** — vier fertige Starter-Projekte für den Einsatz von Bun 2.0 mit Cloudflare Workers.

![CI](https://github.com/casoon/bun-examples/actions/workflows/ci.yml/badge.svg)

---

## Überblick

| # | Beispiel | Framework | Bun-Support | CF Workers | Tests |
|---|----------|-----------|-------------|------------|-------|
| 01 | [hono](examples/01-hono/) | Hono 4 | Native | Native | `bun test` (Unit) |
| 02 | [astro](examples/02-astro/) | Astro 6 | Vollständig | `@astrojs/cloudflare` v13 | `bun test` + Build |
| 03 | [sveltekit](examples/03-sveltekit/) | SvelteKit 2 / Svelte 5 | Vollständig | `@sveltejs/adapter-cloudflare` | `bun test` + Build |
| 04 | [react-router](examples/04-react-router/) | React Router v7 | Vollständig | `@react-router/cloudflare` | `bun test` + Build |

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

| Aspekt | Hono | Astro | SvelteKit | React Router v7 |
|--------|------|-------|-----------|-----------------|
| Lernkurve | Sehr gering | Gering | Gering | Mittel |
| Bundle-Größe | ~14 KB | ~50 KB+ | ~50 KB+ | ~100 KB+ |
| SSR | Manuell | Automatisch | Automatisch | Automatisch |
| Routing | Code-basiert | Dateibasiert | Dateibasiert | Dateibasiert |
| Ideal für | APIs, Edge Functions | Content Sites | Web Apps | React SPAs mit SSR |

---

## Pakete (Stand Juni 2025)

| Paket | Version |
|-------|---------|
| `hono` | 4.12.25 |
| `astro` | 6.4.6 |
| `@astrojs/cloudflare` | 13.7.0 |
| `@sveltejs/kit` | 2.65.0 |
| `svelte` | 5.56.3 |
| `@sveltejs/adapter-cloudflare` | 7.2.8 |
| `react-router` | 7.17.0 |
| `@react-router/cloudflare` | 7.17.0 |
| `wrangler` | 4.100.0 |
| `@cloudflare/workers-types` | 4.20260613.1 |

---

## Lizenz

MIT
