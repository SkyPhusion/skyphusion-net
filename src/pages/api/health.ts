// Force a Worker script so middleware can run (www → apex 301). Fully static
// builds drop `main` from the generated wrangler config and ASSETS answers first.
export const prerender = false;

export function GET() {
  return new Response(JSON.stringify({ ok: true, service: 'skyphusion-net' }), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

export function HEAD() {
  return new Response(null, {
    status: 200,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}
