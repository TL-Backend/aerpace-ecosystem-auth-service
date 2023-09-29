'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
app.disable('x-powered-by');

const { errorResponse } = require('./src/utils/responseHandler');
const { statusCodes } = require('./src/utils/statusCode');
const { router } = require('./src/routes/index');

const environment = process.env.NODE_ENV || 'development';
const envFilePath = `config/${environment}.env`;
require('dotenv').config({ path: envFilePath });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: '*',
  }),
);

app.use('/api/v1', router);

const { swaggerSpec, swaggerValidation } = require('./src/utils/swagger');

if (environment !== 'production') {
  const swaggerUi = require('swagger-ui-express');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
}

app.use((err, req, res, next) => {
  if (err instanceof swaggerValidation.InputValidationError) {
    return errorResponse({
      code: 400,
      req,
      res,
      message: JSON.stringify(err.errors),
    });
  }
  return next(err);
});

app.use((req, res, next) =>
  errorResponse({
    code: statusCodes.STATUS_CODE_DATA_NOT_FOUND,
    req,
    res,
    message: 'Route not found',
  }),
);

app.use((error, req, res, next) =>
  errorResponse({
    code: statusCodes.STATUS_CODE_FAILURE,
    req,
    res,
    error,
    message: error.message,
  }),
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server started running on port ${process.env.PORT || 3000}`);
});
