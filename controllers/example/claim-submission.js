const {
  urls,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.claimSubmission
};

module.exports = registerController(config.name, config);