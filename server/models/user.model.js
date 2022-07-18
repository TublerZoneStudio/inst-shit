const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    contact: {type: String, required: true},
    password: {type: String, required: true},
    ip_address: {type: String}
})

module.exports = model('User', UserSchema)