const upperCaseHelper = function (text) {
  return text.replace(/\s/g, '').toUpperCase();
};

const lowerCaseHelper = function (text) {
  return text.replace(/\s/g, '').toLowerCase();
};

module.exports = {
  lowerCaseHelper,
  upperCaseHelper,
};
