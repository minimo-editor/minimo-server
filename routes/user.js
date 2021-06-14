const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.postUser);

module.exports = router;
