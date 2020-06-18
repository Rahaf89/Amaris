const authMiddleware = (db) => {
  return (req, res, next) => {
    // read the header like req.headers["x-auth-user"]
    const userId = req.headers["x-auth-user"];
    if (!userId) {
      return res.sendStatus(401);
    }
    db.query(
      "SELECT role from clients where id = $1",
      [userId],
      (_, results) => {
        if (results.rows.length === 0) {
          return res.sendStatus(401);
        }
        // get first result
        const userRow = results.rows[0];
        req.userRole = userRow.role;
        next();
      }
    );
  };
};

const checkAdminMiddleware = (req, res, next) => {
  if (req.userRole === "admin") {
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  authMiddleware,
  checkAdminMiddleware,
};
