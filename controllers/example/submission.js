const {
  registerController,
} = require('../../utils/controller');

const config = {
  name: 'submission',
};

module.exports = registerController(config.name, config);