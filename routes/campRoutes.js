const express = require('express');
const campController = require('./../controllers/campController');

const router = express.Router();



router
.route('/')
.get(campController.getAllCamps)
.post(campController.createCamp);

router
.route('/:id')
.get(campController.getCamp)
.patch(campController.updateCamp)
.delete(campController.deleteCamp);

module.exports = router;