const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    sender_cid: {
       type: String,
       required: true,
    },
    reciever_cid: {
        type: String,
        required: true,
     },
    currency:{
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
     },
   name: {
        type: String,
        default: ''
     },
    message:{
        type: String,
        default: ''
    }
},{minimize: false})

module.exports = mongoose.model('donation', donationSchema);