const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

// Setup express app
const app = express();

// Log requests to the console
app.use(logger("dev"));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route
app.get("*", (req, res) => res.status(200).send({
	message: "Welcome to Todo API using NodeJS and PostgreSQL."
}));

module.exports = app;
