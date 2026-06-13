# SvelteKit + Bun + Cloudflare Workers

SvelteKit 2 mit `@sveltejs/adapter-cloudflare` und Svelte 5 Runes. Bun als Paketmanager und Test-Runner.

## Setup

```bash
bun install
```

## Entwicklung

```bash
bun run dev        # vite dev mit SvelteKit-Plugin
```

## Tests

```bash
bun test           # Unit-Tests in src/lib/
```

## Build & Deployment

```bash
bun run build      # Erzeugt .svelte-kit/cloudflare/
bun run deploy     # wrangler deploy
```

## Struktur

- `src/routes/` — Dateibasiertes Routing
- `src/routes/api/health/+server.ts` — API-Endpunkt
- `src/lib/` — Wiederverwendbare Utilities (mit Tests)
- `src/app.d.ts` — Cloudflare-Bindings über `App.Platform`
