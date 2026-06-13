import type { Route } from './+types/_index'

export function meta(_: Route.MetaArgs) {
  return [{ title: 'React Router v7 + Bun + Cloudflare' }]
}

export default function Index() {
  return (
    <main>
      <h1>React Router v7 + Bun + Cloudflare Workers</h1>
      <p>
        SSR on Cloudflare Workers via{' '}
        <code>@react-router/cloudflare</code>
      </p>
      <p>
        <a href="/api/health">→ /api/health</a>
      </p>
    </main>
  )
}
