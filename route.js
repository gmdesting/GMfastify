async function routes(fastify, options) {
    const database = fastify.mongo.db('comic')
    const collection = database.collection('book')

    fastify.get('/', async (request, reply) => {
        return {
            hello: 'world'
        }
    })

    fastify.get('/search/:id', async (request, reply) => {
        const result = await collection.findOne({
            id: request.params.id
        })
        if (result.id == null) {
            throw new Error('Invalid value')
        }
        return result
    })
}

module.exports = routes