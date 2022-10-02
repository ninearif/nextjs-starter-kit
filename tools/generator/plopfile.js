const componentGenerator = require('./components');
const { upperCaseHelper, lowerCaseHelper } = require('./utils/helpers');

const plopGenerator = function (plop) {
  plop.addHelper('lowerCase', lowerCaseHelper);
  plop.addHelper('upperCase', upperCaseHelper);

  plop.setGenerator('component', componentGenerator);
};

module.exports = plopGenerator;
