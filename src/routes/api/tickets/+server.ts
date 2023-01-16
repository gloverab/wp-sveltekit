export function POST({ url }) {

  console.log('ticket server api route test')
  return new Response(JSON.stringify({ success: true }))
}