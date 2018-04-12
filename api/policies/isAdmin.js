/**
 * isAdmin
 *
 * @module      :: Policy
 * @description :: Simple policy to allow admin
 *
 */
module.exports = function(req, res, next) {
  if (req.session.isAdmin) {
    return next();
  }

  return res.forbidden('You are not permitted to perform this action.');
};
