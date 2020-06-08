const db = require('./Models/DB_Config'); 

// get the list of policies linked to the user name 

app.get("/policies/clientname", (req, res) => {
  
    pool
      .query("SELECT policies.* name FROM clients join policies on clients.id = policies.clientid")
      .then(result => res.json(result.rows))
      .catch(err => res.json(err, 500));
  });

  module.exports = require('./App.js')



  