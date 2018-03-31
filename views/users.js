
module.exports = function (fastify, opts, next) {
    fastify.get('/index', function (req, reply) {
        // reply.send({
        //     text: 'hello user'
        // })
    })
    next()
}