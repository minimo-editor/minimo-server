const router = require('express').Router();
const createError = require('http-errors');
const Project = require('../models/Project');

router.get('/', (req, res, next) => {
});

router.post('/', async (req, res, next) => {
  const { 
    category,
    concept,
    backgroundColor,
    blocks,
    address,
  } = req.body;

  try {
    let project = await Project.create({
      creatorId: 111111,
      category,
      concept,
      backgroundColor,
      blocks,
      address,
    });

    res.json({ ok: true, data: project });
  } catch (error) {
    console.log(error);
    next(createError());
  }
});

module.exports = router;
