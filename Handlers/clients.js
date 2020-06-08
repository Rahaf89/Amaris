const db = require('./Models/DB_Config'); 


const getclientById = (request, response) => {

  this.db.query('SELECT * FROM clients WHERE id = $1', [clientid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


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
    getclientById,
    getclientByName,
    
  }

  