const { updateRBAC } = require('../middleware/authorization/authorization');
const { successResponse, errorResponse } = require('./responseHandler');

exports.responseHandler = ({ message, data, success, errorCode, req, res, next }) => {
  if (!success) {
    return errorResponse({
      req,
      res,
      message,
      code: errorCode,
      data: data?.data,
    });
  }

  const {
    message: responseMessage,
    data: responseData,
    code: responseCode,
  } = data;

  return successResponse({
    data: responseData,
    req,
    res,
    message: responseMessage,
    code: responseCode,
  });
}

exports.responseHandlerForRoles = async ({ message, data, success, errorCode, req, res, next }) => {
  try {
    if (!success) {
      return errorResponse({
        req,
        res,
        message,
        code: errorCode,
        data: data?.data,
      });
    }

    await updateRBAC();

    const {
      message: responseMessage,
      data: responseData,
      code: responseCode,
    } = data;

    return successResponse({
      data: responseData,
      req,
      res,
      message: responseMessage,
      code: responseCode,
    });
  } catch (err) {
    return {
      req,
      res,
      message: errorResponses.SOMETHING_WENT_WRONG,
      code: statusCodes.STATUS_CODE_FAILURE,
    }
  }
}