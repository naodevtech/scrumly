const express = require("express");

const mainRouter = express.Router();

mainRouter.get("/", (request, response) => {
  response.render("home");
});

mainRouter.get("/*", (request, response) => {
  response.render("notFoundPage");
});

module.exports = mainRouter;
