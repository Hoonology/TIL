'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/saey0', async function (request, reply) {
    return "this is an 오시연's 페이지"
  })
}