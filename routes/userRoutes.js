const express = require('express');

const controller = require('../controller')

const router = express.Router()

//signup api routes
router.post('/signup', controller.signup)

//login api where payload consists of ‘username’ and ‘password’
router.post('/login', controller.login)


module.exports = router