const fp = require('fastify-plugin')
const MongoClient = require('mongodb').MongoClient;

async function dbConnecter(fastify, options) {
    const url = options.url
    delete options.url

    const db = await MongoClient.connect(url, options)
    fastify.decorate('mongo', db)
}

module.exports = fp(dbConnecter)