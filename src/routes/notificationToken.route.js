const { addNotificationTokenUrlsToUser } = require("../controllers/notificationsToken/notificationToken.controller");

module.exports = function (app) {
  app.post('/token/:user_id', addNotificationTokenUrlsToUser);
};
