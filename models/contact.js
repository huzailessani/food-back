
const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },

}, {
    timestamps: true
})

module.exports = mongoose.model("Contact", Contact);
