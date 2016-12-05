const User = require('../../models').User;

/**
 *  Get single user
 *  @return {Json}
 */
function findUser(req, res) {
  let userId = req.params.userId;
  let exclude = '-password';
  User.findOne({ _id: userId }, exclude, (err, user) => {
    if (err) return res.status(400).send({ success: false, error: err });
    if (!user) return res.status(404).send({ success: false, error: 'User do not exists' });
    return res.status(200).send({ success: true, data: user });
  });
}

/**
 * Get all users
 * @return {Json}     Response from query
 */
function getUsers(req, res) {
  let exclude = '-password';
  User.find({}, exclude, (err, users) => {
    if (err) return res.status(400).send({ success: false, error: err });
    return res.status(200).send({ success: true, data: users });
  });
}

/**
 * Create User
 * @return {Json}
 */
function createUser(req, res) {
  let params = req.body;
  let user = new User({
    names: params.names,
    surnames: params.surnames,
    email: params.email,
    username: params.username,
    gender: params.gender,
    birthDate: params.birthDate,
    country: params.country
  });
  // generate password
  let password = user.generateHash(params.password)
  user.password = password;
  // save user
  user.save((err, data) => {
    if (err) return res.status(400).send({ success: false, error: err });
    return res.status(201).send({ success: true, data: data });
  });
}

/**
 * Update User
 * @return {Json}
 */
function updateUser(req, res) {
  let userId = req.params.userId;
  let data = req.body;
  User.findByIdAndUpdate(userId, data, (err, user) => {
    if (err) return res.status(400).send({ success: false, error: err });
    return res.status(201).send({ success: true, data: user });
  });
}

/**
 *  Remove user
 * @return {Json}
 */
function deleteUser(req, res) {
  let userId = req.params.userId;
  User.findOne({ _id: userId }, (err, user) => {
    if (err) return res.status(400).send({ success: false, error: err });
    if (!user) return res.status(202).send({ success: false, error: 'This user do not exits' });

    user.remove((err) => {
      if (err) return res.status(400).send({ success: false, error: err });
      return res.status(201).send({ success: true, message: 'user deleted' });
    });
  });
}

// export controller
module.exports = { findUser, getUsers, createUser, updateUser, deleteUser };
