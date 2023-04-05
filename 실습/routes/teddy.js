'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/teddy-woo', async function (request, reply) {
    return "this is an 우도현's 페이지"
  })
}