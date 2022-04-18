const express = require("express");
const router = express.Router();

const pollApiController = require('../controllers/pollApi');

router.post("/", pollApiController.postPoll)

router.get("/:id", pollApiController.getPoll)

router.post("/:id", pollApiController.postAnswer)

router.get("/:id/results", pollApiController.getResults)




module.exports = router;