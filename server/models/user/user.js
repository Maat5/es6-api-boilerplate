const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passwordHash = require('bcrypt-nodejs');
const moment = require('moment');

const userSchema = new Schema({
  names: { type: String },
  surnames: { type: String },
  email: { type: String, required: true, index: { unique: true } },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  gender: { type: String, default: null },
  birthDate: { type: String },
  country: { type: String, default: null },
  isActiveted: { type: Boolean, default: false },
  isBanned: { type: Boolean, default: false },
  sessionToken: { type: String },
  phone: {
    countryCode: String,
    number: String
  },
  avatar: {
    original: String,
    thumb: String,
    format: { type: String, enum: ['jpg', 'jpeg', 'png'] }
  },

}, {
  toObject: {
    virtuals: true
  },
  versionKey: false
});

// generating a hash
userSchema.methods.generateHash = (password) => {
  return passwordHash.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = (password) => {
  return passwordHash.compareSync(password, this.password);
};

userSchema
  .virtual('age')
  .get(() => {
    let age = null;
    if (this.birthDate)
      age = Math.floor(moment(new Date()).diff(moment(this.birthDate, 'YYYY-MM-DD'), 'years', true));
    return age;
  });

module.exports = mongoose.model('User', userSchema);
