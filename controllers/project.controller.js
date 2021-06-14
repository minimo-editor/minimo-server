const createError = require('http-errors');
const Project = require('../models/Project');

async function getProjectByAddress(req, res, next) {
  try {
    const project = await Project.findOne({ address: req.params.address });
    if (!project) {
      next(createError(404, 'project by given address not found'));
      return;
    }

    res.json({ ok: true, data: project });
  } catch (error) {
    next(createError(500, 'Internal Server Error'));
  }
}

async function postProject(req, res, next) {
  const {
    category,
    concept,
    backgroundColor,
    blocks,
    address,
    creatorId,
  } = req.body;

  try {
    const project = await Project.create({
      creatorId,
      category,
      concept,
      backgroundColor,
      blocks,
      address,
    });

    res.json({ ok: true, data: project });
  } catch (error) {
    next(createError());
  }
}

exports.getProjectByAddress = getProjectByAddress;
exports.postProject = postProject;
