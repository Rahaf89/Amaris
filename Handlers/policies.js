
// get the list of policies linked to the user name 

function makeRouter(db) {
  const router = express.Router()
  router.get('/policies' , (request, response) => {
  db.query("SELECT policies.* name FROM clients join policies on clients.id = policies.clientid", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
  return router;
}
)}

module.exports = makeRouter;




  