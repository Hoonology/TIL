'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/hoonology', async function (request, reply) {
    return "this is an 김성훈's 페이지"
  })
}

