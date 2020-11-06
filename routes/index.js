const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./mydb.db3");

const mainRouter = express.Router();

db.serialize(function () {
  db.run(
    "CREATE TABLE IF NOT EXISTS Prospects(prospect_id INTEGER PRIMARY KEY, lastname TEXT, firstname TEXT, email TEXT, message TEXT)"
  );
});

mainRouter.get("/", (request, response) => {
  response.render("home");
});

mainRouter.post("/", (request, response) => {
  let prospect = {
    lastname: request.body.lastname,
    firtsname: request.body.firstname,
    email: request.body.email,
    message: request.body.message,
  };
  db.serialize(() => {
    db.run(
      `INSERT INTO Prospects (lastname, firstname, email, message)
        VALUES (?, ?, ?, ?)`,
      [prospect.lastname, prospect.firtsname, prospect.email, prospect.message]
    );
  });
  response.render("home");
});

mainRouter.get("/*", (request, response) => {
  response.render("notFoundPage");
});

module.exports = mainRouter;
