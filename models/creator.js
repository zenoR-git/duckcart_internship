const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
    cid: {
       type: String,
       required: true,
       unique: true, 
    },
    userName: {
        type: String,
        required: true,
        unique: true, 
     },
    profileUrl: {
        type: String,
     },
    profession: {
        type: String,
        required: true,
     }
},{minimize: false})

module.exports = mongoose.model('creator', creatorSchema);