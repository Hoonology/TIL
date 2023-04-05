const fastify = require('fastify')();

module.exports = async function(fastify, ops) {
  fastify.get('/', async function(request, reply) {

    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query(
        'SELECT * FROM items'
      )

      const tableRows = rows.map(row => `
        <tr>
          <td class="item-ID">${row.item_id}</td>
          <td class="category">${row.category}</td>
          <td class="item-name">${row.item_name}</td>
          <td class="item-price">$${row.price.toFixed(2)}</td>
          <td class="item-brand">${row.brand}</td>
          <td><a href="/add-to-cart/${row.item_id}">Add to Cart</a></td>
        </tr>
      `).join('');

      const html = `
        <html>
          <head>
            <style>
              table {
                border-collapse: separate;
                border-spacing: 0 10px;
                width: 100%;
              }
              th, td {
                text-align: left;
                padding: 8px;
              }
              th {
                background-color: #f2f2f2;
              }
              .item-name {
                font-weight: bold;
                font-size: 1.2rem;
              }
              .item-price {
                font-weight: bold;
                font-size: 1.2rem;
                color: #c0392b;
              }
              .item-brand {
                font-style: italic;
                color: #7f8c8d;
              }
              img {
                max-width: 200px;
              }
              a {
                display: inline-block;
                padding: 8px;
                background-color: #3498db;
                color: #fff;
                border-radius: 4px;
                text-decoration: none;
                transition: background-color 0.2s ease-in-out;
              }
              a:hover {
                background-color: #2980b9;
              }
            </style>
          </head>
          <body>
          <h1 style="text-align:center;">Items</h1>
            <table>
              <thead>
                <tr>
                  <th>Item ID</th>
                  <th>Category</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>Action</th>
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

  fastify.get('/:column/:value', async function(request, reply) {
    const column = request.params.column;
    const value = request.params.value;
    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query(
        `SELECT * FROM items WHERE ${column} = $1`, [value]);

      const tableRows = rows.map(row => `
        <tr>
          <td class="item-ID">${row.item_id}</td>
          <td class="category">${row.category}</td>
          <td class="item-name">${row.item_name}</td>
          <td class="item-price">$${row.price.toFixed(2)}</td>
          <td class="item-brand">${row.brand}</td>
          <td><a href="/add-to-cart/${row.item_id}">Add to Cart</a></td>
        </tr>
      `).join('');

      const html = `
        <html>
          <head>
            <style>
              table {
                border-collapse: separate;
                border-spacing: 0 10px;
                width: 100%;
              }
              th, td {
                text-align: left;
                padding: 8px;
              }
              th {
                background-color: #f2f2f2;
              }
              .item-name {
                font-weight: bold;
                font-size: 1.2rem;
              }
              .item-price {
                font-weight: bold;
                font-size: 1.2rem;
                color: #c0392b;
              }
              .item-brand {
                font-style: italic;
                color: #7f8c8d;
              }
              img {
                max-width: 200px;
              }
              a {
                display: inline-block;
                padding: 8px;
                background-color: #3498db;
                color: #fff;
                border-radius: 4px;
                text-decoration: none;
                transition: background-color 0.2s ease-in-out;
              }
              a:hover {
                background-color: #2980b9;
              }
            </style>
          </head>
          <body>
          <h1 style="text-align:center;">Items</h1>
            <table>
              <thead>
                <tr>
                  <th>Item ID</th>
                  <th>Category</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>Action</th>
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