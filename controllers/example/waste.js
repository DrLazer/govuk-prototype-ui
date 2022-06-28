const {
  urls,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.waste,
  previous: urls.whereDoYouLive,
  next: urls.checkYourAnswers,
};

module.exports = registerController(config.name, config);