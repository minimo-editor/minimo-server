const createError = require('http-errors');
const User = require('../models/User');

async function postUser(req, res, next) {
  const { email, name, photoURL, idToken } = req.body;

  let user;

  try {
    user = await User.findOne({ email });
  } catch (error) {
    next(createError(401, 'Cannot find the user by given email.'));
  }

  if (!user) {
    try {
      user = await User.create({
        email,
        name,
        photoURL,
      });
    } catch (error) {
      next(createError(409, 'Failed to create user.'));
    }
  }

  res.json({ ok: true, data: user });
}

exports.postUser = postUser;
