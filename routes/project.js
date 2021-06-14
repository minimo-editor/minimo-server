const router = require('express').Router();
const projectController = require('../controllers/project.controller');

router.get('/:address', projectController.getProjectByAddress);
router.post('/', projectController.postProject);

module.exports = router;
