<script lang="ts">
  import Counter from './components/Counter.svelte'
  import Todos from './components/Todos.svelte'

  type View = 'counter' | 'todos' | 'info'
  let view = $state<View>('counter')
</script>

<header>
  <h1>Svelte 5 SPA + Cloudflare Pages</h1>
  <nav>
    <button class:active={view === 'counter'} onclick={() => (view = 'counter')}>Counter</button>
    <button class:active={view === 'todos'} onclick={() => (view = 'todos')}>Todos</button>
    <button class:active={view === 'info'} onclick={() => (view = 'info')}>Bun & Deployment</button>
  </nav>
</header>

<main>
  {#if view === 'counter'}
    <section>
      <p class="lead">
        Svelte 5 Runes: <code>$state</code>, <code>$derived</code>, <code>$props</code> — reaktiv ohne Store-Boilerplate.
      </p>
      <div class="row">
        <Counter />
        <Counter label="Custom Start" initial={10} />
      </div>
    </section>

  {:else if view === 'todos'}
    <section>
      <p class="lead">
        Lokaler State mit <code>$state</code> — kein Writable-Store, kein <code>$</code>-Präfix mehr.
        Die Store-Logik (<code>src/lib/todos.ts</code>) ist framework-unabhängig und voll mit <code>bun test</code> testbar.
      </p>
      <Todos />
    </section>

  {:else}
    <section class="info">
      <h2>Was macht dieses Beispiel anders?</h2>
      <table>
        <thead><tr><th>Aspekt</th><th>Dieses Beispiel</th><th>03-sveltekit</th></tr></thead>
        <tbody>
          <tr><td>Framework</td><td>Svelte 5 (rein)</td><td>SvelteKit 2</td></tr>
          <tr><td>Rendering</td><td>Client-Side (SPA)</td><td>SSR (Server)</td></tr>
          <tr><td>Deployment</td><td>Cloudflare Pages (statisch)</td><td>Cloudflare Workers (SSR)</td></tr>
          <tr><td>Build</td><td>Vite → <code>dist/</code></td><td>Vite → <code>.svelte-kit/cloudflare/</code></td></tr>
          <tr><td>Server nötig</td><td>Nein</td><td>Ja (Worker)</td></tr>
        </tbody>
      </table>

      <h2>Bun-Rolle hier</h2>
      <ul>
        <li><strong>Paketmanager</strong> — <code>bun install</code> statt npm/pnpm</li>
        <li><strong>Test-Runner</strong> — <code>bun test src/lib/todos.test.ts</code> (kein Vitest-Setup)</li>
        <li><strong>TypeScript nativ</strong> — kein ts-node, kein Transpiler-Config</li>
        <li><strong>Bundler nicht Bun</strong> — Vite übernimmt den Bundle-Step wegen <code>vite-plugin-svelte</code></li>
      </ul>

      <h2>Deployment</h2>
      <pre><code>bun run build          # → dist/
wrangler pages deploy dist  # → Cloudflare Pages</code></pre>
    </section>
  {/if}
</main>

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; }
  :global(body) { font-family: system-ui, sans-serif; margin: 0; background: #fafafa; color: #222; }

  header { background: #fff; border-bottom: 1px solid #e0e0e0; padding: 1rem 2rem; }
  h1 { margin: 0 0 0.75rem; font-size: 1.4rem; }
  nav { display: flex; gap: 0.5rem; }
  nav button { padding: 0.4rem 1rem; border: 1px solid #ccc; border-radius: 4px; background: #f4f4f4; cursor: pointer; font-size: 0.9rem; }
  nav button.active { background: #0066cc; color: #fff; border-color: #0066cc; }

  main { padding: 2rem; max-width: 900px; margin: 0 auto; }
  .lead { color: #444; margin-bottom: 1.5rem; }
  .row { display: flex; gap: 1.5rem; flex-wrap: wrap; }

  .info h2 { font-size: 1.1rem; margin-top: 2rem; border-bottom: 1px solid #ddd; padding-bottom: 0.25rem; }
  table { border-collapse: collapse; width: 100%; font-size: 0.9rem; }
  th, td { border: 1px solid #ddd; padding: 0.5rem 0.75rem; text-align: left; }
  th { background: #f4f4f4; }
  pre { background: #f4f4f4; padding: 1rem; border-radius: 6px; overflow-x: auto; }
  code { font-family: monospace; font-size: 0.9em; background: #f0f0f0; padding: 0.1em 0.3em; border-radius: 3px; }
  pre code { background: none; padding: 0; }
</style>
