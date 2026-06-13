# Astro + Bun + Cloudflare Workers

Astro 6 SSR-App mit `@astrojs/cloudflare` Adapter v13. Bun ersetzt pnpm/npm als Paketmanager — kein pnpm-Catalog, keine speziellen Workspace-Features nötig.

## Setup

```bash
bun install
```

## Entwicklung

```bash
bun run dev        # astro dev (Vite + HMR)
```

## Tests

```bash
bun test           # Unit-Tests für Utilities
```

## Build & Deployment

```bash
bun run build      # Erzeugt dist/server/ + dist/client/
bun run deploy     # wrangler deploy --config dist/server/wrangler.json
```

> Der Adapter generiert `dist/server/wrangler.json` automatisch — kein manuelles `wrangler.toml` für Deployment nötig.

## Hinweis

Astro selbst ist kompatibel mit Bun. Der Blocker in manchen Templates ist das **pnpm Catalog-Feature** (`catalog:` Protocol) — das ist template-spezifisch, nicht Astro-spezifisch.
