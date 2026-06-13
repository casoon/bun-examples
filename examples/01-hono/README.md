# Hono + Bun + Cloudflare Workers

Minimales HTTP-Framework, das nativ für Cloudflare Workers entwickelt wurde. Kein Build-Step nötig — Wrangler bündelt `src/index.ts` direkt.

## Setup

```bash
bun install
```

## Entwicklung

```bash
bun run dev        # wrangler dev — lokaler Worker mit Hot Reload
```

## Tests

```bash
bun test           # bun:test, kein externer Runner nötig
```

## Deployment

```bash
bun run deploy     # wrangler deploy
```

## Warum Hono?

- Kein Build-Step, kein Framework-Overhead
- Typsicheres Routing mit TypeScript out of the box
- `hono/testing` erlaubt Unit-Tests ohne echten Server
- Beste Wahl für reine API-Worker oder Edge Functions
