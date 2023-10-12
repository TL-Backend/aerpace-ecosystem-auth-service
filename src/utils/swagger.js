const swaggerJSDoc = require('swagger-jsdoc');
const swaggerValidation = require('express-ajv-swagger-validation');

const swaggerDefinition = {
  openapi: '3.1.0',
  components: {},
  info: {
    title: 'AERPACE API DOCUMENTATION',
    version: '1.0.0',
    description: 'Aerpace api documentation',
  },
  servers: [
    {
      url: 'https://dev.api.aerpace.tilicho.in/api/v1/',
      description: 'Base URl',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['src/api-doc/**/*api.docs.yaml', 'src/api-doc/**/*.schema.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

swaggerValidation.init(swaggerSpec, {
  beautifyErrors: true,
  framework: 'express',
});

module.exports = {
  swaggerSpec,
  swaggerValidation,
};
