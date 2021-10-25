const router = require('express').Router();

const {add, getAll, updateUserId, deleteUser} = require('../controllers/user.controller')
const {userMiddleware:{updateUser}} = require('../middlewares')

router.post('/add', add);
router.get('/getAll', getAll);
router.patch('/updateUserId', updateUser, updateUserId);
router.delete('/deleteUser/:id', deleteUser );


module.exports = router;
