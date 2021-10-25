const router = require('express').Router();

const userRouter = require('./user.router');
const groupRouter = require('./group.router');

router.use('/user', userRouter);
router.use('/group', groupRouter);

// router.get('/a', (req, res) => res.json('ok'));
module.exports = router;