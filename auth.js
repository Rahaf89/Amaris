const authMiddleware = (db) => {
  return (req, res, next) => {
    // read the header like req.headers["x-auth-user"]
    const userId = req.headers['x-auth-user']
    if (!userId) {
      return res.sendStatus(401);
    }

    db.query("SELECT role from clients where id = $1", [userId], (error, results) => {
      // check if (results.length)
      if (results.rows.length == 1) {
      // get first result
       res.json(results.rows[0]);
      // add role to `req`
      var admin = req.client = {
        role: "Admin"
      }
    if (admin) {
      next();
    }
    
    };  
  })
};
}
module.exports = authMiddleware;