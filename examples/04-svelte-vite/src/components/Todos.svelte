<script lang="ts">
  import { createTodoStore } from '../lib/todos'

  const store = createTodoStore([
    { id: 1, text: 'Bun 2.0 ausprobieren', done: true },
    { id: 2, text: 'Auf Cloudflare Pages deployen', done: false },
  ])

  // $state — reaktive Kopie der Store-Liste
  let todos = $state(store.getAll())
  let input = $state('')

  const remaining = $derived(todos.filter((t) => !t.done).length)

  function add() {
    if (!input.trim()) return
    store.add(input)
    todos = store.getAll()
    input = ''
  }

  function toggle(id: number) {
    store.toggle(id)
    todos = store.getAll()
  }

  function remove(id: number) {
    store.remove(id)
    todos = store.getAll()
  }
</script>

<div class="todos">
  <h3>Todos <span class="badge">{remaining} offen</span></h3>

  <form onsubmit={(e) => { e.preventDefault(); add() }}>
    <input bind:value={input} placeholder="Neue Aufgabe …" />
    <button type="submit">Add</button>
  </form>

  <ul>
    {#each todos as todo (todo.id)}
      <li class:done={todo.done}>
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onchange={() => toggle(todo.id)}
          />
          {todo.text}
        </label>
        <button class="del" onclick={() => remove(todo.id)} aria-label="remove">×</button>
      </li>
    {/each}
  </ul>
</div>

<style>
  .todos { border: 1px solid #ddd; border-radius: 6px; padding: 1rem; max-width: 360px; }
  h3 { margin: 0 0 1rem; font-size: 1rem; }
  .badge { background: #0066cc; color: #fff; border-radius: 999px; padding: 0.1em 0.5em; font-size: 0.75rem; font-weight: normal; }
  form { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
  input[type="text"], input:not([type]) { flex: 1; padding: 0.4rem 0.6rem; border: 1px solid #ccc; border-radius: 4px; font-size: 0.95rem; }
  button { padding: 0.4rem 0.75rem; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; background: #f9f9f9; }
  ul { list-style: none; padding: 0; margin: 0; }
  li { display: flex; align-items: center; justify-content: space-between; padding: 0.35rem 0; border-bottom: 1px solid #f0f0f0; }
  li.done label { text-decoration: line-through; color: #999; }
  label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.95rem; }
  .del { background: none; border: none; color: #cc0000; font-size: 1.1rem; padding: 0 0.25rem; cursor: pointer; }
</style>
