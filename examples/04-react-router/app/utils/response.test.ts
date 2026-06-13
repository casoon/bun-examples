import { describe, it, expect } from 'bun:test'
import { jsonResponse, parseSearchParams } from './response'

describe('jsonResponse', () => {
  it('returns JSON with correct status', async () => {
    const res = jsonResponse({ ok: true })
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toBe('application/json')
    expect(await res.json()).toEqual({ ok: true })
  })

  it('accepts custom status code', () => {
    const res = jsonResponse({ error: 'not found' }, 404)
    expect(res.status).toBe(404)
  })
})

describe('parseSearchParams', () => {
  it('extracts search params', () => {
    const params = parseSearchParams('https://example.com?foo=bar&baz=qux')
    expect(params).toEqual({ foo: 'bar', baz: 'qux' })
  })

  it('returns empty object for no params', () => {
    const params = parseSearchParams('https://example.com')
    expect(params).toEqual({})
  })
})
