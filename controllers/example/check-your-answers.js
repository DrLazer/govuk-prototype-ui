const {
  urls,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.claimSubmission,
  previous: urls.waste,
  next: urls.claimSubmission,
};

module.exports = registerController(config.name, config);