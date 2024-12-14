export default defineEventHandler(async (event) => {
    const { env } = event.context.cloudflare
    const object = await env.test.get(decodeURI(getRouterParam(event, 'name')!));
    if (!object) return new Response("Object Not Found", { status: 404 });
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    return new Response(object.body, { headers });
})