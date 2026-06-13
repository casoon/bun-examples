# React Router v7 + Bun + Cloudflare Workers

React Router v7 (ehemals Remix) SSR-App auf Cloudflare Workers. Bun als Paketmanager, Vite als Build-Tool.

## Setup

```bash
bun install
```

## Entwicklung

```bash
bun run dev        # react-router dev (Vite + cloudflareDevProxy)
```

## Tests

```bash
bun test           # Unit-Tests für app/utils/
```

## Build & Deployment

```bash
bun run build      # Erzeugt build/client/ + build/server/
bun run deploy     # wrangler deploy
```

## Struktur

- `app/routes/` — Dateibasiertes Routing (React Router v7)
- `app/routes/api.health.ts` — API-Route via `loader()`
- `app/utils/` — Utilities mit `bun:test`-Tests
- `workers/app.ts` — Cloudflare Worker Entry Point
- `react-router.config.ts` — `serverAdapter: 'cloudflare-workers'`
