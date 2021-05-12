const router = require('express').Router();
// NOTE: users? user? projects? project?
const userRouter = require('./user');
const projectRouter = require('./project');

router.use('/user', userRouter);
router.use('/project', projectRouter);

module.exports = router;
