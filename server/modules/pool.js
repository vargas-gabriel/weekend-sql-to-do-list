const pg = require('pg');
console.log('what is my database url', process.env.DATABASE_URL);
//const pool = new pg.Pool({
  //  database: 'weekend-to-do-app',
   /// host: 'localhost',
   // port: 5432,
   // max: 12,
   // idleTimeoutMillis: 300000
//})//end db configuration

let pool; 
if (process.env.DATABASE_URL) {
    console.log('connect to a heroku db');
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL
    });
}
else {
    console.log('local db');
    pool = new pg.Pool({
        database: 'weekend-to-do-app'
    });

}


module.exports = pool;