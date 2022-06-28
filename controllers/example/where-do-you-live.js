const {
  urls,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.whereDoYouLive,
  previous: urls.eventName,
  next: urls.waste,
};

module.exports = registerController(config.name, config);