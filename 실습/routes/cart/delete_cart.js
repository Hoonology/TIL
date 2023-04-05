module.exports = async function(fastify, ops) {
    fastify.delete('/cart', async function(request, reply) {
        const client = await fastify.pg.connect(); 
        const userId = request.body.user_id;
        const query = `SELECT * FROM public.cart WHERE user_id = '${userId}'`;

               const { rows } = await client.query(
            `DELETE FROM public.cart WHERE user_id = ${userId};`
            )
                
        const result = await client.query(query);
        return await reply.code(201).send(result.rows);
    })     
  } 