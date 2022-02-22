const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./src/app'];

swaggerAutogen(outputFile, endpointsFiles);