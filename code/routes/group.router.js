const router = require('express').Router();

const {add, getAll,updateGroupId ,deleteGroup, getOne} = require('../controllers/group.controller')
const {groupMiddleware:{updateGroup, uddGroup}} = require('../middlewares')

router.post('/add', uddGroup,  add);
router.get('/getAll', getAll);
router.get('/getOne/:id', getOne);
router.patch('/updateGroupId', updateGroup, updateGroupId  );
router.delete('/deleteUser/:id', deleteGroup );

module.exports = router;