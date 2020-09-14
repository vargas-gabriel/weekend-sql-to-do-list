// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
//const pg = require( 'pg' ); // this is what lets us talk to db
const tasks = require('./modules/tasks.route');

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use('/tasks', tasks);

// globals
const port = process.env.PORT || 3000;
console.log('listening on port:', port);

// spin up server
app.listen( port, ()=>{
    console.log( 'server up:', port );
}) // end server up
