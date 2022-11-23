const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rolSchema = new Schema({
    type: String,
}, {
    versionKey: false
});

module.exports = mongoose.model('Roles', rolSchema);