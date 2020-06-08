app.get("/policies", (req, res) => {
  
    pool
      .query("SELECT clients.*, policies.id FROM clients join policies on clients.id = policies.clientid")
      .then(result => res.json(result.rows))
      .catch(err => res.json(err, 500));
  });


  app.get("/policies/name", (req, res) => {
    pool
      .query("SELECT policies.* , clients.name FROM clients join policies on clients.id = policies.clientid")
      .then((result) => res.json(result.rows))
      .catch((err) => res.json(err, 404));
  });