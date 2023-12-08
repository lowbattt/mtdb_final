const bcrypt = require('bcrypt')
const User = require('../models/User')
const match = require('nodemon/lib/monitor/match')

module.exports = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        req.session.alertMessage = 'Please enter both email and password.';
        req.session.alertType = 'error';
        return res.redirect('/login');
    }

    try {
        let user = await User.findOne({ email: email });

        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                req.session.userId = user._id;
                return res.redirect('/');
            } else {
                req.session.alertMessage = 'Invalid password. Please try again.';
                req.session.alertType = 'error';
                return res.redirect('/login');
            }
        } else {
            req.session.alertMessage = 'Invalid email. Please try again.';
            req.session.alertType = 'error';
            return res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        req.session.alertMessage = 'An error occurred. Please try again later.';
        req.session.alertType = 'error';
        return res.redirect('/login');
    }
};
