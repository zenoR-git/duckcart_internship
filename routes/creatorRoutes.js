const express = require('express');

const controller = require('../controller')

const router = express.Router()

//get all creator data
router.get('/all',controller.listAllCreator)

module.exports = router
