const componentGenerator = require('./components');
const contextGenerator = require('./contexts');
const { upperCaseHelper, lowerCaseHelper } = require('./utils/helpers');

const plopGenerator = function (plop) {
  plop.addHelper('lowerCase', lowerCaseHelper);
  plop.addHelper('upperCase', upperCaseHelper);

  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('context', contextGenerator);
};

module.exports = plopGenerator;
