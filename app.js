const fastify = require('fastify')()
const serveStatic = require('serve-static')
const path = require('path')

// 数据库连接
fastify.register(require('./dbconnect'),{
    url: 'mongodb://localhost:27017/'
})

// 借口路由
fastify.register(require('./route'))

// static
fastify.use('/static',serveStatic(path.resolve(__dirname,'static')))
// 首页
fastify.use('/index',serveStatic(path.resolve(__dirname,'views')))


fastify.listen(3030,function(err){
    if(err){
        fastify.log.error(err)
        console.log(err)
        process.exit(1)
    }
})
