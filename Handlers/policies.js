const express = require("express");
const { checkAdminMiddleware } = require("../auth");

function policiesRouter(db) {
  const router = express.Router();

  // get all the policies
  router.get("/", checkAdminMiddleware, (req, res, next) => {
    db.query(
      "SELECT policies.*, clients.name FROM clients join policies on clients.id = policies.clientid",
      (error, results) => {
        if (error) {
          return next(error);
        }
        res.status(200).json(results.rows);
      }
    );
  });

  // get the policies linked to a specific user
  router.get("/name/:name", checkAdminMiddleware, (req, res, next) => {
    const { name } = req.params;

    db.query(
      "SELECT policies.*, clients.name FROM clients join policies on clients.id = policies.clientid where clients.name ilike $1",
      [`%${name}%`],
      (error, results) => {
        if (error) {
          return next(error);
        }
        res.status(200).json(results.rows);
      }
    );
  });

  return router;
}

module.exports = policiesRouter;
