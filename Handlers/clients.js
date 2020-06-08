const db = require('./Models/DB_Config');

//get the user linked to the policies number

const getAllclients = (request, response) => {

  this.db.query('SELECT clients.* FROM clients join policies on clients.id = policies.clientid', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
} 

// get the user filtered by id
const getclientById = (request, response) => {

  this.db.query('SELECT * FROM clients WHERE id = $1', [clientid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// get the user filtered by name
const getclientByName = (request, response) => {
    const nameQuery = req.query.name
  
    let query = `SELECT * FROM clients ORDER BY name`
  
    if (nameQuery) {
      this.db.query(`SELECT * FROM clients WHERE name ilike '%${nameQuery}%' ORDER BY name`)
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    };
  }

  

  module.exports = {
    getAllclients,
    getclientById,
    getclientByName,
    
  }

  