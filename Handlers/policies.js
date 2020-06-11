const db = require('./Models/DB_Config'); 

// get the list of policies linked to the user name 

getPolicyByName = (request, response) => {
  
  this.db.query("SELECT policies.* name FROM clients join policies on clients.id = policies.clientid", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
} 



  