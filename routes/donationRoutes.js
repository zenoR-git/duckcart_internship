const express = require('express');

const controller = require('../controller')

const router = express.Router()

//Donation API which stores all the information
router.post('/save',controller.saveDonation)

//an api to return all donations from a particular creator A to a particular creator B
router.post('/getdata', controller.getDonationData)

module.exports = router