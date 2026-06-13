export function jsonResponse<T>(data: T, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export function parseSearchParams(url: string): Record<string, string> {
  return Object.fromEntries(new URL(url).searchParams)
}
