const { Pool } = require( 'pg' )
const pool = new Pool( {
   user: 'postgres',
   password: '2332',
   host: 'localhost',
   port: 5433,
   database: 'testdb'
} )


module.exports = pool