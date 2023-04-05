const fastify = require('fastify')();

const { tokenValidator } = require("../controller/tokenValidator")

module.exports = async function(fastify, ops) {
  fastify.post('/', async function (request, reply) {
    try{ 
      const client = await fastify.pg.connect()
      let check_seller = tokenValidator(request.headers.authorization);
      
      if ( check_seller === 1220) {
         // console.log(check_seller); // 1220
        const { rows } = await client.query(
          `INSERT INTO items (item_id, category, brand, price, item_name)
          VALUES ('${request.body.item_id}','${request.body.category}','${request.body.brand}', '${request.body.price}', '${request.body.item_name}')`
        )
        reply.code(201).send('성공적으로 등록되었습니다!');
      }   
      else {
        console.log("Bed Request");
        
      }
    }
    catch(error) {
      //잘못된 유저 에러
      console.log("판매자만 상품을 등록할 수 있습니다!");
      reply.code(401).send('Un authorized');
    }
  });
}
