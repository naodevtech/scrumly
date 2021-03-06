const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const routes = require("./routes");

const server = express();

server.use(bodyParser.json());
server.use(logger("tiny"));

server.engine("handlebars", exphbs());
server.set("view engine", "handlebars");
server.use(express.static("public"));

server.use(
  express.urlencoded({
    extended: false,
  })
);

server.use(routes);

module.exports = server;
