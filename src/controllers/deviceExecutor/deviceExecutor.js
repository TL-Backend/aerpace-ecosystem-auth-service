const { postAsync } = require('../../APIRequest/request');
const {
  errorResponse,
  successResponse,
} = require('../../utils/responseHandler');

const deviceExecutorEndPoint = process.env.DEVICE_EXECUTOR_URL;

exports.deviceExecutor = async (req, res, next) => {
  try {
    const { message, data, success, errorCode } = await postAsync({
      uri: `${deviceExecutorEndPoint}`,
      body: req.body,
      query: req.query,
    });

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
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      code: statusCodes.STATUS_CODE_FAILURE,
    });
  }
};