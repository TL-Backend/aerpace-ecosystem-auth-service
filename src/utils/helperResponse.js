const { successResponses, errorResponses } = require('./constant');
const { statusCodes } = require('./statusCode');

class HelperResponse {
  constructor({ success, data, errorCode, message }) {
    if (success) {
      if (!message) {
        message = '';
      }
      if (!data) {
        data = {};
      }
    }

    if (!success) {
      if (!errorCode) {
        errorCode = statusCodes.STATUS_CODE_FAILURE;
      }
      if (!message) {
        message = errorResponses.SOMETHING_WENT_WRONG;
      }
      data = data || {};
      this.errorCode = errorCode;
    }

    this.success = success;
    this.message = message;
    this.data = data;
  }
}

module.exports = {
  HelperResponse,
};
