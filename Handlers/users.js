const express = require("express");
const { checkAdminMiddleware } = require("../auth");

function usersRouter(db) {
  const router = express.Router();

  // get all the users
  router.get("/", checkAdminMiddleware, (req, res, next) => {
    db.query(
      "SELECT clients.* FROM clients join policies on clients.id = policies.clientid",
      (error, results) => {
        if (error) {
          return next(error);
        }
        res.status(200).json(results.rows);
      }
    );
  });

  // get the user filtered by id
  router.get("/id/:id", checkAdminMiddleware, (req, res, next) => {
    const { id } = req.params;

    db.query("SELECT * FROM clients WHERE id = $1", [id], (error, results) => {
      if (error) {
        return next(error);
      }
      res.status(200).json(results.rows);
    });
  });

  // get the user filtered by name
  router.get("/name/:name", checkAdminMiddleware, (req, res, next) => {
    const { name } = req.params;

    db.query(
      "SELECT * FROM clients WHERE name ilike $1 ORDER BY name",
      [`%${name}%`],
      (error, results) => {
        if (error) {
          return next(error);
        }
        res.status(200).json(results.rows);
      }
    );
  });
  router.get("/policy/:id", checkAdminMiddleware, (req, res, next) => {
    const { id } = req.params;

    db.query(
      "SELECT clients.*, policies.id FROM clients join policies on clients.id = policies.clientid where policies.id = $1",
      [id],
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

module.exports = usersRouter;
