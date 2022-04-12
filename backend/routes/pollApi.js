const express = require("express");
const router = express.Router();

const pollApiController = require('../controllers/pollApi');

router.post("/", pollApiController.postPoll)

module.exports = router;