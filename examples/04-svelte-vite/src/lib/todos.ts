export type Todo = { id: number; text: string; done: boolean }

export function createTodoStore(initial: Todo[] = []) {
  let items = initial.map((t) => ({ ...t }))
  let nextId = Math.max(0, ...items.map((t) => t.id)) + 1

  return {
    getAll(): Todo[] {
      return items.map((t) => ({ ...t }))
    },

    add(text: string): Todo {
      const todo: Todo = { id: nextId++, text: text.trim(), done: false }
      items.push(todo)
      return { ...todo }
    },

    toggle(id: number): Todo | null {
      const todo = items.find((t) => t.id === id)
      if (!todo) return null
      todo.done = !todo.done
      return { ...todo }
    },

    remove(id: number): boolean {
      const idx = items.findIndex((t) => t.id === id)
      if (idx === -1) return false
      items.splice(idx, 1)
      return true
    },

    get remaining(): number {
      return items.filter((t) => !t.done).length
    },
  }
}
