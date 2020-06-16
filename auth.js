const authMiddleware = (db) => {
  return (req, res, next) => {
    // read the header like req.headers["x-auth-user"]
    const userId = req.headers['x-auth-user']
    if (!userId) {
      return res.sendStatus(401);
    }

    db.query("SELECT role from clients where id = $1", [userId], (error, results) => {
      // check if (results.length)
      if (result.rows.length == 0) {
      // get first result
      (result) => res.json(result.rows[0]);
      // add role to `req`
      var isAdmin = req.role.admin
    if (isAdmin) 
    return next();
    }
      
      next();
    });  
  }
};

module.exports = authMiddleware;