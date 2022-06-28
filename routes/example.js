const express = require('express');

const router = express.Router();
const controllers = require('../controllers/example');
const { urls } = require('../utils/constants');

// // pages
router.use(`/`, controllers.eventName);
router.use(`/${urls.eventName}`, controllers.eventName);
// router.use(`/${urls.waste}`, controllers.waste);
// router.use(`/${urls.whereDoYouLive}`, controllers.whereDoYouLive);

// // submission
// router.use(`/${urls.checkYourAnswers}`, controllers.checkYourAnswers);
// router.use(`/${urls.claimSubmission}`, controllers.claimSubmission);


module.exports = router;
