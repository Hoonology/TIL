module.exports = async function(fastify, ops) {
    fastify.post('/cart', async function(request, reply) {
        const client = await fastify.pg.connect(); 
        const userId = request.body.user_id;
        const query = `SELECT * FROM public.cart WHERE user_id = '${userId}'`;

               const { rows } = await client.query(
            `INSERT INTO cart (cart_id, user_id, item_id, item_cnt)
            VALUES ('${request.body.cart_id}', '${request.body.user_id}', '${request.body.item_id}','${request.body.item_cnt}')`
            )
                
        const result = await client.query(query);
        return await reply.code(201).send(result.rows);
    })     
  } 