# Svelte 5 SPA + Vite + Cloudflare Pages

Reines Svelte 5 ohne SvelteKit-Framework-Layer. Vite bündelt das SPA zu statischen Dateien, Cloudflare Pages liefert sie aus — kein Worker, kein Server.

## Was hier anders ist als 03-sveltekit

| Aspekt | Dieses Beispiel | 03-sveltekit |
|--------|-----------------|--------------|
| Framework | Svelte 5 (rein) | SvelteKit 2 |
| Rendering | Client-Side (SPA) | SSR (Server-Side) |
| Deployment | CF Pages (statisch) | CF Workers (SSR) |
| Build-Output | `dist/` | `.svelte-kit/cloudflare/` |
| Server nötig | Nein | Ja (Worker) |

## Setup

```bash
bun install
```

## Entwicklung

```bash
bun run dev       # Vite Dev-Server mit HMR
```

## Tests

```bash
bun test          # Store-Logik in src/lib/ mit bun:test
```

Die Svelte-Komponenten selbst werden per `bun test` nicht unit-getestet (dazu bräuchte es JSDOM/happy-dom). Die Geschäftslogik in `src/lib/` ist framework-unabhängig und vollständig testbar.

## Build & Deployment

```bash
bun run build                  # → dist/ (statisches SPA)
wrangler pages deploy dist     # → Cloudflare Pages
```

## Bun-Rolle

- **Paketmanager** — `bun install`, `bun.lock` (binär, ~10× kleiner als npm lockfile)
- **Test-Runner** — `bun test`, kein Vitest-Setup nötig
- **TypeScript nativ** — kein tsconfig für Runtime, nur für IDE-Support
- **Bundler** — Vite übernimmt (wegen `vite-plugin-svelte`); Bun's eigener Bundler unterstützt Svelte noch nicht out-of-the-box

## Svelte 5 Runes gezeigt

- `$state` — reaktiver lokaler State
- `$derived` — computed values ohne `$: ...` Syntax
- `$props` — typsicheres Prop-Interface ohne `export let`
- `mount()` — neues Svelte 5 API statt `new App()`
