const {
  addNotificationTokenUrlsToUser,
} = require('../controllers/notificationsToken/notificationToken.controller');
const {
  verifyIdToken,
} = require('../middleware/authentication/authentication');

module.exports = function (app) {
  app.post('/token', verifyIdToken, addNotificationTokenUrlsToUser);
};
