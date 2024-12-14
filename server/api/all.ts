export default defineEventHandler(async (event) => {
    if(import.meta.dev) return ["1", "2", "3"]
    const { env } = event.context.cloudflare
    const list = await env.test.list()
    return list.objects.map(x => x.key)
})