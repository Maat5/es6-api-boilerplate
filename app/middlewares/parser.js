const i18n = require('i18n');
const _ = require('lodash');

module.exports = (err, req, res, next) => {
  var lang = req.headers.lang;

  if (_.isUndefined(lang))
    lang = 'es';

  // set lang
  i18n.setLocale(lang);

  if (err.status === 400 && err.name === 'SyntaxError' && err.body) {
    return res
      .status(400)
      .send({
        success: false,
        code: 400,
        message: i18n.__('badRequest'),
        description: i18n.__('jsonInvalid')
      });
  }
  else if (err.status === 404) {
    return res
      .status(404)
      .send({
        success: false,
        code: 404,
        message: i18n.__('notFound'),
        description: i18n.__('notFound_m')
      });
  }
  else if (err) {
    console.log(err.stack)
    return res
      .status(400)
      .send({
        success: false,
        code: 401,
        message: i18n.__('internalServerError'),
        description: i18n.__('internalServerError'),
        error: err.message
      });
  }

  next();
};
