const {
  urls,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.checkYourAnswers,
  previous: urls.waste,
  next: urls.claimSubmission,
};

module.exports = registerController(config.name, config);