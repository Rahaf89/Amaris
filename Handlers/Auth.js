const authAdmin = require('../middlewares/auth-admin');

router.get('/admin', authAdmin, (req,res) => {
    res.render('admin');
});


