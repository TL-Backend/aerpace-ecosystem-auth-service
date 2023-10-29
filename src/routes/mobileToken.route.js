const { addMobileTokenToUser } = require("../controllers/mobileToken/mobileToken.controller");

module.exports = function (app) {
  app.post('/token/:user_id', addMobileTokenToUser);
};
