const userController = require('./userController')
const creatorController = require('./creatorController')
const donationController = require('./donationController')

module.exports = {
    login: userController.login,
    signup: userController.signup,
    listAllCreator: creatorController.listAllCreator,
    saveDonation: donationController.saveDonation,
    getDonationData: donationController.getDonationData
}