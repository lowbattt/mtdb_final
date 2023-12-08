module.exports = (req, res) => {
    const alertMessage = req.session.alertMessage;
    
    req.session.alertMessage = undefined;
    res.render('login', { alertMessage: alertMessage });
}
