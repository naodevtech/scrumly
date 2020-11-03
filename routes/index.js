const express = require("express");

const mainRouter = express.Router();

mainRouter.get("/", (request, response) => {
  response.render("home", {
    css: "/css/main.css",
  });
});

mainRouter.get("/*", (request, response) => {
  response.render("notFoundPage");
});

module.exports = mainRouter;
