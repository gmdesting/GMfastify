const fastify = require('fastify')()

fastify.register(require('./dbconnect'),{
    url: 'mongodb://localhost:27017/'
})

fastify.register(require('./route'))

fastify.listen(3030,function(err){
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
})
