<script lang="ts">
  interface Props {
    label?: string
    initial?: number
  }

  const { label = 'Counter', initial = 0 }: Props = $props()

  let count = $state(initial)
  const doubled = $derived(count * 2)
  const status = $derived(
    count > 0 ? 'positive' : count < 0 ? 'negative' : 'zero'
  )
</script>

<div class="counter">
  <h3>{label}</h3>
  <p class="value">{count} <small>× 2 = {doubled}</small></p>
  <p class="status">Status: <code>{status}</code></p>
  <div class="controls">
    <button onclick={() => count--}>−</button>
    <button onclick={() => (count = 0)}>Reset</button>
    <button onclick={() => count++}>+</button>
  </div>
</div>

<style>
  .counter { border: 1px solid #ddd; border-radius: 6px; padding: 1rem; max-width: 280px; }
  h3 { margin: 0 0 0.75rem; font-size: 1rem; }
  .value { font-size: 2rem; font-weight: bold; margin: 0.5rem 0; }
  .value small { font-size: 1rem; font-weight: normal; color: #666; }
  .status { margin: 0.25rem 0 1rem; font-size: 0.9rem; color: #444; }
  .controls { display: flex; gap: 0.5rem; }
  button { padding: 0.4rem 1rem; font-size: 1rem; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #f9f9f9; }
  button:hover { background: #eee; }
</style>
