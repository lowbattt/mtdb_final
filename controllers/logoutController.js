module.exports = (req, res) => {
    //หากกดปุ่ม logout ระบบจะทำการลบ session ทิ้ง
    req.session.destroy(() => {
        res.redirect('/')
    })
}
