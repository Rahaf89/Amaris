const authAdmin = require('../App');
const router = express.Router();

router.get('/admin', authAdmin, (req,res) => {
    res.render('admin');
});


