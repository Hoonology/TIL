module.exports = async function(fastify, ops) {
    fastify.put('/cart', async function(request, reply) {
        const client = await fastify.pg.connect(); 
        const userId = request.body.user_id;
        const query = `SELECT * FROM public.cart WHERE user_id = '${userId}'`;

        const item_id = request.body.item_id;
        const item_cnt = request.body.item_cnt;
        const cart_id = request.body.cart_id;

        

            const { rows } = await client.query(
                `UPDATE public.cart SET item_cnt=${item_cnt} WHERE cart_id='${cart_id}' and item_id=${item_id}`
            )

                
        const result = await client.query(query);

        return await reply.code(201).send(result.rows);
    })     
  } 