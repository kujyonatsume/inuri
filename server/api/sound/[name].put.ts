export default defineEventHandler(async (event) => {
    const { env, request } = event.context.cloudflare
    const key = decodeURI(getRouterParam(event, 'name')!)
    await env.test.put(key, request.body);
    return new Response(`Put ${key} successfully!`);
})