import { describe, it, expect } from 'bun:test'
import app from './index'

describe('GET /', () => {
  it('returns 200 with HTML', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toContain('text/html')
    expect(await res.text()).toContain('Hono')
  })
})

describe('GET /api/health', () => {
  it('returns status ok', async () => {
    const res = await app.request('/api/health')
    expect(res.status).toBe(200)
    const body = await res.json() as { status: string; framework: string }
    expect(body.status).toBe('ok')
    expect(body.framework).toBe('hono')
  })
})

describe('GET /not-found', () => {
  it('returns 404', async () => {
    const res = await app.request('/not-found')
    expect(res.status).toBe(404)
  })
})
