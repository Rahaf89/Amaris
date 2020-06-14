const authMiddleware = (db) => {
  return (req, res, next) => {
    // read the header like req.headers["x-auth-user"]
    const userId = req.headers['x-auth-user']
    if (!userId) {
      return res.sendStatus(401);
    }

    db.query("SELECT role from clients where id = $1", [userId], (error, results) => {
      // check if (results.length)
      // get first result
      // add role to `req`
      
      next();
    });  
  };
};

module.exports = authMiddleware;