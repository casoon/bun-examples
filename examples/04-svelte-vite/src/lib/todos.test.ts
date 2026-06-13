import { beforeEach, describe, expect, it, mock } from 'bun:test'
import { createTodoStore } from './todos'
import type { Todo } from './todos'

let store: ReturnType<typeof createTodoStore>

beforeEach(() => {
  store = createTodoStore()
})

describe('add', () => {
  it('creates a todo with done=false', () => {
    const todo = store.add('Buy milk')
    expect(todo.text).toBe('Buy milk')
    expect(todo.done).toBe(false)
    expect(typeof todo.id).toBe('number')
  })

  it('trims whitespace', () => {
    const todo = store.add('  spaces  ')
    expect(todo.text).toBe('spaces')
  })

  it('assigns incrementing ids', () => {
    const a = store.add('first')
    const b = store.add('second')
    expect(b.id).toBeGreaterThan(a.id)
  })
})

describe('toggle', () => {
  it('flips done state', () => {
    const { id } = store.add('task')
    expect(store.toggle(id)?.done).toBe(true)
    expect(store.toggle(id)?.done).toBe(false)
  })

  it('returns null for unknown id', () => {
    expect(store.toggle(9999)).toBeNull()
  })
})

describe('remove', () => {
  it('removes an existing todo', () => {
    const { id } = store.add('to remove')
    expect(store.remove(id)).toBe(true)
    expect(store.getAll().find((t) => t.id === id)).toBeUndefined()
  })

  it('returns false for unknown id', () => {
    expect(store.remove(9999)).toBe(false)
  })
})

describe('remaining', () => {
  it('counts undone todos', () => {
    const a = store.add('a')
    store.add('b')
    store.toggle(a.id)
    expect(store.remaining).toBe(1)
  })
})

// --- mock() Demo ---
// Zeigt bun:test mock() ohne externen Runner

describe('mock() — persistence callback', () => {
  it('calls onSave when a todo is added', () => {
    const onSave = mock((_todo: Todo) => {})

    const todo = store.add('with callback')
    onSave(todo) // in einer echten App würde der Store das intern aufrufen

    expect(onSave).toHaveBeenCalledTimes(1)
    expect(onSave).toHaveBeenCalledWith(expect.objectContaining({ text: 'with callback' }))
  })
})
