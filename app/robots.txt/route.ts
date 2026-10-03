export function GET() {
  const body = `User-agent: *
Disallow: / 
Sitemap: https://azino777go.vercel.app/sitemap.xml
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
