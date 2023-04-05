module.exports = async function(fastify, ops) {
  fastify.get('/cart', async function(request, reply) {
    const client = await fastify.pg.connect(); 
    const userId = request.query.user_id;
    const query = `SELECT * FROM public.cart WHERE user_id = '${userId}'`;
    const result = await client.query(query);
   return await reply.code(200).send(result.rows);
  })    
}