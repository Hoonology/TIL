const fastify = require('fastify')();

module.exports = async function(fastify, ops) {
  fastify.get('/', async function(request, reply) {

    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query(
        'SELECT * FROM users'
      )

      const tableRows = rows.map(row => `
        <tr>
          <td>${row.user_id}</td>
          <td>${row.username}</td>
          <td>${row.is_seller ? 'Yes' : 'No'}</td>
        </tr>
      `).join('');

      const html = `
        <html>
          <head>
            <style>
              table {
                border-collapse: collapse;
                width: 100%;
              }
              th, td {
                text-align: left;
                padding: 8px;
                border-bottom: 1px solid #ddd;
              }
              th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body>
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Username</th>
                  <th>Is Seller</th>
                </tr>
              </thead>
              <tbody>
                ${tableRows}
              </tbody>
            </table>
          </body>
        </html>
      `;

      reply.header('Content-Type', 'text/html').send(html);
    } finally {
      client.release()
    }
  })
}