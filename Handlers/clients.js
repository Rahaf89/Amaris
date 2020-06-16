const express = require('express')

//get the user linked to the policies number

function makeRouter(db) {
  const router = express.Router()
  router.get ('/' , (request, response) => {
    if (request.clients.role === "admin") {
    db.query('SELECT clients.* FROM clients join policies on clients.id = policies.clientid', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    });
  };
  })
  // get the user filtered by id
  router.get('/:id' , (request, response) => {
    db.query('SELECT * FROM clients WHERE id = $1', [clientid], (error, results) => {
         if (error) {
            throw error
         }
          response.status(200).json(results.rows)
        })
      })

  // get the user filtered by name
  router.get('/name' , (request, response) => {
    const nameQuery = req.query.name
    
    let query = `SELECT * FROM clients ORDER BY name`
    
    if (nameQuery) {
       db.query(`SELECT * FROM clients WHERE name ilike '%${nameQuery}%' ORDER BY name`)
       if (error) {
       throw error
      }
       response.status(200).json(results.rows)
     };
  })

  return router;
}

module.exports = makeRouter;
  