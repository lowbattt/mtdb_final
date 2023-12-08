const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide email']
    },
    firstname: {
        type: String,
        required: [true, 'Please provide first name']
    },
    lastname: {
        type: String,
        required: [true, 'Please provide last name']
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    repassword: {
        type: String,
        required: [true, 'Please provide repassword']
    },
    tel: {
        type: String,
        required: [true, 'Please provide phone']
    },
    day: {
        type: String,
        required: [true, 'Please provide day']
    },
    month: {
        type: String,
        required: [true, 'Please provide month']
    },
    year: {
        type: String,
        required: [true, 'Please provide year']
    },
    gender: {
        type: String,
        required: [true, 'Please provide gender']
    }
});

UserSchema.pre('save', function (next) {
    const user = this;

    bcrypt.hash(user.password, 10).then(hash => {
        user.password = hash;
        next();
    }).catch(error => {
        console.error(error);
    });
});



const User = mongoose.model('User', UserSchema);
module.exports = User;
