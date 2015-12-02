const basicAuth = require('basic-auth');
const UserDic = require('./users.js');

module.exports = function (req, res, next) {
  const unauthorized = (res) => (
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
       .sendStatus(401)
  );

  const user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res)
  }

  if (UserDic.contains(user)) {
    return next();
  } else {
    return unauthorized(res);
  }
};
