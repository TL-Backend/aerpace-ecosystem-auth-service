const multer = require('multer');

const { statusCodes } = require('../../utils/statusCode');
const { errorResponse } = require('../../utils/responseHandler');
const { errorResponses } = require('../../utils/constant');
const { logger } = require('../../utils/logger');

const storage = multer.memoryStorage({
  dest: 'uploads/',
  limits: {
    fileSize: 6000000,
  },
});
const upload = multer({ storage: storage });

exports.importCsvMiddleware = upload.single('csv_file');

exports.importCsvValidation = async (req, res, next) => {
  try {
    const csvData = req.file;
    if (!csvData) {
      throw errorResponses.INVALID_CSV_FILE;
    }
    return next();
  } catch (err) {
    logger.error(err.message);
    return errorResponse({
      req,
      res,
      err,
      data: {
        response_file_name: null,
        response_file_url: null,
      },
      message: err,
      code: statusCodes.STATUS_CODE_INVALID_FORMAT,
    });
  }
};
