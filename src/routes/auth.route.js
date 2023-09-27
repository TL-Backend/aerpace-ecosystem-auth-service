const { login, forgotPassword, temporaryPasswordReset, resetPassword, getAccessTokenWithRefresh } = require("../controllers/auth/auth.controller");
const { verifyIdToken } = require("../middleware/authentication/authentication");

module.exports = function (app) {
  app.post('/auth/login', login);
  app.post('/auth/forgot-password', forgotPassword);
  app.post('/auth/temporary-password-reset', verifyIdToken, temporaryPasswordReset);
  app.post('/auth/reset-password/:uuid',resetPassword)
  app.post('/auth/refresh',getAccessTokenWithRefresh)
};