const authAdmin = require('../middlewares/auth');

router.get('/admin', authAdmin, (req,res) => {
    res.render('admin');
});


