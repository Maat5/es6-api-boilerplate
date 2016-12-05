const User = require('../../models').User;

const UserController = module.exports = () => {
  return UserController;
};

/**
 * Get all users
 * @return void     Response from query
 */
UserController.getUsers = (req, res) => {

  let exclude = '-password'
  User.find({}, exclude, (err, users) => {

    if (err)
      return res.status(400).send({ success: false, error: err });

    return res.status(200).send({ success: true, data: users });
  });
}
