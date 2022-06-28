const {
  urls,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.eventName,
  next: urls.whereDoYouLive
};

module.exports = registerController(config.name, config);