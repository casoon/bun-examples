import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) =>
  c.html('<h1>Hono + Bun + Cloudflare Workers</h1><p><a href="/api/health">/api/health</a></p>')
)

app.get('/api/health', (c) =>
  c.json({ status: 'ok', runtime: 'cloudflare-workers', framework: 'hono' })
)

export default app
