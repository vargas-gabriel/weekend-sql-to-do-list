//requires
const express = require("express");
const router = express.Router();
const pool = require("./pool");

router.delete("/:id", (req, res) => {
	console.log("in /task delete:", req.params);
	//set up query string
	const queryString = `DELETE FROM "to do" WHERE "id" = ${req.params.id}`;
	//ask pool to run query
	pool
		.query(queryString)
		.then((result) => {
			//if successful send 200
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
}); //end delete

router.get("/", (req, res) => {
	console.log("/tasks GET hit");
	//set up querystring
	const queryString = `SELECT * FROM "to do"`;
	//ask pool to run query
	pool
		.query(queryString)
		.then((results) => {
			//send result rows to client
			res.send(results.rows);
		})
		.catch((err) => {
			//catch any errors
			console.log(err);
			res.sendStatus(500);
		}); //end query
}); //end GET

router.post("/", (req, res) => {
	console.log("/tasks POST hit:", req.body);
	// set up query string
	let queryString = `INSERT INTO "to do" ( "name", "priority", "complete" ) VALUES ( $1, $2, $3)`;
	//sanitize inputs
	//ask pool to run query
	pool
		.query(queryString, [req.body.name, req.body.priority, req.body.complete])
		.then((results) => {
			//if successful, send 201
			res.sendStatus(201);
		})
		.catch((error) => {
			//otherwise send 500
			res.sendStatus(500);
		});
}); //end POST

router.put("/:id", (req, res) => {
	console.log("in /task Put:", req.params);
	//set up querystring
	let queryString = `UPDATE "to do" SET "complete"=true WHERE id=${req.params.id}`;
	pool
		.query(queryString)
		.then((results) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			res.sendStatus(500);
		});
}); //end put

//exports
module.exports = router;
